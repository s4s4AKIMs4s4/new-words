import { View, TextInput, StyleSheet } from 'react-native'

export interface IPrimaryTextInput{
    placeholder:string,
    value:string,
    setInputValue:(value:string) => void
}
export default function PrimaryTextInput({placeholder, value, setInputValue}:IPrimaryTextInput) {
    return <>
        <TextInput
            value = {value}
            autoFocus = {true}
            style={styles.input}
            onChangeText = {(event) => {
                setInputValue(event)
            }}
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