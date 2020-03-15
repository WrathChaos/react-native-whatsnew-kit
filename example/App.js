import React, { useState } from "react";
import { StatusBar, SafeAreaView } from "react-native";
import WhatsNew from "react-native-whatsnew-kit";

const staticData = [
  {
    title: "Awesome",
    description:
      "Suspendisse ex mauris, viverra vitae mi eget, consectetur interdum sem. Phasellus sodales elit ac mauris posuere",
    icon: require("./assets/check.png"),
    iconComponent: null
  },
  {
    title: "Dark Theme",
    description:
      "Orci varius. Aliquam accumsan lectus lorem, a congue diam commodo sit amet. Fusce laoreet sapien non lectus dignissim viverra.",
    icon: require("./assets/theme.png"),
    iconComponent: null
  },
  {
    title: "Bug Fixes",
    description: "Donec non mauris sagittis, gravida velit vel, varius quam.",
    icon: require("./assets/wiping.png"),
    iconComponent: null
  }
];

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <WhatsNew
          data={staticData}
          fullScreen={false}
          isVisible={isVisible}
          onBackdropPress={() => setIsVisible(false)}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
