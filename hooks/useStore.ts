import { IUserLanguge } from "../src/models/language";
import storage from "../store/localStorage"


function useStore() {

  const saveUserLanguges = (languageObject: IUserLanguge): Promise<any> => {
    return storage.save({
      key: 'languageObject', // Note: Do not use underscore("_") in key!
      data: {
        sourseLanguage: languageObject.sourseLanguage,
        from: languageObject.destenationLanguage,
      },
      // if expires not specified, the defaultExpires will be applied instead.
      // if set to null, then it will never expire.
      expires: 30000
    });
  }

  const loadUserLanguges = (): Promise<any> => {
    return storage.load({
      key: 'languageObject',

      autoSync: true,

      // syncInBackground (default: true) means if data expired,
      // return the outdated data first while invoking the sync method.
      // If syncInBackground is set to false, and there is expired data,
      // it will wait for the new data and return only after the sync completed.
      // (This, of course, is slower)
      syncInBackground: true,

      // you can pass extra params to the sync method
      // see sync example below
      syncParams: {
        extraFetchOptions: {
          // blahblah
        },
        someFlag: true
      }
    })
  }
  const loadChapterId = (): Promise<any> => {
    return storage.load({
      key: 'chapterId',

      autoSync: true,

      // syncInBackground (default: true) means if data expired,
      // return the outdated data first while invoking the sync method.
      // If syncInBackground is set to false, and there is expired data,
      // it will wait for the new data and return only after the sync completed.
      // (This, of course, is slower)
      syncInBackground: true,

      // you can pass extra params to the sync method
      // see sync example below
      syncParams: {
        extraFetchOptions: {
          // blahblah
        },
        someFlag: true
      }
    })
  }

  const saveChapterId = (chapterId:number): Promise<any> => {
    return storage.save({
      key: 'chapterId', // Note: Do not use underscore("_") in key!
      data: {
        chapterId:chapterId,
      },
      // if expires not specified, the defaultExpires will be applied instead.
      // if set to null, then it will never expire.
      expires: 30000
    });
  }

  const loadTopic = (): Promise<any> => {
    return storage.load({
      key: 'topicId',
      autoSync: true,
      // syncInBackground (default: true) means if data expired,
      // return the outdated data first while invoking the sync method.
      // If syncInBackground is set to false, and there is expired data,
      // it will wait for the new data and return only after the sync completed.
      // (This, of course, is slower)
      syncInBackground: true,

      // you can pass extra params to the sync method
      // see sync example below
      syncParams: {
        extraFetchOptions: {
          // blahblah
        },
        someFlag: true
      }
    })
  }

  const saveTopicId = (topicId:number): Promise<any> => {
    return storage.save({
      key: 'topicId', // Note: Do not use underscore("_") in key!
      data: {
        chapterId:topicId,
      },
      // if expires not specified, the defaultExpires will be applied instead.
      // if set to null, then it will never expire.
      expires: 30000
    });
  }
   
  return { saveUserLanguges, loadUserLanguges, loadChapterId, saveChapterId, loadTopic, saveTopicId  }
}
export default useStore