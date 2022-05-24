import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebaseConfig'
import { useForm } from "react-hook-form";
import Loading from '../components/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  let signinError;

  if (loading || googleLoading) {
    return <Loading/>
  }

  if (error || googleError) {
    signinError = <p className='text-red-500'>{error?.message || googleError?.message}</p>
  }


  if (user || googleUser) {
    console.log(user, googleUser)
    navigate(from, { replace: true });
  }
  const onSubmit = ({email, password}) => {
    console.log(email, password)
    signInWithEmailAndPassword(email, password)

  };
    return (
        
  <div className='h-screen flex justify-center items-center mt-24'>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} class="card-body">
            <h1 className='text-center text-2xl  font-bold'>Login</h1>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input 
          {...register("email", {
            required: {
              value: true,
              message:'Email is Required'
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: 'Provide a  Valid Email' 
    }
  })} 
           type="email"
           placeholder="Email" 
           class="input input-bordered" />
              {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
              {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input 
          {...register("password", {
            required: {
              value: true,
              message:'Password is Required'
            },
            minLength: {
              value: 8,
              message: 'Must be 8 Characters or longer' 
    }
  })} 
           type="password"
           placeholder="Password" 
           class="input input-bordered" />
              {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
              {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
        </div>
      {signinError}
        <input value='Login' type="submit" className='btn mt-5 bg-indigo-400 outline outline-offset-2 outline-indigo-100 hover:bg-indigo-500' />
        <p className='text-center'>New?  <Link className='text-indigo-300' to='/signup'> SignUp Here</Link></p> 
        <div class="divider">OR</div>
            <button
              onClick={() =>signInWithGoogle()}
              className='btn bg-base-200 text-indigo-500 text-lg hover:text-white hover:bg-indigo-400 outline outline-offset-2 outline-indigo-100'>Continue With Google</button>
      </form>
    </div>
</div>
        
    );
};

export default Login;