import { View, TextInput, StyleSheet } from 'react-native'
import { useState, useMemo, useLayoutEffect, useRef } from 'react'
import { AnswerEnum } from '../../../pages/Learn'

export interface IPrimaryTextInput {
    placeholder: string,
    value: string,
    setInputValue: (value: string) => void,
    isWrongAnswer: boolean
}
export default function PrimaryTextInput({ placeholder, value, setInputValue, isWrongAnswer }: IPrimaryTextInput) {
    const [isScroll, setIsScroll] = useState<boolean>(false)
    const selection = useMemo(() => { return { start: 0, end: 0 } }, [])

    useLayoutEffect(() => {
        if (isWrongAnswer)
            setIsScroll(false)
    }, [isWrongAnswer])

    const getSelection = () => {
        if (isWrongAnswer) {
            if (!isScroll)
                return selection
            else return undefined
        } else {
            return undefined
        }
    }

    return <>
        <TextInput
            selection={getSelection()}
            onScroll={((e) => {
                if (isScroll === false) setIsScroll(true)
            })}
            value={value}
            autoFocus={true}
            style={isWrongAnswer ? styles.input_wrong : styles.input}
            onChangeText={(event) => {
                setInputValue(event)
            }}
            placeholder={placeholder}
        />
    </>
}
const inputDefaultStyle = {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 270,
    padding: 10,
}

const styles = StyleSheet.create({
    input: {
        ...inputDefaultStyle
    },
    input_wrong: {
        ...inputDefaultStyle,
        borderColor: 'red',
    },
});