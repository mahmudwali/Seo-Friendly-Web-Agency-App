
'use client'

import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center items-center	h-screen">
        <form className="p-5 w-96 shadow-2xl rounded-lg" action="">
          <div className="title text-center ">
            <h1 className="font-semibold text-sm  uppercase">Welcome to :</h1>
            

            <span className="text-3xl text-indigo-400 font-bold uppercase w-20 h-20">Sign up</span>
            
          </div>
          <div className="body my-5 text-center">
            <div className="flex">
              <input className="border-red-400 mr-2 border-b-2 w-full my-3 p-2 rounded-lg" type="text" placeholder="First Name" /> <br/>

            <input className="border-red-400 border-b-2 w-full my-3 p-2 rounded-lg" type="text" placeholder="Last Name" /> <br />
            </div>
            <input className="border-red-400 border-b-2 w-full my-3 p-2 rounded-lg" type="email" placeholder="Email" /> <br />
            <input className="border-red-400 border-b-2 w-full my-3 p-2 rounded-lg" type="number" placeholder="Phone Number" /> <br />
            <input className="border-red-400 border-b-2 w-full my-3 p-2 rounded-lg" type="password" placeholder="Password" /> <br />
            {/* <hr className="w-48" /> */}

            <button className="hover:bg-gradient-to-l bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% uppercase font-bold  w-full my-3 p-2 rounded-lg" type="submit">
              sign up
            </button>
          </div>
          <div className="account mt-20 text-center">
            <p>
              Aready Have an account? 
            </p>
              <Link className="text-indigo-500 font-semibold" href={"/login"}>
                 Sign in 
              </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
