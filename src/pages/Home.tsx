import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Button, Image } from '@rneui/base';
import tw from 'twrnc';
import Card from '../components/Card';
import PrimaryLink from '../components/Links/PrimaryLink';
import { userSlice } from '../../store/slice/userSlice';
import useGetChapterInformation from '../../hooks/useGetChapterInformation';
import useStore from '../../hooks/useStore';

export default function Home({ navigation }: any) {
    const User = useAppSelector(state => state.userReducer)
    const { description, header, topicList } = useGetChapterInformation()
    const { loadUserLanguges, saveUserLanguges } = useStore()
    const dispatch = useAppDispatch()
    const { setisAuth } = userSlice.actions

    useEffect(() => {
        loadUserLanguges().then((result) => {
            if (result) {
                dispatch(setisAuth(true))
            }
        }, (res) => {
            // console.log('reject')
        })

    }, [])

    return <>
        <View style={tw`bg-[#fff] w-full h-full`}>
            <ScrollView>
                <View style={tw`bg-[#777777] rounded-b-sm`}>
                    <Text style={tw`text-center text-gray-100  text-5xl mt-6`}> {header} </Text>
                    <Text style={tw`text-center text-gray-100/90 font-medium text-lg mb-4 mt-2 px-5`}>
                        {description}
                    </Text>

                    <View style={tw`flex justify-center flex-row mb-6`} >
                        <PrimaryLink color={'#0299f2'} title={"Select Topic"} navigationCallback={() => navigation.navigate('Topics')} />
                        <PrimaryLink color={'#0299f2'} title="Settings" optionClassName={'ml-1'} navigationCallback={() => navigation.navigate('Settings')} />
                    </View>
                </View>

                <View style={tw`flex justify-center flex-row flex-wrap mb-6`} >
                    {
                        topicList && topicList.map((topicObject) => <View key={topicObject.topicId}>
                            <Card  {...{ ...topicObject, navigation }} />
                        </View>)
                    }
                </View>
            </ScrollView>


        </View>
    </>
}