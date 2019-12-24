import React from "react";
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
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <WhatsNewKit
          isVisible
          onBackdropPress={() => this.setState({ isVisible: false })}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
