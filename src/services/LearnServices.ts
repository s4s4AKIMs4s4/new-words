import database from '../../database/dataBase.json'

export class filteredDataBase {
  static getTopicAllWords = (topicId: number | null) => {
    // @ts-expect-error
    const filteredDataBase = database.filter((TopicObject) => {
      return TopicObject.topicId === topicId
    })
    return filteredDataBase[0].data
  }
}
