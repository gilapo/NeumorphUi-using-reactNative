import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../utils/constants';
import {RoundedButton} from '../../atoms';
import {iconBack} from '../../assets';
import {Neomorph} from 'react-native-neomorph-shadows';

const SearchBar = ({onPress}) => {
  return (
    <View style={styles.searchBarContainer}>
      <RoundedButton icon={iconBack} onPress={onPress} />

      <View style={styles.searchBarInputSection}>
        <Neomorph
          inner={true}
          swapShadows={true}
          darkShadowColor={colors.darkShadowColor} // <- set this
          lightShadowColor={colors.lightShadowColor} // <- this
          style={styles.neuSearchContainer}>
          <View>
            <TextInput
              autoFocus={true}
              placeholder="Permintaan pencarian"
              placeholderTextColor="#a5a6a8"
              style={styles.searchBarInput}
              maxLength={100}
            />
          </View>
        </Neomorph>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    padding: 10,
  },
  neuSearchContainer: {
    flexDirection: 'row',
    shadowOpacity: 0.6, // <- and this or yours opacity
    shadowRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(34, 37, 41, 0.9)',
    borderRadius: 10,
    backgroundColor: '#272a2e',
    width: 330,
    height: 55,
    marginLeft: 10,
  },
  searchBarInput: {
    padding: 10,
    width: '100%',
    color: colors.textColorWhite,
  },
});
