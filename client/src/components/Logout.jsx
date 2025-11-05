// import React, { useContext } from 'react'
// import { AuthContext } from '../contect/AuthProvider'
// import { useLocation, useNavigate } from 'react-router-dom';

// const Logout = () => {
//     const {logOut} = useContext(AuthContext);
//       const location = useLocation();
//        const navigate = useNavigate();
//   const from = location.state?.from?.pathname || '/';
//     const handleLogout = () =>{
//         logOut().then(()=>{
//             alert("sign-out sucessfully!!!")
//             navigate(from, { replace: true });
//         }).catch((error)=>{

//         })
//     }
//   return (
//     <div className='h-screen bg-teal-100 flex items-center justify-center'>
//         <button className='bg-red-600 px-8 py-2  rounded' onClick={handleLogout}>Log Out</button>
//     </div>
//   )
// }

// export default Logout

import React, { useContext } from 'react';
import { AuthContext } from '../contect/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogout = () => {
    logOut().then(() => {
        alert('Signed out successfully!');
      })
      .catch((error) => {
    //    An error happed
      });
  };

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-8 py-2 rounded hover:bg-red-700 transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
