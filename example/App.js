import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import WhatsNewKit from "./lib/src/WhatsNewKit";

/**
 * New
 * Improved
 * Fixed
 */

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <WhatsNewKit
          isVisible={isVisible}
          onBackdropPress={() => setIsVisible(false)}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
