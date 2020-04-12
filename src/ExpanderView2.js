import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Animated, {
  Easing,
  useCode,
  set,
  block,
  cond,
  eq,
  clockRunning,
  call,
  Transition,
  Transitioning,
} from "react-native-reanimated";
import { mix, useValues, timing, useClocks } from "react-native-redash";

/**
 * @typedef {object} ExpanderViewProps
 * @property {() => React.Node} renderHeader
 * @property {React.Node} children
 * @property {boolean} expanded default value is **false**
 * @property {number} duration _in milliseconds_, default value is **400**
 * @property {(expanded: boolean) => void} onAnimationEnd
 */

/**
 * @type {React.FC<ExpanderViewProps>}
 */
const ExpanderView = ({
  renderHeader,
  children,
  expanded = false,
  duration = 200,
  onAnimationEnd = () => {},
}) => {
  const [height, setHeight] = useState(expanded ? null : 0);
  const ref = useRef();

  useEffect(() => {
    ref.current.animateNextTransition();
    setHeight(expanded ? null : 0);
  }, [expanded]);

  return (
    <View style={styles.container}>
      {renderHeader()}
      <Transitioning.View
        ref={ref}
        style={styles.contentContainer}
        transition={<Transition.Change interpolation="easeInOut" />}
      >
        <View style={{ height }}>{children}</View>
      </Transitioning.View>
    </View>
  );
};

export default ExpanderView;

const styles = StyleSheet.create({
  container: {
    minWidth: 500,
  },
  contentContainer: {
    overflow: "hidden",
  },
});
