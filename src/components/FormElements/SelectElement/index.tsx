import { Select } from '@mobile-reality/react-native-select-pro'
import tw from 'twrnc'
import { useAppDispatch } from '../../../hooks/redux'
import { LanguageEnum } from '../../../models/language'
import { ISelectOption } from '../../../pages/Settings'
import React from 'react'

export interface ISelectElement {
  value: string
  label: string
  onSelect: (language: LanguageEnum) => void
  options: ISelectOption[]
  placeholder: string | undefined
}

function SelectElement({ onSelect, options, placeholder }: ISelectElement) {
  const dispatch = useAppDispatch()

  return (
    <>
      <Select
        placeholderText={placeholder}
        options={options}
        onSelect={(e) => {
          if (e?.value) {
            dispatch(onSelect(e?.value as LanguageEnum))
          }
        }}
      />
    </>
  )
}
export default React.memo(SelectElement)
