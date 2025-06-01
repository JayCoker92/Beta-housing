import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../utils/ValidationSchema"
import visible from "../assets/visibility_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import visibleOff from "../assets/visibility_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import { useState } from "react";
import signin from "../assets/signin.png";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <main className="main-wrapper min-h-screen flex bg-white items-center justify-center ">
        <div className="container mx-auto pt-6 pb-10 md:px-60 md:pl-20 md:flex gap-15 justify-center h-screen">
          
          
          <div className="container items-center md:mx-80  pt-6 pb-10 px-8 md:pl-20 md:flex gap-15">
            <form
              className="bg-white p-6 rounded-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="font-[700] text-[30px]">Welcome Back</h2>
              <p>Fill in your information to access your account</p>
              <div className="py-3 flex flex-col ">
                <label htmlFor="Email">Email</label>
                <input
                  className="md:w-[480px] h-[54.3px] "
                  type="email"
                  name=""
                  id="Email"
                  placeholder="Enter your Email"
                  {...register("Email")}
                />
                <p className="text-red-600">{errors.email?.message}</p>
              </div>
              <div className="flex flex-col relative">
                <label htmlFor="Password">Password</label>
                <input
                  className=" md:w-[480px] h-[54.3px]"
                  type={showPassword ? "text" : "password"}
                  name=""
                  id="Password"
                  placeholder="Enter your password"
                  {...register("password")}
                />
                <p className="text-red-600">{errors.password?.message}</p>

                <button
                  type="button"
                  className="absolute right-3 top-10 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)} // Toggle state
                >
                  <img
                    src={showPassword ? visibleOff : visible} // Change icon
                    alt="Toggle Visibility"
                    className="w-6 h-6 transition-opacity duration-200"
                  />
                </button>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="w-5 h-5 text-[#8D34FF] border-[#8D34FF] rounded focus:ring focus:ring-[#8D34FF]"
                  />
                  <label htmlFor="rememberMe" className="  py-2 cursor-pointer">
                    Remember Me
                  </label>
                </div>
                <div>
                  <button className="bg-[#8D34FF] text-white w-66 h-12 md:w-[480px] md:h-[54.3px] my-4 rounded-xl ">
                    Sign in
                  </button>
                </div>
                <div className="flex items-center ">
                  <div className="flex-1 h-[1px] bg-gray-300"></div>
                  <span className="mx-4 text-gray-500">or</span>
                  <div className="flex-1 h-[1px] bg-gray-300"></div>
                </div>
                <div>
                  <button className="w-full flex items-center justify-center border border-black rounded-lg py-3 text-gray-700 font-medium hover:bg-gray-100 transition">
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google Icon"
                      className="w-6 h-6 mr-3"
                    />
                    Continue with Google
                  </button>
                </div>
                <div className="mx-5 md:mx-30">
                  <p className="my-5">
                    Dont have an account?{" "}
                    <span className="text-[#8D34FF]">Sign up</span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>


        <section>
        <div className="hidden md:block ">
          <img
            src={signin}
            alt="Building"
            className="h-full w-full object-cover"
          />
        </div>

        <section className=' flex items-center gap-2 absolute top-16 right-132'>
          <div className='text-[#FEFEFF] font-poppins  font-[700] p-2 bg-[#3D9970] rounded-full '>
            <h1>BH</h1>
            </div>
          <h2 className='font-[500] text-[#FFFFFF] text-2xl font-poppins'>BetaHouse</h2>
        </section>
        </section>
      </main>
    </>
  );
};

export default SignIn;