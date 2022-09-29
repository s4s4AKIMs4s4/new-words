import { IUserLanguge } from "../src/models/language";
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
   
  return { saveUserLanguges, loadUserLanguges, loadChapterId, saveChapterId, loadTopic, saveTopicId  }
}
export default useStore