import { Dimensions } from "react-native";
const { width: ScreenWidth } = Dimensions.get("window");

export const _iconStyle = (height, width) => ({
  width,
  height
});

export const _container = (height, width, backgroundColor, fullScreen) => ({
  width,
  height,
  backgroundColor,
  borderRadius: 16,
  alignItems: fullScreen ? "center" : null,
  justifyContent: fullScreen ? "center" : null
});

export const _titleTextStyle = (fontSize, color) => ({
  color,
  fontSize,
  fontWeight: "700"
});

export const _textButtonTextStyle = color => ({
  color,
  fontWeight: "500"
});

export const _buttonStyle = backgroundColor => ({
  height: 50,
  marginTop: 8,
  backgroundColor,
  borderRadius: 8,
  alignItems: "center",
  justifyContent: "center",
  width: ScreenWidth * 0.8
});

export const _buttonTextStyle = (color, fontSize) => ({
  color,
  fontSize,
  fontWeight: "500"
});

export const _itemTitleTextStyle = () => ({
  fontSize: 18,
  fontWeight: "500"
});

export default {
  containerGlue: {
    margin: 32,
    alignItems: "center",
    justifyContent: "center"
  },
  listStyle: {
    width: "100%"
  },
  footerButtonsContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  textButtonStyle: {
    marginTop: 32
  },
  itemContainer: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center"
  },
  iconContainer: {
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  itemContextContainer: {
    width: "80%",
    flexDirection: "column"
  },
  itemTitleTextStyle: {
    fontSize: 18,
    fontWeight: "500"
  },
  itemDescTextStyle: {
    marginTop: 5,
    color: "#313232"
  },
  fullScreenModalStyle: {
    margin: 0
  }
};
