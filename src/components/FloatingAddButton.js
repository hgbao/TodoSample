import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import { AppSizes, AppFonts, AppColors, AppStyles } from '@theme';

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: AppSizes.padding,
    right: AppSizes.padding,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.active,
    borderRadius: 50
  },
  icon: {
    ...AppStyles.icon,
    tintColor: '#FFFFFF'
  },
  dateText: {
    ...AppFonts.xsmall
  }
});

const FloatingAddButton = ({ onPress }) => (
  <TouchableOpacity style={{ ...styles.container }} onPress={onPress}>
    <Image style={styles.icon} source={require('@images/AddIcon.png')} />
  </TouchableOpacity>
);

export default FloatingAddButton;
