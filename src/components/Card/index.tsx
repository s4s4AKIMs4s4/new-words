import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Button, Card as rnCard, Image } from '@rneui/base';
import tw from 'twrnc';
import  PrimaryLink  from '../Links/PrimaryLink';
import { INavigation, ITopic } from '../../models/topic';
import { useEffect } from 'react';



export type ICard = ITopic & INavigation

export default function Card({description, navigation, topicId, topicName}: ICard) {

    return <>
        <View style={tw`bg-[#fff] mt-4`}>
            <rnCard.Title style={tw`text-black-100 text-2xl`} >{topicName}</rnCard.Title>
            
            <View style={{ position: "relative", alignItems: "center" }}>
                <Text style={tw`text-center text-lg font-light`}> {description} </Text>
            </View>

            <View style={tw`flex justify-center flex-row `} >
                <PrimaryLink color={'#0299f2'} optionClassName = {'mt-6'} title = {"Select Topic"} navigationCallback = {() => navigation.navigate('Learn')} />
            </View>

        </View>
    </>
}