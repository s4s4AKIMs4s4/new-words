import { ListItem, Avatar } from '@rneui/themed'

export interface ITopicElement{
    key:string | number,
    name:string,
    subtitle:string
}
export default function TopicElement({key,name,subtitle}:ITopicElement) {
    return <>
        <ListItem key={key} bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{name}</ListItem.Title>
                <ListItem.Subtitle>{subtitle}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    </>
}