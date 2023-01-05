import { useRef, useState } from 'react'
import { ILanguageList } from './useLearn'

function useWords() {
  const sourseLanguageList = useRef<ILanguageList | null>({ index: 0, languageList: [''] })
  const destenationLanguageList = useRef<ILanguageList>({ index: 0, languageList: [''] })
  const [currentWord, setCurrentWord] = useState<string>('')
  const [currentPosition, setCurrentPosition] = useState<number | undefined>(undefined)

  const getValidateWords = (list: string[]): string[] => {
    return [
      ...new Set(
        list.filter((word: string) => word !== '').map((word: string) => word.toLowerCase().trim())
      )
    ]
  }

  const setLanguageList = (sourceWords: string[], destionatioWords: string[]) => {
    sourseLanguageList.current!.languageList = getValidateWords(sourceWords)
    sourseLanguageList.current!.index = 0

    destenationLanguageList.current.languageList = getValidateWords(destionatioWords)
    destenationLanguageList.current.index = 0
  }

  const getRandomArbitrary = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const getOtherWord = () => {
    const languageList = sourseLanguageList.current!.languageList
    const index = sourseLanguageList.current!.index
    sourseLanguageList.current!.index = (index + 1) % languageList.length
    setCurrentWord(languageList[sourseLanguageList.current!.index])
  }

  const getAllDestinationWords = () => {
    return destenationLanguageList.current.languageList
  }

  const conditionForNewPosition = (destionatioWords: string, sourceWords: string) => {
    if (!destionatioWords || !sourceWords) return true
    if (destionatioWords === '' || sourceWords === '') return true
    return false
  }

  const checkWord = (inputWord: string) => {
    const languageListDestination = destenationLanguageList.current.languageList
    const findedElement = languageListDestination.find((desWord) => {
      return desWord.toLowerCase() === inputWord.toLowerCase()
    })
    return findedElement
  }

  return {
    sourseLanguageList,
    destenationLanguageList,
    sourceWordsIndex: sourseLanguageList.current!.index,
    destionatioWordsIndex: destenationLanguageList.current.index,
    currentWord,
    setLanguageList,
    setCurrentWord,
    getOtherWord,
    getAllDestinationWords,
    getRandomArbitrary,
    conditionForNewPosition,
    checkWord,
    setCurrentPosition
  }
}
export default useWords
