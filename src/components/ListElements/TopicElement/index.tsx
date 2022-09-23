import { ListItem, Avatar } from '@rneui/themed'

export interface ITopicElement{
    name:string,
    subtitle:string
}
export default function TopicElement({name,subtitle}:ITopicElement) {
    return <>
        <ListItem  bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{name}</ListItem.Title>
                <ListItem.Subtitle>{subtitle}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    </>
}