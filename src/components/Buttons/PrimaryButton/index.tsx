import { Button } from '@rneui/base'
import tw from 'twrnc'
export interface IPrimaryButton {
  backgroundColor: string
  title: string
  containerStyle?: string
  callback?: () => void
}
export default function PrimaryButton({
  backgroundColor,
  title,
  containerStyle,
  callback
}: IPrimaryButton) {
  return (
    <>
      <Button
        containerStyle={tw`${containerStyle || ''}`}
        buttonStyle={{ backgroundColor: `${backgroundColor}` }}
        titleStyle={{ color: 'white' }}
        type="outline"
        title={title}
        onPress={() => {
          if (callback != null) {
            callback()
          }
        }}
      />
    </>
  )
}
