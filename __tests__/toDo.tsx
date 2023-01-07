import { render, screen } from '@testing-library/react-native'
// TODO: add test to cover all learn logic
import TopicElement from '../src/components/ListElements/TopicElement'
// justf for test:
test('form submits two answers', async () => {
  render(
   <TopicElement name = 'foo' subtitle='bar'/>
  )
  expect(screen.getAllByText(/Header/i)).toHaveLength(1)
})
