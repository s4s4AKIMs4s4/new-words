import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Provider } from 'react-redux';
// import { setupStore } from '../../srote/store';
// import { listSlice } from "../../srote/slice/sessionSlice"
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Button, Image } from '@rneui/base';
import tw from 'twrnc';
import Card from '../components/Card';
import  PrimaryLink  from '../components/Links/PrimaryLink';
import {userSlice} from '../../store/slice/userSlice';

export default function Home({ navigation }: any) {
    const User = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const { setisAuth } = userSlice.actions
    //test redux actions:
    useEffect(() => {
        console.log(User.isAuth)
    },[User])

    useEffect(() => {
        console.log(User)
        dispatch(setisAuth(true))
    },[])

    return <>
        <View style={tw`bg-[#fff] w-full h-full`}>
            <ScrollView>
            <View style={tw`bg-[#777777] rounded-b-sm`}>
                <Text style={tw`text-center text-gray-100  text-5xl mt-6`}>Header</Text>
                <Text style={tw`text-center text-gray-100/90 font-medium text-lg mb-4 mt-2 px-5`}>
                    Learn all the most essential and popular words. This section contains a list of words grouped by all parts of speech
                </Text>
                
                <View style={tw`flex justify-center flex-row mb-6`} >
                    <PrimaryLink color={'#0299f2'} title = {"Select Topic"} navigationCallback = {() => navigation.navigate('FullPost')} />
                    <PrimaryLink color={'#0299f2'} title="Settings" optionClassName = {'ml-1'} navigationCallback = {() => navigation.navigate('Post')} />
                </View>
            </View>

            {
                [1,2,3].map(() => <Card navigation = {navigation}/>)    
            }

            </ScrollView>

            
        </View>
    </>
}