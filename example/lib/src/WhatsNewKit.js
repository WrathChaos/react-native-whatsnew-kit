import React from "react";
import PropTypes from "prop-types";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

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
  const { data, ImageComponent, textButtonOnPress, onPress, isVisible } = props;

  renderItem = data => {
    const { item, index } = data;
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

  return (
    <View>
      <Modal isVisible={isVisible} {...props}>
        <View
          style={{
            height: null,
            borderRadius: 16,
            backgroundColor: "#fdfdfd"
          }}
        >
          <View
            style={{
              margin: 32,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ fontSize: 32, fontWeight: "700" }}>WhatsNewKit</Text>
            <FlatList
              data={data}
              scrollEnabled={false}
              style={{ width: "100%" }}
              renderItem={renderItem.bind(this)}
              {...props}
            />

            <TouchableOpacity
              style={{ marginTop: 32 }}
              onPress={textButtonOnPress}
            >
              <Text style={{ color: "#3da7d2", fontWeight: "500" }}>
                Read more
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                marginTop: 8,
                width: "100%",
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#3da7d2"
              }}
              onPress={onPress}
            >
              <Text
                style={{ color: "#fdfdfd", fontSize: 16, fontWeight: "500" }}
              >
                Awesome!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

WhatsNewKit.propTypes = {
  data: PropTypes.array
};

WhatsNewKit.defaultProps = {
  data: staticData,
  ImageComponent: Image
};

export default WhatsNewKit;
