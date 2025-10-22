// import { useAxios } from '@/src/hooks/api/use-axios';
// import { User } from '@/src/interfaces/api/auth/user.interface';
// import { useMutation } from 'react-query';

// export function useUser() {
//   const api = useAxios();

//   const getCurrentUser = useMutation({
//     mutationFn: async () => {
//       const result = await api.get<User>('/user/me');
//       return result.data;
//     },
//     mutationKey: 'getCurrentUser',
//   });

//   return { getCurrentUser };
// }
