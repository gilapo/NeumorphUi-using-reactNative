import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import NowPlayingTabItem from '../nowPlayingTabItem';
import TabItem from '../TabItem';
import {NowPlaying} from '../../pages';

const BottomTabNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <>
      <View style={styles.nowPlayingContainer}>
        <Pressable
          style={styles.nowPlayingButton}
          onPress={() => {
            navigation.navigate(NowPlaying);
          }}>
          <NowPlayingTabItem />
        </Pressable>
      </View>
      <View style={styles.menuContainer}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

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
            <TabItem
              key={index}
              isFocused={isFocused}
              label={label}
              onLongPress={onLongPress}
              onPress={onPress}
            />
          );
        })}
      </View>
    </>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  menuContainer: {
    borderTopWidth: 2,
    borderColor: 'rgba(34, 37, 41, 0.9)',
    flexDirection: 'row',
    backgroundColor: '#272a2e',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 60,
    padding: 2,
  },
  nowPlayingContainer: {
    borderTopWidth: 2,
    borderColor: '#1DB956',
    flexDirection: 'row',
    backgroundColor: '#272a2e',
    justifyContent: 'space-between',
    height: 65,
  },
  nowPlayingButton: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
});
