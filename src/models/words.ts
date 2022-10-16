import { IUserLanguge } from "./language";

export interface IDictionaryElement extends IUserLanguge{
    sourceWords:Array<string>, 
    destionatioWords:Array<string>
}