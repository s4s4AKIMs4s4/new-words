import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import tw from 'twrnc';
import Card from '../components/Card';
import PrimaryLink from '../components/Links/PrimaryLink';
import { userSlice } from '../../store/slice/userSlice';
import useGetChapterInformation from '../../hooks/useGetChapterInformation';
import useStore from '../../hooks/useStore';
import { INavigation } from '../models/topic';
import { IUserStoreLanguage } from '../models/language';

export default function Home({ navigation }: INavigation) {
    const { description, header, topicList } = useGetChapterInformation()
    const { setisAuth,setSourseLanguage, setDestenationLanguage} = userSlice.actions
    const { loadUserLanguges } = useStore()
    const dispatch = useAppDispatch()

    useEffect(() => {
        loadUserLanguges().then((result:IUserStoreLanguage) => {
            if (result) {
                if(Object.keys(result).length === 0) return
                dispatch(setisAuth(true))
                dispatch(setSourseLanguage(result.sourseLanguage))
                dispatch(setDestenationLanguage(result.from))
            }
        }, (res) => {})

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