import { NativeModules, Alert } from 'react-native'

const { NativeLibrary } = NativeModules

type ParamsResult = {
  number: number
  value: string
}

export class MyLibrary {
  static async getValue(): Promise<string> {
    const result = await NativeLibrary.getValue()
    console.log('getValue = ', result)
    return `${result}`
  }

  static async getParams(): Promise<ParamsResult> {
    const result = await NativeLibrary.getParams()
    console.log('getParams = ', result)
    return result
  }

  static async showMessage(text: string) {
    // console.warn(text)
    Alert.alert(text, JSON.stringify(NativeModules))
  }
}
