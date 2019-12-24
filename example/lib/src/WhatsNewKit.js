import React from "react";
import PropTypes from "prop-types";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles, {
  _container,
  _buttonStyle,
  _titleTextStyle,
  _buttonTextStyle,
  _textButtonTextStyle
} from "./WhatsNewKit.style";

const staticData = [
  {
    title: "Awesome",
    description:
      "Suspendisse ex mauris, viverra vitae mi eget, consectetur interdum sem. Phasellus sodales elit ac mauris posuere",
    icon: require("../../assets/check.png"),
    iconComponent: null
  },
  {
    title: "Dark Theme",
    description:
      "Orci varius. Aliquam accumsan lectus lorem, a congue diam commodo sit amet. Fusce laoreet sapien non lectus dignissim viverra.",
    icon: require("../../assets/theme.png"),
    iconComponent: null
  },
  {
    title: "Bug Fixes",
    description: "Donec non mauris sagittis, gravida velit vel, varius quam.",
    icon: require("../../assets/wiping.png"),
    iconComponent: null
  }
];

const WhatsNewKit = props => {
  const {
    data,
    width,
    title,
    height,
    onPress,
    isVisible,
    buttonText,
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
    textButtonTextStyle,
    textButtonFontColor,
    buttonBackgroundColor,
    ...others
  } = props;

  renderItem = data => {
    const { item } = data;
    const { title, description, iconComponent, icon } = item;
    return (
      <View
        style={{
          marginTop: 32,
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 16
          }}
        >
          {iconComponent ? (
            iconComponent
          ) : (
            <ImageComponent
              style={{
                width: 50,
                height: 50
              }}
              source={icon}
            />
          )}
        </View>
        <View style={{ width: "80%", flexDirection: "column" }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>{title}</Text>
          <Text style={{ marginTop: 5, color: "#313232" }}>{description}</Text>
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
    <Modal isVisible={isVisible} {...others}>
      <View style={_container(height, width, backgroundColor)}>
        <View style={styles.containerGlue}>
          {renderTitleView()}
          {renderList()}
          {renderFooterButtons()}
        </View>
      </View>
    </Modal>
  );
};

WhatsNewKit.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
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
  data: staticData,
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
