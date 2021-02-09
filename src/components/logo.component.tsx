/**
 * Import Application Header
 */

import React from 'react';
import {Image} from 'react-native';

import {StyleSheet, View} from 'react-native';

export const Logo = (props) => {
  return (
    <>
      <Image
        style={styles.logo}
        source={require('../../images/logo.png')}
        alt="Logo"
      />
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    maxWidth: '80%',
    height: 100,
    resizeMode: 'stretch'
  },
});
