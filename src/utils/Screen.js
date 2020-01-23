import { Dimensions } from 'react-native'

class Screen {
  static getDimension = () => {
    return {
      height: Dimensions.get("window").height + 1,
      width: Dimensions.get("window").width + 1
    }
  }
}

export default Screen;