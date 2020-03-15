import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";
import Modal from "react-native-modal";
import styles, {
  _iconStyle,
  _container,
  _buttonStyle,
  _titleTextStyle,
  _buttonTextStyle,
  _textButtonTextStyle
} from "./WhatsNewKit.style";

const WhatsNewKit = props => {
  const {
    data,
    width,
    title,
    height,
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
    ...others
  } = props;

  renderItem = data => {
    const { item } = data;
    const { title, description, iconComponent, icon } = item;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          {iconComponent || (
            <ImageComponent
              source={icon}
              style={_iconStyle(iconHeight, iconWidth)}
            />
          )}
        </View>
        <View style={styles.itemContextContainer}>
          <Text style={itemTitleTextStyle || styles.itemTitleTextStyle}>
            {title}
          </Text>
          <Text style={itemDescTextStyle || styles.itemDescTextStyle}>
            {description}
          </Text>
        </View>
      </View>
    );
  };

  renderTitleView = () => (
    <Text
      style={titleTextStyle || _titleTextStyle(titleFontSize, titleFontColor)}
    >
      {title}
    </Text>
  );

  renderList = () => (
    <FlatList
      data={data}
      scrollEnabled={false}
      style={styles.listStyle}
      renderItem={renderItem.bind(this)}
      keyExtractor={(item, index) => index.toString()}
      {...props}
    />
  );

  renderFooterButtons = () => (
    <View style={styles.footerButtonsContainer}>
      <TouchableOpacity
        style={styles.textButtonStyle}
        onPress={textButtonOnPress}
      >
        <Text
          style={
            textButtonTextStyle || _textButtonTextStyle(textButtonFontColor)
          }
        >
          {textButtonValue}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={buttonStyle || _buttonStyle(buttonBackgroundColor)}
        onPress={onPress}
      >
        <Text
          style={
            buttonTextStyle || _buttonTextStyle(buttonFontColor, buttonFontSize)
          }
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal
      isVisible={isVisible}
      style={fullScreen && styles.fullScreenModalStyle}
      {...others}
    >
      <SafeAreaView
        style={_container(height, width, backgroundColor, fullScreen)}
      >
        <View style={styles.containerGlue}>
          {renderTitleView()}
          {renderList()}
          {renderFooterButtons()}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

WhatsNewKit.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  fullScreen: PropTypes.bool,
  buttonText: PropTypes.string,
  titleFontSize: PropTypes.number,
  titleFontColor: PropTypes.string,
  buttonFontSize: PropTypes.number,
  buttonFontColor: PropTypes.string,
  textButtonValue: PropTypes.string,
  textButtonFontColor: PropTypes.string,
  buttonBackgroundColor: PropTypes.string
};

WhatsNewKit.defaultProps = {
  data: [],
  iconWidth: 50,
  iconHeight: 50,
  fullScreen: false,
  titleFontSize: 32,
  buttonFontSize: 16,
  title: "WhatsNewKit",
  ImageComponent: Image,
  buttonText: "Awesome!",
  titleFontColor: "#000",
  buttonFontColor: "#fdfdfd",
  backgroundColor: "#fdfdfd",
  textButtonValue: "Read more",
  textButtonFontColor: "#3da7d2",
  buttonBackgroundColor: "#3da7d2"
};

export default WhatsNewKit;
