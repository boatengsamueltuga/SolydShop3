// import React from 'react'
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = ({ publicPage = false }) => {
//     const  { user } = useSelector((state) => state.auth);

//     if(publicPage){
//         return user ? <Navigate to="/profile" /> : <Outlet/>
//     }
//   return user ? <Outlet /> : <Navigate to="/login" />;
// }

// export default PrivateRoute

// import { useSelector } from "react-redux";
// import { Navigate, Outlet, useLocation } from "react-router-dom";

// const PrivateRoute = ({ publicPage = false, adminOnly = false }) => {
//   const { user } = useSelector((state) => state.auth);
//   const isAdmin = user && user?.roles?.includes("ROLE_ADMIN");
//   const isSeller = user && user?.roles.includes("ROLE_SELLER");
//   const location  = useLocation();

//   if (publicPage) {
//     return user ? <Navigate to="/" /> : <Outlet />;
//   }

//   if(adminOnly){
//     if(isSeller && !isAdmin){
//     const sellerAllowedPaths = ["/admin/orders", "/admin/products"];
//     const sellerAllowed = sellerAllowedPaths.some(path =>
//       location.pathname.startsWith(path)
//     );
//     if(!sellerAllowed){
//       return <Navigate to="/" replace/>
//     }
//     }
//   }
//   if(!isAdmin && !isSeller){
//       return <Navigate to="/" />
//     }
//   return user ? <Outlet /> : <Navigate to="/login" />;
// };



import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = ({ publicPage = false, adminOnly = false }) => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  const isAdmin = user?.roles?.includes("ROLE_ADMIN");
  const isSeller = user?.roles?.includes("ROLE_SELLER");

  // ✅ PUBLIC PAGES (login, register)
  if (publicPage) {
    return user ? <Navigate to="/" replace /> : <Outlet />;
  }

  // ❌ Not logged in → go to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ ADMIN-ONLY ROUTES
  if (adminOnly) {
    // Seller restrictions
    if (isSeller && !isAdmin) {
      const sellerAllowedPaths = ["/admin/orders", "/admin/products"];
      const sellerAllowed = sellerAllowedPaths.some((path) =>
        location.pathname.startsWith(path)
      );

      if (!sellerAllowed) {
        return <Navigate to="/" replace />;
      }
    }

    // Neither admin nor seller
    if (!isAdmin && !isSeller) {
      return <Navigate to="/" replace />;
    }
  }

  // ✅ NORMAL AUTHENTICATED ROUTES (checkout, etc.)
  return <Outlet />;
};

export default PrivateRoute;
