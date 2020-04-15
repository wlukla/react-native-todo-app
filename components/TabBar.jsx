import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <NavContainer>
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
          <NavButton
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Text style={{ color: isFocused ? 'white' : '#222' }}>{label}</Text>
          </NavButton>
        );
      })}
    </NavContainer>
  );
};

const NavContainer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #5c9cf5;
`;

const NavButton = styled.TouchableOpacity`
  height: 50px;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export default TabBar;
