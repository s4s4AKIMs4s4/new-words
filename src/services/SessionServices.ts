import Topics from '../../database/topics.json'

interface TopickChart {
  topicName: string
  topicId: number
  description: string
}

export type ISubTopick = TopickChart[] | undefined

export interface IChapterDescription {
  description: string | undefined
  header: string | undefined
  topicList: ISubTopick
}

const getAllSubTopic = () => {
  const sumWithInitial = Topics.reduce((previousValue: ISubTopick, currentValue) => {
    if (previousValue != null) return [...previousValue, ...currentValue.subTopic]
  }, [])

  return sumWithInitial
}

export class SessionServices {
  static getTopic = () => {
    return Topics
  }

  static getChapterINformation = (chpaterId: number): IChapterDescription => {
    const filteredTopic = Topics.find((Topick) => {
      return Topick.chapterId === chpaterId
    })

    const commonTopicInformation = {
      header: filteredTopic?.chapterName,
      description: filteredTopic?.description
    }

    if (filteredTopic?.chapterId === 1) {
      return {
        topicList: getAllSubTopic(),
        ...commonTopicInformation
      }
    }

    return {
      topicList: filteredTopic?.subTopic,
      ...commonTopicInformation
    }
  }
}
