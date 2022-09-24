import { View, TextInput, StyleSheet } from 'react-native'

export interface IPrimaryTextInput{
    placeholder:string
}
export default function PrimaryTextInput({placeholder}:IPrimaryTextInput) {
    return <>
        <TextInput
            autoFocus = {true}
            style={styles.input}
            placeholder={placeholder}
        />
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