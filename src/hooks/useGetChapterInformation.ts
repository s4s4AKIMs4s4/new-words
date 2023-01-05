import { useAppDispatch, useAppSelector } from './redux'
import { useEffect, useState } from 'react'
import { IChapterDescription, SessionServices } from '../services/SessionServices'
import useStore from './useStore'
import { sessionSlice } from '../store/slice/sessionSlice'

export default function useGetChapterInformation() {
  const SessionObject = useAppSelector((state) => state.sessionReducer)
  const { loadChapterId } = useStore()
  const dispatch = useAppDispatch()
  const { setChapterId } = sessionSlice.actions

  const [chapterDescription, setChapterDescription] = useState<IChapterDescription | null>(null)

  useEffect(() => {
    loadChapterId().then(
      (res) => {
        dispatch(setChapterId(res.chapterId))
      },
      () => {
        dispatch(setChapterId(2))
      }
    )
  }, [])

  useEffect(() => {
    if (!SessionObject.chapterId) return
    const { description, header, topicList } = SessionServices.getChapterINformation(
      SessionObject.chapterId
    )
    setChapterDescription({ description, header, topicList })
  }, [SessionObject])

  return { ...chapterDescription }
}
