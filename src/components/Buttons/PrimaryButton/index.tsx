import { Button, Text } from '@rneui/base';
import tw from 'twrnc';

export interface IPrimaryButton {
    backgroundColor:string,
    title:string,
    containerStyle?:string
}
export default function PrimaryButton({backgroundColor,title,containerStyle}:IPrimaryButton) {
    return <>
        <Button containerStyle = {tw`${containerStyle ?containerStyle :''}`} buttonStyle={{ backgroundColor: `${backgroundColor}` }} titleStyle={{ color: 'white' }} type="outline" title={title} onPress={() => alert('hopa')} />
    </>
}