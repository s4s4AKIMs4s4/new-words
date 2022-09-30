import { useEffect, useRef, useState } from "react";
import { topicEnum } from "../src/models/topic";
import { filteredDataBase } from "../src/services/LearnServices";
import { useAppSelector } from "./redux";

export function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}

export interface ILanguageList {
    languageList: Array<string>,
    index: number
}

export function useLearn(topicId: topicEnum | null) {
    const topicWords = useRef<Array<any>>()
    const [currentPosition, setCurrentPosition] = useState<number | undefined>(undefined)
    const sourseLanguageList = useRef<ILanguageList | null>({index:1,languageList:['']})
    const destenationLanguageList = useRef<ILanguageList>({index:1,languageList:['']})
    const [currentWord,setCurrentWord] = useState<string>('') 

    const User = useAppSelector(state => state.userReducer)

    const getWords = (position:number) => {
        if (topicWords.current && position) {
            const test1 = topicWords.current[position][User.sourseLanguage].split(',')
            
            sourseLanguageList!.current!.languageList = getNotEmptyWords(test1)
            sourseLanguageList!.current!.index = 0

            destenationLanguageList!.current!.languageList = getNotEmptyWords(topicWords.current[position][User.destenationLanguage].split(','))
            destenationLanguageList!.current!.index = 0
            setCurrentWord(sourseLanguageList!.current!.languageList[destenationLanguageList!.current!.index])
        }
    }

    useEffect(() => {
        topicWords.current = filteredDataBase.getTopicAllWords(topicId)
        if (topicWords.current){
            const position = getRandomArbitrary(0, topicWords.current?.length)
            setCurrentPosition(position)
            getWords(position)
        }
    }, [topicId])

    const getNotEmptyWords = (list: Array<any>): Array<any> => {
        return [...new Set(list.filter((word: any) => word !== '').map((word:string) => word.toLowerCase()))]
    }

    const getNextWord = () => {
        let newPosition = 0
        setCurrentPosition((prev) => {
            newPosition = (prev as number + 1) % topicWords!.current!.length
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

    const getNextWords = () => {
        setCurrentPosition((prev) => {
            if (prev) {
                let index = prev + 1
                while (getNotEmptyWords(topicWords!.current![index]).length === 0) {
                    index = (index + 1) % topicWords!.current!.length
                }
                return index
            }
        })
    }

    return {
        topicWords: topicWords.current,
        currentWord,
        getWords,
        getNextWords,
        checkWord,
        getOtherWord,
        getAllDestinationWords,
        getNextWord
    }

}