import { View, Text } from 'react-native';
// import { Select } from '@mobile-reality/react-native-select-pro';
import tw from 'twrnc';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/slice/userSlice';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import SelectElement from '../components/FormElements/SelectElement';
import {useMemo} from 'react'
import { LanguageEnum, LanguageList } from '../models/language';

export interface ISelectOption{
    value:LanguageEnum,
    label:LanguageEnum
}

function Settings({navigation}:any) {
    const User = useAppSelector(state => state.userReducer)
    const sessionObject = useAppSelector(state => state.sessionReducer)
    const { setisAuth } =  userSlice.actions
    const dispatch = useAppDispatch()

    const { setDestenationLanguage } = userSlice.actions
    const { setSourseLanguage } = userSlice.actions

    const sourceOptions = useMemo(() => {
        const sourseList:Array<ISelectOption> = []
        for(let i =0 ; i < LanguageList.length; i++){
            const LanguageElement = LanguageList[i]
            
            if(LanguageElement === User.destenationLanguage) continue;
            sourseList.push({ value: LanguageElement, label: LanguageElement })
        }
        return sourseList
    },[User.destenationLanguage])

    const destionationOptions = useMemo(() => {
        const sourseList:Array<ISelectOption> = []
        for(let i =0 ; i < LanguageList.length; i++){
            const LanguageElement = LanguageList[i]
            
            if(LanguageElement === User.sourseLanguage) continue;
            sourseList.push({ value: LanguageElement, label: LanguageElement })
        }
        return sourseList

    },[User.sourseLanguage])

    return <>
        <View style={tw`bg-[#fff] w-full h-full`}>
            <Text style={tw`text-center text-black-100  text-5xl mt-20`}>Settings</Text>
            <View style={tw`px-3`}>
                <Text style={tw`text-sm font-light mt-15 mb-`}>Learn all the most essential and popular:</Text>
                <SelectElement placeholder = {User.sourseLanguage} options={sourceOptions}  onSelect={setSourseLanguage} value='somevalue' label='somelabel' />
                <Text style={tw`text-sm font-light mt-10 mb-2`}>Learn all the most essential and popular:</Text>
                <SelectElement placeholder = {User.destenationLanguage} options = {destionationOptions} onSelect={setDestenationLanguage} value='somevalue' label='somelabel' />
                <View style = {tw`flex justify-end`}>
                    {
                        !User.isAuth &&  <PrimaryButton 
                        callback={ () => {
                            dispatch(setisAuth(true))
                            navigation.navigate('Learn')
                        }}
                        containerStyle ={'mt-5'} 
                        backgroundColor='rgba(39, 39, 39, 1)' 
                        title='Settings'/>
                    }
                </View>
            </View>
        </View>
    </>
}

export default Settings