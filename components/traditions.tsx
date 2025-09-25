import React, { useState } from 'react'
import {
  FlatList,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { Tradition } from '@/utils/data'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from '@/constants/theme'

type TraditionsProps = {
  trads: Tradition[]
}

export default function Traditions({ trads }: TraditionsProps) {
  const [openTrad, setOpenTrad] = useState<string | null>(null)

  const toggleExpand = (name: string) => {
    setOpenTrad((prev) => (prev === name ? null : name))
  }

  return (
    <View>
      <FlatList
        data={trads}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item, index }) => {
          const isOpen = openTrad === item.name
          return (
            <View>
              <View
                style={{
                  backgroundColor: isOpen ? Colors.gray : 'transparent',
                  paddingVertical: 18,
                  paddingHorizontal: 16,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ fontWeight: 'bold', fontSize: 16,fontFamily: 'Poppins_600SemiBold' }}>
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 50,
                      padding: 2,
                      borderWidth: 1,
                      borderColor: Colors.grey,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => toggleExpand(item.name)}
                  >
                    <AntDesign
                      name={isOpen ? 'minus' : 'plus'}
                      size={10}
                      color={Colors.secondary}
                    />
                  </TouchableOpacity>
                </View>
                {isOpen && (
                  <Text
                    style={{
                      marginTop: 6,
                      fontSize: 16,
                      lineHeight: 25,
                      fontFamily: 'Poppins_400Regular',
                      color: Colors.secondary,
                    }}
                  >
                    {item.description}
                  </Text>
                )}
              </View>
              {index < trads.length - 1 && (
                <View
                  style={{
                    height: 1,
                    backgroundColor: Colors.lightGray,
                  }}
                />
              )}
            </View>
          )
        }}
      />
    </View>
  )
}
