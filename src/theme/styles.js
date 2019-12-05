import AppColors from './colors';
import AppSizes from './sizes';
import AppFonts from './fonts';

export default {
  centerScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: AppSizes.paddingExtraLarge
  },
  shadow: {
    shadowColor: AppColors.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 1,
    borderRadius: 5
  },
  card: {
    borderColor: AppColors.border,
    borderRadius: 10,
    borderWidth: 1
  },
  icon: {
    width: 24,
    height: 24
  },
  iconRound: {
    width: 24,
    height: 24,
    borderRadius: 24,
    margin: AppSizes.paddingSml
  }
};
