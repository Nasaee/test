'use client';

import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  // TODO: handle auth here
  const isLogin = true;

  if (isLogin) {
    router.replace('/');
  }
  return <div>Login</div>;
};
export default Login;
