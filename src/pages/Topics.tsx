import { ListItem, Avatar } from '@rneui/themed'
import { View } from 'react-native'
import TopicElement from '../components/ListElements/TopicElement'

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
]

function Topics() {
    return <>
        <View>
            {
                list.map((l, i) => (
                    <TopicElement key={i} name={l.name} subtitle={l.subtitle} />
                ))
            }
        </View>
    </>
}
export default Topics