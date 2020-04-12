import React, { useRef, useLayoutEffect } from "react";
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
} from "react-native-reanimated";
import { mix, useValues, timing, useClocks } from "react-native-redash";

/**
 * @typedef {object} ExpanderViewProps
 * @property {() => React.Node} renderHeader
 * @property {React.Node} children
 * @property {boolean} expanded default value is **false**
 * @property {number} duration _in milliseconds_, default value is **400**
 * @property {() => void} onAnimationEnd
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
  const [progressClock] = useClocks(1, []);
  const [progress] = useValues([expanded ? 1 : 0], []);
  const { width } = useWindowDimensions();
  const contentContainer = useRef(null);
  const contentContainerHeight = useRef(-1);
  const layoutMeasureTimeout = useRef(null);

  useLayoutEffect(() => {
    clearTimeout(layoutMeasureTimeout.current);
    layoutMeasureTimeout.current = setTimeout(() => {
      contentContainer.current.measure((fx, fy, width, height) => {
        contentContainerHeight.current = height;
      });
    }, 500);
  }, [width]);
  useCode(() => {
    const isFirstTime = contentContainerHeight.current < 0;
    return block([
      set(
        progress,
        timing({
          clock: progressClock,
          duration: !isFirstTime ? duration : 0,
          from: expanded ? 0 : 1,
          to: expanded ? 1 : 0,
          easing: Easing.quad,
        })
      ),
      !isFirstTime &&
        cond(eq(clockRunning(progressClock), 0), call([], onAnimationEnd)),
    ]);
  }, [expanded]);

  const height = mix(progress, 0, contentContainerHeight.current);

  return (
    <Animated.View style={[styles.container]}>
      {renderHeader()}
      <Animated.View style={[styles.contentContainer, { height }]}>
        <View ref={contentContainer}>{children}</View>
      </Animated.View>
    </Animated.View>
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
