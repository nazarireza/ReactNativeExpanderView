import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import "./App.css";
import ExpanderView from "./ExpanderView";

export default () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(true);

  const renderHeader = (i) => (
    <TouchableOpacity
      activeOpacity={0.95}
      onPress={() =>
        i === 1 ? setExpanded1((prev) => !prev) : setExpanded2((prev) => !prev)
      }
      style={{
        backgroundColor: "yellow",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Header</Text>
    </TouchableOpacity>
  );

  const renderContent = () => (
    <View
      style={{
        backgroundColor: "cyan",
        flex: 1,
        alignItems: "center",
        padding: 30,
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 50,
        backgroundColor: "rgba(0,0,0,.8)",
      }}
    >
      <ExpanderView
        renderHeader={() => renderHeader(1)}
        {...{ expanded: expanded1 }}
        onAnimationEnd={() => console.log("Animation End")}
      >
        {renderContent()}
      </ExpanderView>
      <View style={{ marginVertical: 20, alignSelf: "center" }}>
        <Button title="Button 1" />
      </View>
      <ExpanderView
        renderHeader={() => renderHeader(2)}
        {...{ expanded: expanded2, renderContent }}
      >
        {renderContent()}
      </ExpanderView>
    </View>
  );
};

const Tag = () => (
  <Text
    style={{
      backgroundColor: "white",
      padding: 10,
      borderRadius: 8,
      margin: 10,
    }}
  >
    Content
  </Text>
);
