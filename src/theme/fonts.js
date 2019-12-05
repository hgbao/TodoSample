import { Platform } from 'react-native';
import AppColors from './colors';

const base = {
  color: AppColors.textPrimary,
  fontWeight: '400',
  ...Platform.select({
    ios: {
      fontFamily: 'System'
    },
    android: {
      fontFamily: 'sans-serif-light'
    }
  })
};

export default {
  base: { ...base },
  title1: { ...base, fontSize: 36, fontWeight: '600', lineHeight: 43 },
  title2: { ...base, fontSize: 34, fontWeight: '600', lineHeight: 41 },
  title3: { ...base, fontSize: 32, fontWeight: '500', lineHeight: 39 },
  title3Semi: { ...base, fontSize: 32, fontWeight: '600', lineHeight: 39 },
  xlarge: { ...base, fontSize: 22, fontWeight: '500', lineHeight: 28 },
  xlarge600: { ...base, fontSize: 22, fontWeight: '600', lineHeight: 28 },
  large: { ...base, fontSize: 20, fontWeight: '500', lineHeight: 25 },
  headline: { ...base, fontSize: 17, fontWeight: '400', lineHeight: 22 },
  headline500: { ...base, fontSize: 17, fontWeight: '500', lineHeight: 22 },
  body: { ...base, fontSize: 15, fontWeight: '400', lineHeight: 20 },
  body500: { ...base, fontSize: 15, fontWeight: '500', lineHeight: 20 },
  small: { ...base, fontSize: 14, fontWeight: '400', lineHeight: 18 },
  xsmall: { ...base, fontSize: 13, fontWeight: '400', lineHeight: 18 },
  xxsmall: { ...base, fontSize: 11, fontWeight: '400', lineHeight: 13 },
  xxsmall500: { ...base, fontSize: 11, fontWeight: '500', lineHeight: 13 }
};
