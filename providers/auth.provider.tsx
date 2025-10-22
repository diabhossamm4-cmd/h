import { ReactNode, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
// import { useUser } from '@/hooks/api/use-user';
import { fetchAuthSession } from '@aws-amplify/core';
import {
  confirmSignIn,
  setUpTOTP,
  signOut as amplifySignOut,
} from 'aws-amplify/auth';
import {
  signIn,
  updateMFAPreference,
  verifyTOTPSetup,
  resetPassword,
  confirmResetPassword,
} from '@aws-amplify/auth';
import { useRouter } from 'expo-router';
import { useLoaderContext } from './loader.provider';
// import { User } from '../interfaces/api/auth/user.interface';

interface IAuthContext {
  login: (email: string, password: string) => Promise<void>;
//   currentUser?: User;
  isInitialized?: boolean;
  signOut: () => Promise<void>;
  finishMFASetup: (code: string, isUserLoggedIn: boolean) => Promise<void>;
  confirmMFACode: (code: string) => Promise<void>;
  changePassword: (email: string) => Promise<void>;
  confirmChangePassword: (
    email: string,
    newPassword: string,
    code: string,
  ) => Promise<void>;
  _clearState: () => void;
}

const defaultAuthContext: IAuthContext = {
  login: async () => {},
  signOut: async () => {},
  finishMFASetup: async () => {},
  confirmMFACode: async () => {},
  changePassword: async () => {},
  confirmChangePassword: async () => {},
  _clearState: () => {},
};

export const AuthContext = createContext<IAuthContext>(defaultAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
//   const { getCurrentUser } = useUser();
//   const [user, setUser] = useState<User>();
  const [isInitialized, setIsInitialized] = useState(false);
  const { hideLoader } = useLoaderContext();

  const fetchUser = async () => {
    const session = await fetchAuthSession();
    if (session.tokens?.accessToken) {
      try {
        // const user = await getCurrentUser.mutateAsync();
        // setUser(user);
      } catch {}
    }
    setIsInitialized(true);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    const { nextStep } = await signIn({
      username: email,
      password: password,
      options: {
        authFlowType: 'USER_PASSWORD_AUTH',
      },
    });
    hideLoader();
    // if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
    //   return router.push(
    //     '/(auth)/confirm-email?email=' + encodeURIComponent(email),
    //   );
    // }

    // if (nextStep.signInStep === 'CONTINUE_SIGN_IN_WITH_TOTP_SETUP') {
    //   const url = nextStep.totpSetupDetails.getSetupUri('transfapay', email);
    //   return router.push(
    //     '/(auth)/2fa-setup?otpUrl=' + encodeURIComponent(url.toString()),
    //   );
    // }
    // if (nextStep.signInStep === 'DONE') {
    //   const { getSetupUri } = await setUpTOTP();
    //   const url = getSetupUri('Transfapay', email);
    //   return router.push(
    //     '/(auth)/2fa-setup?isLoggedIn=true&otpUrl=' +
    //       encodeURIComponent(url.toString()),
    //   );
    // }

    // if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_TOTP_CODE') {
    //   return router.push('/(auth)/2fa');
    // }
  };

  const finishMFASetup = async (code: string, isUserLoggedIn: boolean) => {
    if (!isUserLoggedIn) {
      await confirmSignIn({
        challengeResponse: code,
      });
    } else {
      await verifyTOTPSetup({
        code: code,
      });
    }
    await updateMFAPreference({ totp: 'PREFERRED' });
    // const user = await getCurrentUser.mutateAsync();
    // setUser(user);
    hideLoader();
    return router.push('/');
  };

  const confirmMFACode = async (code: string) => {
    await confirmSignIn({
      challengeResponse: code,
    });
    // const user = await getCurrentUser.mutateAsync();
    // setUser(user);
    hideLoader();
    return router.push('/');
  };

  const changePassword = async (email: string) => {
    await resetPassword({
      username: email,
    });
  };

  const confirmChangePassword = async (
    email: string,
    newPassword: string,
    code: string,
  ) => {
    await confirmResetPassword({
      username: email,
      newPassword,
      confirmationCode: code,
    });
  };

  const signOut = async () => {
    setIsInitialized(false);
    try {
      await amplifySignOut();
    } catch (e) {
      console.log('Error: ', e);
    }
    // setUser(undefined);
    setIsInitialized(true);
  };

  const _clearState = () => {
    setIsInitialized(false);
    // setUser(undefined);
    fetchUser();
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        // currentUser: user,
        isInitialized,
        signOut,
        finishMFASetup,
        confirmMFACode,
        changePassword,
        confirmChangePassword,
        _clearState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
