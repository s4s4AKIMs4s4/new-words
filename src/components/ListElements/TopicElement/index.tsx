import { ListItem } from '@rneui/themed'
import React from 'react'

export interface ITopicElement {
  name: string
  subtitle: string
}
function TopicElement({ name, subtitle }: ITopicElement) {
  return (
    <>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{name}</ListItem.Title>
          <ListItem.Subtitle>{subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </>
  )
}
export default React.memo(TopicElement)
