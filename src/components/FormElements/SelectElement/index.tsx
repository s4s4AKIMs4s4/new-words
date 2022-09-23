import { Select } from '@mobile-reality/react-native-select-pro';
import tw from 'twrnc';
import { LanguageEnum, LanguageList } from '../../../models/language';

export interface ISelectElement{
    value:string,
    label:string
    onSelect:(language:LanguageEnum) => void
}

export default function SelectElement({value, label, onSelect}:ISelectElement) {
    return <>
        <Select
            options = {
                LanguageList.map((LanguageElement) => {
                    return { value: LanguageElement, label: LanguageElement }
                }) 
            }
            onSelect = {(e) => {
                if(e?.value) 
                    onSelect(e?.value as LanguageEnum)
             }}
        />
    </>
}
