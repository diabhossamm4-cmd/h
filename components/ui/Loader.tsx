import { useLoaderContext } from '@/providers/loader.provider';
import { ReactNode } from 'react';
import { View } from 'react-native';

const LoaderComponent = ({ children }: { children: ReactNode }) => {
  const { Loader } = useLoaderContext();
  return (
    <View style={{ flex: 1 }}>
      <Loader />
      {children}
    </View>
  );
};

export default LoaderComponent;
