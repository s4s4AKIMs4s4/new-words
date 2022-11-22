import { ListItem, Avatar } from '@rneui/themed'
import { TouchableHighlight, View } from 'react-native'
import TopicElement from '../components/ListElements/TopicElement'
import { useEffect, Suspense, useCallback } from 'react'
import { SessionServices } from '../services/SessionServices'
import { ScrollView } from 'react-native-gesture-handler'
import { useAppDispatch } from '../hooks/redux'
import {sessionSlice} from '../store/slice/sessionSlice';
import { INavigation } from '../models/topic'

function Topics({ navigation }: INavigation) {
    const dispatch = useAppDispatch()
    const { setChapterId } = sessionSlice.actions
    
    const pressHanlder = useCallback((key: number) => () => {
        dispatch(setChapterId(key))
        // const {loadChapterId} = useStore()

        navigation.navigate('Home')
    }, [])

    return <>
        <Suspense fallback=" ">
            <ScrollView>
                <View>
                    {
                        SessionServices.getTopic().map((chapterValue) => {
                            return <TouchableHighlight key={chapterValue.chapterId} onPress={pressHanlder(chapterValue.chapterId)}>
                                <View>
                                    <TopicElement name={chapterValue.chapterName} subtitle={chapterValue.description} />
                                </View>
                            </TouchableHighlight>
                        })
                    }
                </View>
            </ScrollView>
        </Suspense>
    </>
}
export default Topics