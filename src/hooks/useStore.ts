import { chapterEnum } from '../models/chapter'
import { IUserLanguge, IUserStoreLanguage } from '../models/language'
import { IDictionaryElement } from '../models/words'
import storage from '../store/localStorage'

function useStore() {
  const saveUserLanguges = async (languageObject: IUserLanguge): Promise<void> => {
    await storage.save({
      key: 'languageObject',
      data: {
        sourseLanguage: languageObject.sourseLanguage,
        from: languageObject.destenationLanguage
      },
      expires: null
    })
  }

  const loadUserLanguges = async (): Promise<IUserStoreLanguage> => {
    return await storage.load({
      key: 'languageObject',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {},
        someFlag: true
      }
    })
  }
  const loadChapterId = async (): Promise<{ chapterId: chapterEnum }> => {
    return await storage.load({
      key: 'chapterId',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {},
        someFlag: true
      }
    })
  }

  const loadWordFromDictionary = async (): Promise<{ learnList: IDictionaryElement[] }> => {
    return await storage.load({
      key: 'dictionary',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {},
        someFlag: true
      }
    })
  }

  const saveWordsToDictionary = async (dictionaryElements: IDictionaryElement[]): Promise<void> => {
    const defaultStoreWordsOptions = {
      key: 'dictionary',
      expires: null
    }
    await storage.save({
      ...defaultStoreWordsOptions,
      data: {
        learnList: dictionaryElements
      }
    })
  }
  const saveWordToDictionary = async (dictionaryElement: IDictionaryElement): Promise<void> => {
    const defaultStoreWordsOptions = {
      key: 'dictionary',
      expires: null
    }

    await loadWordFromDictionary().then(
      async (dictionatyDump) => {
        await storage.save({
          ...defaultStoreWordsOptions,
          data: {
            learnList: [...dictionatyDump.learnList, dictionaryElement]
          }
        })
      },
      async () => {
        await storage.save({
          ...defaultStoreWordsOptions,
          data: {
            learnList: [dictionaryElement]
          }
        })
      }
    )
  }

  const saveChapterId = async (chapterId: number): Promise<void> => {
    await storage.save({
      key: 'chapterId',
      data: {
        chapterId
      },
      expires: null
    })
  }

  const loadTopic = async (): Promise<unknown> => {
    return await storage.load({
      key: 'topicId',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {},
        someFlag: true
      }
    })
  }

  const saveTopicId = async (topicId: number): Promise<void> => {
    await storage.save({
      key: 'topicId',
      data: {
        chapterId: topicId
      },
      expires: null
    })
  }

  return {
    saveUserLanguges,
    loadUserLanguges,
    saveWordsToDictionary,
    loadWordFromDictionary,
    saveWordToDictionary,
    loadChapterId,
    saveChapterId,
    loadTopic,
    saveTopicId
  }
}
export default useStore
