import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import "./App.css";
import ExpanderView from "./ExpanderView";

function App() {
  const [expanded, setExpanded] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        paddingVertical: 50,
        backgroundColor: "rgba(0,0,0,.8)",
      }}
    >
      <ExpanderView
        {...{ expanded }}
        renderHeader={() => (
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={() => setExpanded((prev) => !prev)}
            style={{
              backgroundColor: "yellow",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Header</Text>
          </TouchableOpacity>
        )}
        renderContent={() => (
          <View
            style={{
              backgroundColor: "cyan",
              height: 300,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Content</Text>
          </View>
        )}
      />
    </View>
  );
}

export default App;
