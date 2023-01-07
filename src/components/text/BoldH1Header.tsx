import tw from 'twrnc'
import { Text } from 'react-native'

export interface IBoldH1Header {
  text: string
}

export function BoldH1Header({ text = 'Header' }: IBoldH1Header) {
  return (
    <>
      <Text data-testid="bold" style={tw`text-center text-gray-100  text-5xl mt-6`}>{text}</Text>
    </>
  )
}
