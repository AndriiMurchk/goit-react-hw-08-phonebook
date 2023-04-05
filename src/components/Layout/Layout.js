import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import AppMainBar from 'components/AppMainBar/AppMainBar';

const Layout = () => {
  return (
    <>
      <AppMainBar />
        <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>)
}

export default Layout;