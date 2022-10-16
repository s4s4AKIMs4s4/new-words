import { useEffect, useRef, useState } from "react";
import { DictionaryWords, WordsType } from "../src/models/language";
import { IDictionaryElement } from "../src/models/words";
import { useAppSelector } from "./redux";
import { ILanguageList } from "./useLearn";
import useStore from "./useStore";
import useWords from "./useWords";

export default function useDictionary() {
    const { loadWordFromDictionary, saveWordToDictionary, saveWordsToDictionary } = useStore()
    const [isWordOver, setIsWordOver] = useState<boolean>(false)
    const User = useAppSelector(state => state.userReducer)
    const topicWords = useRef<DictionaryWords>()

    const {
        setLanguageList,
        destenationLanguageList,
        sourseLanguageList,
        destionatioWordsIndex,
        sourceWordsIndex,
        getOtherWord,
        getAllDestinationWords,
        currentWord,
        setCurrentWord,
        getRandomArbitrary,
        conditionForNewPosition,
        setCurrentPosition,
        checkWord
    } = useWords()

    const getWords = async () => {
        const allWords = await loadWordFromDictionary()
        const languageWords = allWords.learnList.filter((wordObject) => {
            return User.destenationLanguage === wordObject.destenationLanguage && User.sourseLanguage === wordObject.sourseLanguage
        })
        return languageWords
    }
    const getWordFromDictionary = (index: number) => {
        const sourceWords = topicWords!.current![index]!.sourceWords
        const destionatioWords = topicWords!.current![index]!.destionatioWords

        setLanguageList(sourceWords, destionatioWords)
        setCurrentWord(sourseLanguageList!.current!.languageList[destionatioWordsIndex])
    }
    useEffect(() => {
        getWords().then((languageWords) => {
            topicWords.current = languageWords
            const randomIndex = getRandomArbitrary(0, topicWords.current.length)
            setCurrentPosition(randomIndex)
            getWordFromDictionary(randomIndex)
        })
    }, [])

    const getNextWord = () => {
        let destionatioWords = ''
        let sourceWords = ''
        setCurrentPosition((prev) => {
            let newPosition = null
            do {
                newPosition = ((newPosition !== null ? newPosition : prev as number) + 1) % topicWords!.current!.length
                if (!topicWords.current![newPosition]) {
                    setIsWordOver(true)
                    return
                }
                destionatioWords = topicWords!.current![newPosition].destionatioWords.join(',')
                sourceWords = topicWords!.current![newPosition].sourceWords.join(',')
            } while (conditionForNewPosition(destionatioWords, sourceWords))
            getWordFromDictionary(newPosition)
            return newPosition
        })
    }

    const filterDeleteWords = (wordObject: IDictionaryElement) => wordObject.sourceWords[0] !== sourseLanguageList!.current!.languageList[0]

    const deleteWordFromDictionary = () => {
        loadWordFromDictionary().then((res) => {
            topicWords.current = topicWords.current?.filter(filterDeleteWords)
            const filtredList = res.learnList.filter(filterDeleteWords)

            saveWordsToDictionary(filtredList).then(() => {
                getNextWord()
            })
        }, () => { })
    }

    const logDictionaty = () => {
        loadWordFromDictionary().then((dictionary) => {
            console.log('logDictionaty')
            console.log(dictionary)
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
        deleteWordFromDictionary,
        logDictionaty,
        isWordOver,
    }
}