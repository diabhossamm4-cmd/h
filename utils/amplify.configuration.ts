import { Amplify } from 'aws-amplify';
import { environment } from '@/utils/environment';

export function configureAmplify() {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolEndpoint: environment.cognito.url,
        userPoolId: environment.cognito.userPoolId,
        userPoolClientId: environment.cognito.clientId,
        loginWith: {
          email: true,
        },
        signUpVerificationMethod: 'code',
        userAttributes: {
          email: {
            required: true,
          },
          phone_number: {
            required: true,
          },
        },
        passwordFormat: {
          minLength: 8,
          requireLowercase: true,
          requireUppercase: true,
          requireNumbers: true,
          requireSpecialCharacters: true,
        },
      },
    },
  });
}
