import { View } from 'react-native'
import { Text } from '@rneui/base';
import tw from 'twrnc';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import PrimaryTextInput from '../components/FormElements/PrimaryTextInput'
import { useAppSelector } from '../hooks/redux';
import { useLearn } from '../hooks/useLearn';
import React, { useState } from 'react';

export enum AnswerEnum {
    RIGHT = 'RIGHT',
    WRONG = 'WRONG',
    NO_ANSWER = 'NO_ANSWER'
}

function Learn() {
    const session = useAppSelector(state => state.sessionReducer)
    const {
        getOtherWord,
        currentWord,
        getNextWord,
        logDictionaty,
        addToDictionary,
        checkWord,
        getAllDestinationWords
    } = useLearn(session.topicId)

    const [isRightAnswer, setIsRightAnswer] = useState<AnswerEnum>(AnswerEnum.NO_ANSWER)
    const [inputValue, setInputValue] = useState<string>('')

    const checkWordHandler = () => {
        if (checkWord(inputValue)) {
            setIsRightAnswer(AnswerEnum.NO_ANSWER)
            setInputValue('')
            getNextWord()
        }
        else {
            setInputValue(getAllDestinationWords().join(', '))
            setIsRightAnswer(AnswerEnum.WRONG)
        }
    }
    const dictionaryClickHandler = () => {
        setIsRightAnswer(AnswerEnum.NO_ANSWER)
        setInputValue('')
        addToDictionary()
    }

    const nextWordHandler = () => {
        setIsRightAnswer(AnswerEnum.NO_ANSWER)
        setInputValue('')
        getNextWord()
    }

    return <>
        <View style={tw`bg-[#fff] w-full h-full flex justify-center items-center`}>
            <Text style={tw`text-center text-5xl`}>{currentWord}</Text>

            <PrimaryTextInput
                isWrongAnswer={AnswerEnum.WRONG === isRightAnswer}
                setInputValue={setInputValue}
                value={inputValue}
                placeholder={'enter one of the possible translations'}
            />

            <View >
                <View style={tw`flex justify-center flex-row flex-wrap w-70 mb-7`} >
                    {
                        isRightAnswer === AnswerEnum.NO_ANSWER ? <PrimaryButton callback={checkWordHandler} backgroundColor='rgba(39, 39, 39, 1)' title='check' />
                            : <PrimaryButton callback={nextWordHandler} backgroundColor='rgba(39, 39, 39, 1)' title='next word' />
                    }
                    <PrimaryButton callback={getOtherWord} containerStyle={'ml-1'} backgroundColor='rgba(39, 39, 39, 1)' title='other meaning' />
                    <PrimaryButton callback={dictionaryClickHandler} containerStyle={'ml-1 mt-1'} backgroundColor='rgba(39, 39, 39, 1)' title='add to dictionary' />
                </View>
            </View>
        </View>
    </>
}

export default Learn

