import React from "react";
import { View, Text } from "react-native";
import "./App.css";

function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,.8)",
      }}
    >
      <Text style={{ color: "white", fontSize: 40 }}>Hello, World!</Text>
    </View>
  );
}

export default App;
