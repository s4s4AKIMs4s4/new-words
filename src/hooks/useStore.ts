import { IUserLanguge } from "../models/language";
import { IDictionaryElement } from "../models/words";
import storage from "../store/localStorage"


function useStore() {

  const saveUserLanguges = (languageObject: IUserLanguge): Promise<any> => {
    return storage.save({
      key: 'languageObject',
      data: {
        sourseLanguage: languageObject.sourseLanguage,
        from: languageObject.destenationLanguage,
      },
      expires: null
    });
  }

  const loadUserLanguges = (): Promise<any> => {
    return storage.load({
      key: 'languageObject',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {},
        someFlag: true
      }
    })
  }
  const loadChapterId = (): Promise<any> => {
    return storage.load({
      key: 'chapterId',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: { },
        someFlag: true
      }
    })
  }


  const loadWordFromDictionary = (): Promise<{learnList:Array<IDictionaryElement>}> => {
    return storage.load({
      key: 'dictionary',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {},
        someFlag: true
      }
    })
  }

  const saveWordsToDictionary =  (dictionaryElements:Array<IDictionaryElement>): Promise<any> => {
    const defaultStoreWordsOptions = {
      key: 'dictionary',
      expires: null
    }
    return storage.save({
      ...defaultStoreWordsOptions,
      data: {
        //@ts-ignore
        learnList: dictionaryElements,
      },
    });
  }
  const saveWordToDictionary =  (dictionaryElement:IDictionaryElement): Promise<any> => {

    const defaultStoreWordsOptions = {
      key: 'dictionary',
      expires: null
    }

    return loadWordFromDictionary().then( (dictionatyDump) => {
      return storage.save({
        ...defaultStoreWordsOptions,
        data: {
          //@ts-ignore
          learnList:[...dictionatyDump.learnList, dictionaryElement],
        },
      });
    }, () => {
      return storage.save({
        ...defaultStoreWordsOptions,
        data: {
          learnList:[dictionaryElement],
        },
      });
    })
  }

  const saveChapterId = (chapterId:number): Promise<any> => {
    return storage.save({
      key: 'chapterId',
      data: {
        chapterId:chapterId,
      },
      expires: null
    });
  }

  const loadTopic = (): Promise<any> => {
    return storage.load({
      key: 'topicId',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {},
        someFlag: true
      }
    })
  }

  const saveTopicId = (topicId:number): Promise<any> => {
    return storage.save({
      key: 'topicId',
      data: {
        chapterId:topicId,
      },
      expires: null
    });
  }
   
  return { saveUserLanguges, loadUserLanguges, saveWordsToDictionary, loadWordFromDictionary, saveWordToDictionary, loadChapterId, saveChapterId, loadTopic, saveTopicId  }
}
export default useStore