import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AppStyles, AppColors } from '@theme';

const styles = StyleSheet.create({
  container: {
    ...AppStyles.iconRound,
    borderWidth: 1,
    borderColor: AppColors.border
  }
});

const ToggleBox = ({ isActive, onToggle }) => {
  const [_isActive, _setIsActive] = useState(isActive);

  const toggleCallback = useCallback(() => {
    _setIsActive(!_isActive);
    onToggle && onToggle(!_isActive);
  }, [_isActive, onToggle]);

  // Rendering
  const _renderCheckIcon = useMemo(() => {
    if (_isActive) {
      return <Image style={{ ...styles.icon, tintColor: '#FFFFFF' }} source={require('@images/CheckIcon.png')} />;
    }
  }, [_isActive]);

  return (
    <TouchableOpacity
      style={[styles.container, _isActive && { backgroundColor: AppColors.active }]}
      onPress={toggleCallback}
    >
      {_renderCheckIcon}
    </TouchableOpacity>
  );
};

export default ToggleBox;
