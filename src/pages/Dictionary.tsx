import tw from 'twrnc'
import { View } from 'react-native'
import { Text } from '@rneui/base'
import PrimaryTextInput from '../components/FormElements/PrimaryTextInput'
import useDictionary from '../hooks/useDictionary'
import React, { useState } from 'react'
import { AnswerEnum } from './Learn'
import PrimaryButton from '../components/Buttons/PrimaryButton'

function Dictionary() {
  const {
    currentWord,
    checkWord,
    getAllDestinationWords,
    getNextWord,
    getOtherWord,
    deleteWordFromDictionary,
    isWordOver
  } = useDictionary()
  const [isRightAnswer, setIsRightAnswer] = useState<AnswerEnum>(AnswerEnum.NO_ANSWER)
  const [inputValue, setInputValue] = useState<string>('')

  const checkWordHandler = () => {
    if (checkWord(inputValue)) {
      setIsRightAnswer(AnswerEnum.NO_ANSWER)
      setInputValue('')
      getNextWord()
    } else {
      setInputValue(getAllDestinationWords().join(', '))
      setIsRightAnswer(AnswerEnum.WRONG)
    }
  }

  const nextWordHandler = () => {
    setIsRightAnswer(AnswerEnum.NO_ANSWER)
    setInputValue('')
    getNextWord()
  }
  const deleteWordClickHandler = () => {
    setIsRightAnswer(AnswerEnum.NO_ANSWER)
    setInputValue('')
    deleteWordFromDictionary()
  }

  return (
    <>
      <View style={tw`bg-[#fff] w-full h-full flex justify-center items-center`}>
        {currentWord && !isWordOver
          ? (
          <>
            <Text style={tw`text-center text-5xl`}>{currentWord}</Text>
            <PrimaryTextInput
              isWrongAnswer={AnswerEnum.WRONG === isRightAnswer}
              setInputValue={setInputValue}
              value={inputValue}
              placeholder={'enter one of the possible translations'}
            />

            <View>
              <View style={tw`flex justify-center flex-row flex-wrap w-70 mb-7`}>
                {isRightAnswer === AnswerEnum.NO_ANSWER
                  ? (
                  <PrimaryButton
                    callback={checkWordHandler}
                    backgroundColor="rgba(39, 39, 39, 1)"
                    title="check"
                  />
                    )
                  : (
                  <PrimaryButton
                    callback={nextWordHandler}
                    backgroundColor="rgba(39, 39, 39, 1)"
                    title="next word"
                  />
                    )}
                <PrimaryButton
                  callback={getOtherWord}
                  containerStyle={'ml-1'}
                  backgroundColor="rgba(39, 39, 39, 1)"
                  title="other meaning"
                />
                <PrimaryButton
                  callback={deleteWordClickHandler}
                  containerStyle={'ml-1 mt-1'}
                  backgroundColor="rgba(39, 39, 39, 1)"
                  title="remove from dictionary"
                />
              </View>
            </View>
          </>
            )
          : (
          <Text style={tw`text-center text-3xl`}>
            {' '}
            Empty, you have not added any words in these languages{' '}
          </Text>
            )}
      </View>
    </>
  )
}
export default React.memo(Dictionary)
