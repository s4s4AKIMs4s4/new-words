import { IDictionaryElement } from './words'

export enum LanguageEnum {
  AR = 'ar',
  BN = 'bn',
  DE = 'de',
  EN = 'en',
  ES = 'es',
  FR = 'fr',
  IT = 'it',
  JA = 'ja',
  KO = 'ko',
  PL = 'pl',
  PT = 'pt',
  RU = 'ru',
  ZH_CN = 'zh_CN',
  ZH_TW = 'zh_TW'
}

export type IWords = Record<string, string>

export interface IUserStoreLanguage {
  sourseLanguage: LanguageEnum
  from: LanguageEnum
}

export type WordsType = IWords[]
export type DictionaryWords = IDictionaryElement[]

export interface IUserLanguge {
  sourseLanguage: LanguageEnum
  destenationLanguage: LanguageEnum
}
export interface ILanguageList {
  value: LanguageEnum
  label: string
}

export const LanguageList: ILanguageList[] = [
  { value: LanguageEnum.AR, label: 'Arab' },
  { value: LanguageEnum.BN, label: 'Bengal' },
  { value: LanguageEnum.DE, label: 'German' },
  { value: LanguageEnum.EN, label: 'English' },
  { value: LanguageEnum.ES, label: 'Spanish' },
  { value: LanguageEnum.FR, label: 'French' },
  { value: LanguageEnum.IT, label: 'Italian' },
  { value: LanguageEnum.JA, label: 'Japanese' },
  { value: LanguageEnum.KO, label: 'Korean' },
  { value: LanguageEnum.PL, label: 'Polish' },
  { value: LanguageEnum.PT, label: 'Portuguese' },
  { value: LanguageEnum.RU, label: 'Russian' },
  { value: LanguageEnum.ZH_CN, label: 'Chinese simplified' },
  { value: LanguageEnum.ZH_TW, label: 'Сhinese traditional' }
]
