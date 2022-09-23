import { useAppSelector } from "./redux";
import {useEffect, useState} from 'react'
import { IChapterDescription, SessionServices } from "../src/services/SessionServices";


export default function useGetChapterInformation(){
    const SessionObject = useAppSelector(state => state.sessionReducer)
    
    const [chapterDescription, setChapterDescription] = useState<IChapterDescription | null>(
        null
    )

    useEffect(() => {
        const {description, header, topicList } = SessionServices.getChapterINformation(SessionObject.chapterId)
        setChapterDescription({description, header, topicList })        

    },[SessionObject])

    return {...chapterDescription}

}