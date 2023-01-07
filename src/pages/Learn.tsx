import { View } from 'react-native'
import { Text } from '@rneui/base'
import tw from 'twrnc'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import PrimaryTextInput from '../components/FormElements/PrimaryTextInput'
import { useAppSelector } from '../hooks/redux'
import { useLearn } from '../hooks/useLearn'
import React, { useState, useMemo } from 'react'

export enum AnswerEnum {
  RIGHT = 'RIGHT',
  WRONG = 'WRONG',
  NO_ANSWER = 'NO_ANSWER'
}

function Learn() {
  const session = useAppSelector((state) => state.sessionReducer)
  const {
    getOtherWord,
    currentWord,
    getNextWord,
    addToDictionary,
    checkWord,
    getAllDestinationWords
  } = useLearn(session.topicId)

  const [userAnswer, setUserAnswer] = useState<AnswerEnum>(AnswerEnum.NO_ANSWER)
  const [inputValue, setInputValue] = useState<string>('')

  const checkWordHandler = () => {
    if (checkWord(inputValue)) {
      setUserAnswer(AnswerEnum.NO_ANSWER)
      setInputValue('')
      getNextWord()
    } else {
      setInputValue(getAllDestinationWords().join(', '))
      setUserAnswer(AnswerEnum.WRONG)
    }
  }
  const dictionaryClickHandler = () => {
    setUserAnswer(AnswerEnum.NO_ANSWER)
    setInputValue('')
    addToDictionary()
  }

  const nextWordHandler = () => {
    setUserAnswer(AnswerEnum.NO_ANSWER)
    setInputValue('')
    getNextWord()
  }

  const isRighAnswer = useMemo(() => {
    return userAnswer === AnswerEnum.NO_ANSWER
  }, [userAnswer])

  return (
    <>
      <View style={tw`bg-[#fff] w-full h-full flex justify-center items-center`}>
        <Text style={tw`text-center text-5xl`}>{currentWord}</Text>

        <PrimaryTextInput
          isWrongAnswer={AnswerEnum.WRONG === userAnswer}
          setInputValue={setInputValue}
          value={inputValue}
          placeholder={'enter one of the possible translations'}
        />

        <View>
          <View style={tw`flex justify-center flex-row flex-wrap w-70 mb-7`}>
              <PrimaryButton
                callback={ isRighAnswer ? checkWordHandler : nextWordHandler }
                backgroundColor="rgba(39, 39, 39, 1)"
                title={isRighAnswer ? 'check' : 'next word'}
              />
            <PrimaryButton
              callback={getOtherWord}
              containerStyle={'ml-1'}
              backgroundColor="rgba(39, 39, 39, 1)"
              title="other meaning"
            />
            <PrimaryButton
              callback={dictionaryClickHandler}
              containerStyle={'ml-1 mt-1'}
              backgroundColor="rgba(39, 39, 39, 1)"
              title="add to dictionary"
            />
          </View>
        </View>
      </View>
    </>
  )
}

export default React.memo(Learn)
