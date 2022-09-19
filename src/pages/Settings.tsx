import { View, Text } from 'react-native';
// import { Select } from '@mobile-reality/react-native-select-pro';
import tw from 'twrnc';
import SelectElement from '../components/FormElements/SelectElement';

function Settings() {
    return <>
        <View style={tw`bg-[#fff] w-full h-full`}>
            <Text style={tw`text-center text-black-100  text-5xl mt-20`}>Settings</Text>
            <View style = {tw`px-3`}>
                <Text style={tw`text-sm font-light mt-15 mb-`}>Learn all the most essential and popular:</Text>
                <SelectElement value='somevalue' label = 'somelabel' />

                <Text style={tw`text-sm font-light mt-10 mb-2`}>Learn all the most essential and popular:</Text>
                <SelectElement value='somevalue' label = 'somelabel' />
                
            </View>
        </View>
    </>
}

export default Settings