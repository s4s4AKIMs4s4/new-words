import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Button, Card as rnCard, Image } from '@rneui/base';
import tw from 'twrnc';
import  PrimaryLink  from '../Links/PrimaryLink';

export default function Card({ navigation }: any) {
    return <>
        <View style={tw`bg-[#fff] mt-4`}>
            <rnCard.Title style={tw`text-black-100 text-2xl`} >Objects</rnCard.Title>
            <View style={{ position: "relative", alignItems: "center" }}>
                <Text style={tw`text-center text-lg font-light`}> Learn all the most essential and popular words. This section contains a list of words grouped by all parts of speech </Text>
            </View>
            <View style={tw`flex justify-center flex-row `} >
                <PrimaryLink color={'#0299f2'} optionClassName = {'mt-6'} title = {"Select Topic"} navigationCallback = {() => navigation.navigate('Learn')} />
            </View>
        </View>
    </>
}