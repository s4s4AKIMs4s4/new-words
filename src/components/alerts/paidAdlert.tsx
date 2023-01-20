import { Text } from '@rneui/base'
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons'
import { View, TouchableHighlight, Linking } from 'react-native'
import React from 'react'

interface IPaidAdlert {
  isOpen: boolean
  closeAlert: () => void
}

const GOOGLE_URL = 'https://play.google.com/store/apps/details?id=com.pagepro.LearnAllWords'

function PaidAdlert({ isOpen, closeAlert }: IPaidAdlert) {
  return (
    <>
      {isOpen && (
        <>
          <View
            style={tw`flex flex-row justify-between items-center pt-4 pb-4 pl-3 pr-3 bg-[#feebc8]`}
          >
            <View>
              <Text style={tw`text-sm `}>
                Only 30% of all words are available to you now. All words are available in the {''}
                <Text style={{ color: 'blue' }}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onPress={async () => await Linking.openURL(GOOGLE_URL)}>
                    paid version
                </Text>
              </Text>
            </View>

            <TouchableHighlight
              onPress={closeAlert}
            >
              <View>
                <Text>
                  <AntDesign name="closecircle" size={20} />
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </>
      )}
    </>
  )
}
export default React.memo(PaidAdlert)
