import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/slice/userSlice';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import SelectElement from '../components/FormElements/SelectElement';
import {useMemo} from 'react'
import { LanguageEnum, LanguageList } from '../models/language';

export interface ISelectOption{
    value:LanguageEnum,
    label:string
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
            const LanguageElement = LanguageList[i].value

            if(LanguageElement === User.destenationLanguage) continue;
            sourseList.push({...LanguageList[i]})
        }
        return sourseList
    },[User.destenationLanguage])

    const destionationOptions = useMemo(() => {
        const sourseList:Array<ISelectOption> = []
        for(let i =0 ; i < LanguageList.length; i++){
            const LanguageElement = LanguageList[i].value
            
            if(LanguageElement === User.sourseLanguage) continue;
            sourseList.push({...LanguageList[i]})
        }
        return sourseList

    },[User.sourseLanguage])

    return <>
        <View style={tw`bg-[#fff] w-full h-full`}>
            <Text style={tw`text-center text-5xl mt-20`}>Settings</Text>
            <View style={tw`px-3`}>
                <Text style={tw`text-sm font-light mt-15 mb-2`}>Сhoose the language you already know:</Text>
                <SelectElement placeholder = { LanguageList.find((ListItem) => ListItem.value === User.sourseLanguage)?.label } options={sourceOptions}  onSelect={setSourseLanguage} value='somevalue' label='somelabel' />
                <Text style={tw`text-sm font-light mt-10 mb-2`}>Сhoose the language you would like to learn:</Text>
                <SelectElement placeholder = {LanguageList.find((ListItem) => ListItem.value === User.destenationLanguage)?.label} options = {destionationOptions} onSelect={setDestenationLanguage} value='somevalue' label='somelabel' />
                <View style = {tw`flex justify-end`}>
                    {
                        !User.isAuth &&  <PrimaryButton 
                        callback={ () => {
                            dispatch(setisAuth(true))
                            navigation.navigate('Learn')
                        }}
                        containerStyle ={'mt-5'} 
                        backgroundColor='rgba(39, 39, 39, 1)' 
                        title='Learn'/>
                    }
                </View>
            </View>
        </View>
    </>
}

export default Settings