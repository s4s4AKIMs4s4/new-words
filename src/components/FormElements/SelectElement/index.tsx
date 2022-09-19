import { Select } from '@mobile-reality/react-native-select-pro';
import tw from 'twrnc';

export interface ISelectElement{
    value:string,
    label:string
}

export default function SelectElement({value, label}:ISelectElement) {
    return <>
        <Select
            options={[{ value: value, label: label }]}
        />
    </>
}
