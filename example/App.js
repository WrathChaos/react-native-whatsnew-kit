import React, { useState } from "react";
import { StatusBar, Dimensions, SafeAreaView } from "react-native";
import WhatsNewKit from "./lib/src/WhatsNewKit";

const { width, height } = Dimensions.get("window");

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <WhatsNewKit
          fullScreen={false}
          isVisible={isVisible}
          onBackdropPress={() => setIsVisible(false)}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
