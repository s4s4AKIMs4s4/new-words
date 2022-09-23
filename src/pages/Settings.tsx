import { View, Text } from 'react-native';
// import { Select } from '@mobile-reality/react-native-select-pro';
import tw from 'twrnc';
import { userSlice } from '../../store/slice/userSlice';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import SelectElement from '../components/FormElements/SelectElement';
import PrimaryLink from '../components/Links/PrimaryLink';

function Settings({navigation}:any) {
    const { setDestenationLanguage } = userSlice.actions
    const { setSourseLanguage } = userSlice.actions

    return <>
        <View style={tw`bg-[#fff] w-full h-full`}>
            <Text style={tw`text-center text-black-100  text-5xl mt-20`}>Settings</Text>
            <View style={tw`px-3`}>
                <Text style={tw`text-sm font-light mt-15 mb-`}>Learn all the most essential and popular:</Text>
                <SelectElement onSelect={setSourseLanguage} value='somevalue' label='somelabel' />

                <Text style={tw`text-sm font-light mt-10 mb-2`}>Learn all the most essential and popular:</Text>
                <SelectElement onSelect={setDestenationLanguage} value='somevalue' label='somelabel' />
                
                <View style = {tw`flex justify-end`}>
                    <PrimaryButton containerStyle ={'mt-5'} backgroundColor='rgba(39, 39, 39, 1)' title='Settings'/>

                    {/* <PrimaryLink color={'#0299f2'} optionClassName={'mt-3 w-30'} title={"Select Topic"} navigationCallback={() => navigation.navigate('Topics')} /> */}
                </View>
            </View>
        </View>
    </>
}

export default Settings