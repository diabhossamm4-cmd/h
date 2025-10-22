import { Platform, PlatformOSType, StyleSheet } from 'react-native';

export const shoadowSStyle = StyleSheet.create({
  ios: {
    shadowColor: '#6b7280',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  android: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
});

export const getShadowStyle = (os?: PlatformOSType) => {
  if (os === 'ios' && Platform.OS === 'ios') return shoadowSStyle.ios;
  if (os === 'android' && Platform.OS === 'android')
    return shoadowSStyle.android;
  if (!os)
    return Platform.OS === 'ios' ? shoadowSStyle.ios : shoadowSStyle.android;
};
