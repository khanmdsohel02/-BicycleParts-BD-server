import React from 'react';

const Login = () => {
    return (
        
  <div className='h-screen flex justify-center items-center'>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1 className='text-center text-3xl'>Login</h1>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn bg-indigo-400 text-lg">Login</button>
        </div>
        <div class="divider">OR</div>
        <button className='btn bg-base-200 text-indigo-500 text-lg hover:text-white hover:bg-indigo-400 outline outline-offset-2 outline-indigo-100'>Continue With Google</button>
      </div>
    </div>
</div>
        
    );
};

export default Login;