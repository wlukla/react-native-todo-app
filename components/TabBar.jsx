import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.navigationContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.navigationButton}
          >
            <Text style={{ color: isFocused ? 'white' : '#222' }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#5c9cf5',
  },
  navigationButton: {
    height: 50,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabBar;
