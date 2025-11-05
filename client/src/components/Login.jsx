// import React, { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../contect/AuthProvider'; 
// import googleLogo from "../assets/google-logo.svg";

// const Login = () => {
//     const { login, loginwithGoogle } = useContext(AuthContext);
//       const [error, setError] = useState('');
    
//       const location = useLocation();
//       const navigate = useNavigate();
    
//       const from = location.state?.from?.pathname || "/";
    
//       const handleSignUp = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         login(email,password).then((userCredential)=>{
//             // sign in
//             const user = userCredential.user;
//             alert("Login Sucessfully!!")
//             navigate(from,{replace:true})
//         })
//         .catch((error)=>{
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         });
    
//         // createUser(email, password)
//         //   .then((userCredential) => {
//         //     const user = userCredential.user;
//         //     alert('signUp sucessfully!!!:', user);
//         //     navigate(from,{replace:true})
//         //   })
//         //   .catch((error) => {
//         //     const errorMessage = error.message; 
//         //     setError(errorMessage);
//         //   });
//       };
    
//     //   sign up using google
    
//     const handleLogin = () =>{
//         loginwithGoogle().then((result)=>{
//             const user = result.user;
//             alert("sign Up sucessfully!!!")
//             navigate(from,{replace:true})
//         })
//          .catch((error) => {
//             const errorMessage = error.message; 
//             setError(errorMessage);
//           });
//     }
    
//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <div className="max-w-md mx-auto">
//               <div>
//                  <h1 className="text-2xl font-semibold text-center">Sign Up Form</h1>
//               </div>
//              <div className="divide-y divide-gray-200">
//               <form
//                 onSubmit={handleLogin}
//                 className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
//               >
//                 <div className="relative">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
//                     placeholder="Email address"
//                     required
//                   />
//                 </div>
//                 <div className="relative">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
//                     placeholder="Password"
//                     required
//                   />
//                 </div>

//                 {/*  Show error message */}
//                 {error && <p className="text-red-600 text-sm">{error}</p>}

//                 <p className="text-sm text-gray-700">
//                   If you haven't an account?{' '}
//                   <Link to="/sign-up" className="text-blue-700 font-medium hover:underline">
//                     Sign Up
//                   </Link>{' '}
//                   here.
//                 </p>

//                 <div className="relative">
//                   <button
//                     type="submit"
//                     className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-600 transition"
//                   >
//                     Sign Up Form
//                   </button>
//                 </div>
//               </form>
//             </div>
//             <hr/>
//             <div className='flex w-full items-center flex-col mt-5 gap-8'>
//                 <button onClick={handleRegister} className='block'><img src={googleLogo} alt='' className='w-12 h-12 inline-block'/>Login with Google</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contect/AuthProvider';
import googleLogo from '../assets/google-logo.svg';

const Login = () => {
  const { login, loginwithGoogle } = useContext(AuthContext);
  const [error, setError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  //  Handle Email/Password login
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Login successfully!');
        setError('');
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //  Handle Google login
  const handleGoogleLogin = () => {
    loginwithGoogle()
      .then((result) => {
        const user = result.user;
        alert('Login with Google successfully!');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center">Login Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleLogin}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Password"
                    required
                  />
                </div>

                {/*  Error message */}
                {error && <p className="text-red-600 text-sm">{error}</p>}

                <p className="text-sm text-gray-700">
                  Don’t have an account?{' '}
                  <Link to="/sign-up" className="text-blue-700 font-medium hover:underline">
                    Sign Up
                  </Link>{' '}
                  here.
                </p>

                <div className="relative">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-600 transition"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>

            <hr className="my-4" />

            <div className="flex w-full items-center flex-col mt-5 gap-4">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition"
              >
                <img src={googleLogo} alt="Google" className="w-6 h-6" />
                <span>Login with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
