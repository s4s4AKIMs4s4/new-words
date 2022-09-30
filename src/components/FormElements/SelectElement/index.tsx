import { Select } from '@mobile-reality/react-native-select-pro';
import tw from 'twrnc';
import { useAppDispatch } from '../../../../hooks/redux';
import { LanguageEnum, LanguageList } from '../../../models/language';
import { userSlice } from '../../../../store/slice/userSlice';
import { ISelectOption } from '../../../pages/Settings';

export interface ISelectElement{
    value:string,
    label:string,
    onSelect:(language:LanguageEnum) => void,
    options:Array<ISelectOption>,
    placeholder:string | undefined
}

export default function SelectElement({value, label, onSelect, options, placeholder}:ISelectElement) {
    const dispatch = useAppDispatch()

    return <>
        <Select
            placeholderText = {placeholder}
            options = {options}
            onSelect = {(e) => {
                if(e?.value) 
                    //@ts-ignore
                    dispatch(onSelect(e?.value as LanguageEnum))
             }}
        />
    </>
}
