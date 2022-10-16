import { useEffect, useRef, useState } from "react";
import { WordsType } from "../src/models/language";
import { topicEnum } from "../src/models/topic";
import { IDictionaryElement } from "../src/models/words";
import { filteredDataBase } from "../src/services/LearnServices";
import { useAppSelector } from "./redux";
import useStore from "./useStore";
import useWords from "./useWords";

export interface ILanguageList {
    languageList: Array<string>,
    index: number
}

export function useLearn( topicId: topicEnum | null ) {
    const topicWords = useRef<WordsType>()
    const { saveWordToDictionary, loadWordFromDictionary } = useStore()
    const User = useAppSelector(state => state.userReducer)
    
    const {
        setLanguageList,
        destenationLanguageList, 
        sourseLanguageList, 
        destionatioWordsIndex, 
        sourceWordsIndex,
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
        if (topicWords.current && position) {
            const sourceWords = topicWords.current[position][User.sourseLanguage].split(',')
            const destionatioWords = topicWords.current[position][User.destenationLanguage].split(',')
            setLanguageList(sourceWords, destionatioWords)
            setCurrentWord(sourseLanguageList!.current!.languageList[destionatioWordsIndex])
        }
    }

    useEffect(() => {
        topicWords.current = filteredDataBase.getTopicAllWords(topicId)
        if (topicWords.current) {
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
                newPosition = ((newPosition !== null ? newPosition : prev as number) + 1) % topicWords!.current!.length
                destionatioWords = topicWords!.current![newPosition][User.destenationLanguage]
                sourceWords = topicWords!.current![newPosition][User.sourseLanguage]
            } while (conditionForNewPosition(destionatioWords, sourceWords))

            getWords(newPosition)
            return newPosition
        })
    }

    const addToDictionary = () => {
        const sourceWords = sourseLanguageList!.current!.languageList
        const destionatioWords = destenationLanguageList!.current!.languageList

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
        loadWordFromDictionary().then((res) => {
            console.log(res)
        }, () => { })
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