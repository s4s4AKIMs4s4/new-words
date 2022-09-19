import { View, TextInput, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base';
import tw from 'twrnc';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import PrimaryTextInput from '../components/FormElements/PrimaryTextInput'


function Learn() {
    return <>
        <View style={tw`bg-[#fff] w-full h-full flex justify-center items-center`}>
            <Text style={tw`text-center text-black-100 text-5xl`}>Header</Text>

            <PrimaryTextInput placeholder ={'nothing'}/>
            
             <View >
                <View style={tw`flex justify-center flex-row mb-7`} >
                    <PrimaryButton backgroundColor='rgba(39, 39, 39, 1)' title='Select Topic'/>
                    <PrimaryButton containerStyle ={'ml-1'} backgroundColor='rgba(39, 39, 39, 1)' title='Settings'/>
                </View>
            </View>

        </View>
    </>
}



export default Learn

