import { NativeModules } from 'react-native';

const isTest = NativeModules.LaunchArguments?.value.e2e;

interface Environment {
  api: {
    url: string;
  };
  cognito: {
    url: string | undefined;
    userPoolId: string;
    clientId: string;
  };
}

const testEnvironment: Environment = {
  api: {
    url: process.env.EXPO_PUBLIC_WIREMOCK_API_URL!,
  },
  cognito: {
    url: process.env.EXPO_PUBLIC_COGNITO_URL,
    userPoolId: 'us-east-1_KHnaYAbAj',
    clientId: 'k81h8jx71659bmm173pa4ea6',
  },
};

const realEnvironment: Environment = {
  api: {
    url: process.env.EXPO_PUBLIC_API_URL!,
  },
  cognito: {
    url: undefined,
    userPoolId: process.env.EXPO_PUBLIC_COGNITO_USER_POOL_ID!,
    clientId: process.env.EXPO_PUBLIC_COGNITO_CLIENT_ID!,
  },
};

export const environment: Environment = isTest
  ? testEnvironment
  : realEnvironment;
