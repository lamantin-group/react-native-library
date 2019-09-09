import React, { PureComponent } from 'react'
import { TouchableOpacity, Text } from 'react-native'

export class Button extends PureComponent<{
  text: string
}> {
  render() {
    return (
      <TouchableOpacity>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
