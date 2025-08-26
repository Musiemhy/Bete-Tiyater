import { icons } from '@/constants/icons'
import React from 'react'
import { Image, TextInput, View } from 'react-native'

interface Props {
    onPress?: () => void,
    placeholder: string
}

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} tintColor='#007AFF' className="w-5 h-5" resizeMode="contain"/>
      <TextInput 
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => {}}
        className="flex-1 ml-2 text-text-primary dark:text-text-primary-dark"
        placeholderTextColor="#A8B5DB"
      />
    </View>
  )
}

export default SearchBar