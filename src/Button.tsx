import React, { PureComponent } from 'react'
import { TouchableOpacity, Text } from 'react-native'

export class Button extends PureComponent<{
  text: string
  onPress: () => void
}> {
  render() {
    return (
      <TouchableOpacity>
        <Text onPress={this.props.onPress}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
