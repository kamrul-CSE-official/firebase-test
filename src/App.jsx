
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import app from "./firebase/firebase.config";
import { useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function App() {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
const loggedser = result.user;
console.log(loggedser);
setUser(loggedser);
    })
    .catch(error=> {
      console.log(error);
    })
  }
  return (
    <div>
      {
        user && <div>
          <h3 className="text-2xl">{user.displayName}</h3>
        </div>
      }
      <button onClick={handleGoogleSignIn} className="btn rounded-full"><FcGoogle /></button>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <div className="flex items-center justify-center gap-3">

          <button onClick={handleGoogleSignIn} className="btn rounded-full"><FcGoogle /></button>


          <button className="btn rounded-full"><VscGithubInverted /></button>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}
