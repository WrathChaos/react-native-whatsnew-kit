<img alt="React Native WhatsNew Kit" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-whatsnew-kit)

[![React Native Library Boiler Plate](https://img.shields.io/badge/-React%20Native%20Library%20Boilerplate-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-whatsnew-kit)

[![npm version](https://img.shields.io/npm/v/react-native-whatsnew-kit.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-whatsnew-kit)
[![npm](https://img.shields.io/npm/dt/react-native-whatsnew-kit.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-whatsnew-kit)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native WhatsNew Kit"
        src="assets/Screenshots/JSLibraryBoilerplate.png" />
</p>

# Installation

Add the dependency:

```ruby
npm i react-native-whatsnew-kit
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-modal": ">= 11.5.3"
```

# Usage

## Import

```js
import WhatsNew from "react-native-whatsnew-kit";
```

## Component1 Usage

```js
<WhatsNew isVisible={isVisible} onBackdropPress={() => setIsVisible(false)} />
```

# Configuration - Props

    title,
    onPress,
    isVisible,
    iconWidth,
    iconHeight,
    buttonText,
    fullScreen,
    buttonStyle,
    titleFontSize,
    buttonFontSize,
    titleFontColor,
    titleTextStyle,
    ImageComponent,
    buttonTextStyle,
    backgroundColor,
    buttonFontColor,
    textButtonValue,
    textButtonOnPress,
    itemDescTextStyle,
    itemTitleTextStyle,
    textButtonTextStyle,
    textButtonFontColor,
    buttonBackgroundColor,

| Property |     Type      |   Default   | Description                                 |
| -------- | :-----------: | :---------: | ------------------------------------------- |
| data     | Object Array  |     []      | You must set the formatted data as expected |
| width    | number/string |  undefined  | change the width of the whole modal         |
| height   | number/string |  undefined  | change the height of the whole modal        |
| title    |    string     | WhatsNewKit | change the main title                       |
| onPress  |   function    |  undefined  | set your own function for the main button   |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

# Change Log

Change log will be here !

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native WhatsNew Kit is available under the MIT license. See the LICENSE file for more info.
