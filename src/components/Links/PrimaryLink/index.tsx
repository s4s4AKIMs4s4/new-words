import { Button } from '@rneui/base'
import React from 'react'
import tw from 'twrnc'

interface IPrimaryButton {
  color: string
  navigationCallback: () => void
  title: string
  optionClassName?: string
}
function PrimaryLink({
  color,
  optionClassName,
  navigationCallback,
  title
}: IPrimaryButton) {
  return (
    <>
      <Button
        containerStyle={tw`rounded ${optionClassName || ''}`}
        color={color}
        title={title}
        onPress={() => {
          navigationCallback()
        }}
      />
    </>
  )
}

export default React.memo(PrimaryLink)
