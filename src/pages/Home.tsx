import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { setupStore } from '../../srote/store';
import { listSlice } from "../../srote/slice/listSlice"
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Button, Card, Image } from '@rneui/base';
import tw from 'twrnc';

export default function Home({ navigation }: any) {
    const foo = useAppSelector(state => state.userReducer.foo)
    const dispatch = useAppDispatch()
    const { setListItems } = listSlice.actions
    return <>
        <View style={tw`bg-[#fff] w-full h-full`}>
            <ScrollView>
            <View style={tw`bg-[#777777] rounded-b-sm`}>
                <Text style={tw`text-center text-gray-100  text-5xl mt-6`}>Header</Text>
                <Text style={tw`text-center text-gray-100/90 font-medium text-lg mb-4 mt-2 px-5`}>
                    Learn all the most essential and popular words. This section contains a list of words grouped by all parts of speech
                </Text>
                <View style={tw`flex justify-center flex-row mb-6`} >
                    <Button containerStyle={tw`rounded`} color='#0299f2' title="Select Topic" onPress={() => navigation.navigate('FullPost')} />
                    <Button containerStyle={tw`rounded ml-1`} color='#0299f2' title="Settings" onPress={() => navigation.navigate('Post')} />
                </View>
            </View>

            <View style={tw`bg-[#fff] mt-4`}>
                <Card.Title style={tw`text-black-100 text-2xl`} >Objects</Card.Title>
                <View style={{ position: "relative", alignItems: "center" }}>
                    <Text style={tw`text-center text-lg font-light`}> Learn all the most essential and popular words. This section contains a list of words grouped by all parts of speech </Text>
                </View>
                <View style={tw`flex justify-center flex-row `} >
                    <Button containerStyle={tw`rounded mt-6 `} color='#0299f2' title="Select Topic" onPress={() => navigation.navigate('Learn')} />
                </View>
            </View>

            <View style={tw`bg-[#fff] mt-4`}>
                <Card.Title style={tw`text-black-100 text-2xl`} >Objects</Card.Title>
                <View style={{ position: "relative", alignItems: "center" }}>
                    <Text style={tw`text-center text-lg font-light`}> Learn all the most essential and popular words. This section contains a list of words grouped by all parts of speech </Text>
                </View>
                <View style={tw`flex justify-center flex-row `} >
                    <Button containerStyle={tw`rounded mt-6 `} color='#0299f2' title="Select Topic" onPress={() => navigation.navigate('Learn')} />
                </View>
            </View>

            <View style={tw`bg-[#fff] mt-4`}>
                <Card.Title style={tw`text-black-100 text-2xl`} >Objects</Card.Title>
                <View style={{ position: "relative", alignItems: "center" }}>
                    <Text style={tw`text-center text-lg font-light`}> Learn all the most essential and popular words. This section contains a list of words grouped by all parts of speech </Text>
                </View>
                <View style={tw`flex justify-center flex-row `} >
                    <Button containerStyle={tw`rounded mt-6 `} color='#0299f2' title="Select Topic" onPress={() => navigation.navigate('Learn')} />
                </View>
            </View>
            
            </ScrollView>

            
        </View>
    </>
}