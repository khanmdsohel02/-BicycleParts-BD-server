import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebaseConfig';
import Loading from '../components/Loading';
import { SiFacebook } from 'react-icons/si';
import { RiGoogleFill } from 'react-icons/ri';
import useToken from '../hooks/useToken';


const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user || googleUser || fbUser)
    
    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathname || "/";
    
    let signinError;
  
    if (loading || googleLoading || updating || fbLoading) {
      return <Loading/>
    }
  
    if (error || googleError || updateError || fbError) {
      signinError = <p className='text-red-500'>{error?.message || googleError?.message || updateError?.message}</p>
    }
  
  
    if (token) {
        navigate(from, { replace: true });
    }
    
    const onSubmit =  async data => {
     await createUserWithEmailAndPassword(data.email, data.password)
      await updateProfile({ displayName: data.name});
  };
  

      return (
          
    <div className='h-screen flex justify-center items-center'>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} class="card-body">
              <h1 className='text-center text-2xl  font-bold'>Sign Up</h1>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input 
            {...register("name", {
              required: {
                value: true,
                message:'Name is Required'
              }
    })} 
             type="text"
             placeholder="User Name" 
             class="input input-bordered" />
                {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}
                
          </div>
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
          <input value='Sign up' type="submit" className='btn mt-5 bg-indigo-400 outline outline-offset-2 outline-indigo-100 hover:bg-indigo-500' />
          <p className='text-center'>Already have an Account?  <Link className='text-indigo-300' to='/login'> SignIn Here</Link></p> 
          <div class="divider">OR</div>
              <button
                onClick={() =>signInWithGoogle()}
                className='btn bg-base-200 text-indigo-500 text-lg hover:text-white hover:bg-indigo-400 outline outline-offset-2 outline-indigo-100'>
                <span className='text-indigo-600 pr-2 text-3xl'><RiGoogleFill /></span>
                Continue With Google</button>
               <button
              onClick={() =>signInWithFacebook()}
              className='btn bg-base-200 text-indigo-500 text-lg hover:text-white hover:bg-indigo-400 outline outline-offset-2 outline-indigo-100 mt-3'><span className='text-indigo-600 pr-2 text-3xl'><SiFacebook /></span> Continue With FaceBook</button>
        </form>
      </div>
  </div>
    );
};

export default SignUp;