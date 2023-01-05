import { IUserLanguge } from './language'

export interface IDictionaryElement extends IUserLanguge {
  sourceWords: string[]
  destionatioWords: string[]
}
