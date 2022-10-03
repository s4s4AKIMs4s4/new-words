import { useEffect, useRef, useState } from "react";
import { WordsType } from "../src/models/language";
import { topicEnum } from "../src/models/topic";
import { filteredDataBase } from "../src/services/LearnServices";
import { useAppSelector } from "./redux";

export function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}

export interface ILanguageList{
    languageList: Array<string>,
    index: number
}

export function useLearn(topicId: topicEnum | null) {
    const topicWords = useRef<WordsType>()
    const [currentPosition, setCurrentPosition] = useState<number | undefined>(undefined)
    const sourseLanguageList = useRef<ILanguageList | null>({ index: 1, languageList: [''] })
    const destenationLanguageList = useRef<ILanguageList>({ index: 1, languageList: [''] })
    const [currentWord, setCurrentWord] = useState<string>('')

    const User = useAppSelector(state => state.userReducer)

    const getWords = (position: number) => {
        if (topicWords.current && position) {
            const sourceWords = topicWords.current[position][User.sourseLanguage].split(',')
            const destionatioWords = topicWords.current[position][User.destenationLanguage]
            
            sourseLanguageList!.current!.languageList = getNotEmptyWords(sourceWords)
            sourseLanguageList!.current!.index = 0

            destenationLanguageList!.current!.languageList = getNotEmptyWords(destionatioWords.split(','))
            destenationLanguageList!.current!.index = 0
            setCurrentWord(sourseLanguageList!.current!.languageList[destenationLanguageList!.current!.index])
        }
    }

    useEffect(() => {
        topicWords.current = filteredDataBase.getTopicAllWords(topicId)
        if (topicWords.current) {
            const position = getRandomArbitrary(0, topicWords.current?.length)
            setCurrentPosition(position)
            getWords(position)
        }
    }, [topicId])

    const getNotEmptyWords = (list: Array<string>): Array<string> => {
        return [...new Set(list.filter((word: string) => word !== '').map((word: string) => word.toLowerCase()))]
    }

    const getNextWord = () => {
        let destionatioWords = ''
        let sourceWords = ''

        const conditionForNewPosition = (destionatioWords:string, sourceWords:string) => {
            if(!destionatioWords || !sourceWords) return true
            if(destionatioWords === '' || sourceWords === '') return true
            return false            
        }

        setCurrentPosition((prev) => {
            let newPosition = null

            do {
                newPosition = ( (newPosition !== null ? newPosition : prev as number) + 1 )  % topicWords!.current!.length
                destionatioWords = topicWords!.current![newPosition][User.destenationLanguage]
                sourceWords = topicWords!.current![newPosition][User.sourseLanguage]          
            } while (conditionForNewPosition(destionatioWords,sourceWords))

            getWords(newPosition)
            return newPosition
        })
    }

    const checkWord = (inputWord: string) => {
        const languageListDestination = destenationLanguageList!.current!.languageList
        const findedElement = languageListDestination.find((desWord) => {
            return desWord.toLowerCase() === inputWord.toLowerCase()
        })
        return findedElement
    }

    const getOtherWord = () => {
        const languageList = sourseLanguageList!.current!.languageList
        const index = sourseLanguageList!.current!.index
        sourseLanguageList!.current!.index = (index + 1) % languageList.length
        setCurrentWord(languageList[sourseLanguageList!.current!.index])
    }

    const getAllDestinationWords = () => {
        return destenationLanguageList!.current.languageList
    }

    return {
        topicWords: topicWords.current,
        currentWord,
        getWords,
        checkWord,
        getOtherWord,
        getAllDestinationWords,
        getNextWord
    }

}