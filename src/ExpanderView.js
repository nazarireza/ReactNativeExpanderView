import React from "react";
import { View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

/**
 * @typedef {object} ExpanderViewProps
 * @property {() => React.Node} renderHeader
 * @property {() => React.Node} renderContent
 * @property {boolean} expanded default value is **false**
 * @property {number} duration _in milliseconds_, default value is **400**
 * @property {(expanded: boolean) => void} onAnimationEnd
 */

/**
 * @type {React.FC<ExpanderViewProps>}
 */
const ExpanderView = ({
  renderHeader,
  renderContent,
  expanded = false,
  duration = 400,
  onAnimationEnd,
}) => {
  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={{ overflow: "hidden", height: expanded ? null : 0 }}>
        {renderContent()}
      </View>
    </View>
  );
};

export default ExpanderView;

const styles = StyleSheet.create({
  container: {
    minWidth: 500,
  },
});
