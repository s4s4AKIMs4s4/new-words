import { useEffect, useRef, useState } from 'react'
import { WordsType } from '../models/language'
import { topicEnum } from '../models/topic'
import { IDictionaryElement } from '../models/words'
import { filteredDataBase } from '../services/LearnServices'
import { useAppSelector } from './redux'
import useStore from './useStore'
import useWords from './useWords'

export interface ILanguageList {
  languageList: string[]
  index: number
}

export function useLearn(topicId: topicEnum | null) {
  const topicWords = useRef<WordsType>()
  const { saveWordToDictionary, loadWordFromDictionary } = useStore()
  const User = useAppSelector((state) => state.userReducer)

  const {
    setLanguageList,
    destenationLanguageList,
    sourseLanguageList,
    destionatioWordsIndex,
    getOtherWord,
    getAllDestinationWords,
    checkWord,
    currentWord,
    setCurrentWord,
    getRandomArbitrary,
    conditionForNewPosition,
    setCurrentPosition
  } = useWords()

  const getWords = (position: number) => {
    if (topicWords.current != null && position) {
      const sourceWords = topicWords.current[position][User.sourseLanguage].split(',')
      const destionatioWords = topicWords.current[position][User.destenationLanguage].split(',')
      setLanguageList(sourceWords, destionatioWords)
      setCurrentWord(sourseLanguageList.current!.languageList[destionatioWordsIndex])
    }
  }

  useEffect(() => {
    topicWords.current = filteredDataBase.getTopicAllWords(topicId)
    if (topicWords.current != null) {
      const position = getRandomArbitrary(0, topicWords.current?.length)
      setCurrentPosition(position)
      getNextWord()
    }
  }, [topicId])

  const getNextWord = () => {
    let destionatioWords = ''
    let sourceWords = ''

    setCurrentPosition((prev) => {
      let newPosition = null

      do {
        newPosition =
          ((newPosition !== null ? newPosition : (prev as number)) + 1) % topicWords.current!.length
        destionatioWords = topicWords.current![newPosition][User.destenationLanguage]
        sourceWords = topicWords.current![newPosition][User.sourseLanguage]
      } while (conditionForNewPosition(destionatioWords, sourceWords))

      getWords(newPosition)
      return newPosition
    })
  }

  const addToDictionary = () => {
    const sourceWords = sourseLanguageList.current!.languageList
    const destionatioWords = destenationLanguageList.current.languageList

    const dictionaryElement: IDictionaryElement = {
      sourseLanguage: User.sourseLanguage,
      destenationLanguage: User.destenationLanguage,
      sourceWords,
      destionatioWords
    }
    saveWordToDictionary(dictionaryElement).then(() => {
      getNextWord()
    })
  }
  const logDictionaty = () => {
    loadWordFromDictionary().then(
      (res) => {
        console.log(res)
      },
      () => {}
    )
  }

  return {
    topicWords: topicWords.current,
    currentWord,
    getWords,
    checkWord,
    getOtherWord,
    getAllDestinationWords,
    getNextWord,
    addToDictionary,
    logDictionaty
  }
}
