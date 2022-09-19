import { View, TextInput, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base';
import tw from 'twrnc';

function Learn() {
    return <>
        <View style={tw`bg-[#fff] w-full h-full flex justify-center items-center`}>
            <Text style={tw`text-center text-black-100 text-5xl`}>Header</Text>

            <TextInput
                style={styles.input}
                placeholder="useless placeholder"
            />
            
             <View >
                <View style={tw`flex justify-center flex-row mb-7`} >
                    <Button buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }} titleStyle={{ color: 'white'}} type="outline" title="Select Topic" onPress={() => alert('hopa')} />
                    <Button containerStyle={tw`ml-1`} buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }} titleStyle={{ color: 'white'}} type="outline" title="Settings" onPress={() => alert('opa')} />
                </View>
            </View>

        </View>
    </>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: 200,
        padding: 10,
    },
});

export default Learn

