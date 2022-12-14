import { Text, View } from 'react-native'
import { Card as rnCard } from '@rneui/base'
import tw from 'twrnc'
import PrimaryLink from '../Links/PrimaryLink'
import { INavigation, ITopic } from '../../models/topic'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { sessionSlice } from '../../store/slice/sessionSlice'
import React from 'react'

export type ICard = ITopic & INavigation

function Card({ description, navigation, topicId, topicName }: ICard) {
  const User = useAppSelector((state) => state.userReducer)
  const { setTopicId } = sessionSlice.actions
  const dispatch = useAppDispatch()

  return (
    <>
      <View style={tw`bg-[#fff] mt-4  w-300px`}>
        <rnCard.Title style={tw`text-2xl`}>{topicName}</rnCard.Title>
        <View
          style={{
            position: 'relative',
            alignItems: 'center'
          }}
        >
          <Text style={tw`text-center text-lg font-light`}> {description} </Text>
        </View>

        <View style={tw`flex justify-center flex-row mb-2`}>
          <PrimaryLink
            color={'#0299f2'}
            optionClassName={'mt-4'}
            title={'Select Topic'}
            navigationCallback={() => {
              dispatch(setTopicId(topicId))
              if (User.isAuth) navigation.navigate('Learn')
              else navigation.navigate('Settings')
            }}
          />
        </View>
      </View>
    </>
  )
}
export default React.memo(Card)
