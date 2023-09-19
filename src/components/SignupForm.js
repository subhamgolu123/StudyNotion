import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';



const SignupForm = ({setIsLoggedIn}) => {
const navigate = useNavigate();
    const [formData, setFormData,] = useState({
        firstName:"",
        lastName:"",
        email:"",
       password:"",
       confirmPassword:""
    })
   
const [showPassword, setShowPassword] = useState(false);
const [showconfirmpassword, setshowconfirmpassword] = useState(false);
const [accountType, setAccountType] = useState("student")

    function changeHandler (event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
        }

        function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Passwords do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };

      const finalData = {
        ...accountData,accountType
      }



        console.log("printing Final account data");
        console.log(finalData);

        navigate("/dashboard");
        }


  return (

   

    <div >
             
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button
        className={`${accountType === "student" 
        ? 
         " bg-richblack-900 text-richblack-5"
        : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setAccountType("student")}>
            Student 
        </button>
        <button  
         className={`${accountType === "instructor" 
         ? 
          " bg-richblack-900 text-richblack-5"
         : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setAccountType("instructor")}>
            Instructor
        </button>
    </div>

    <form onSubmit={submitHandler}>
        {/* first name and last name */}
        <div className='flex gap-x-4 mt-[20px]'>
        <lable  className ="w-full">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> 
                First Name<sup className='text-pink-200'>*</sup>
            </p>
            <input 
            required
            type="text"
            name="firstName"
            onChange={changeHandler}
            placeholder="Enter First Name"
            value={formData.firstName}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </lable>

        <lable className ="w-full">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                Last Name<sup className='text-pink-200'>*</sup>
            </p>
            <input 
            required
            type="text"
            name="lastName"
            onChange={changeHandler}
            placeholder="Enter Last Name"
            value={formData.lastName}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </lable>

        </div>
     {/* email Address */}
     <div className='mt-[20px]'>
     <lable className ="w-full mt-[20px]">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input 
            required
            type="text"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </lable>
     </div>
        

{/* creaatepassword  and confirmPassword*/}
 <div className='w-full flex gap-x-4 mt-[20px]'>
       <lable className= "w-full relative ">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                Create Password<sup className='text-pink-200'>*</sup>
            </p>
            <input 
            required
            type={showPassword ? ("text") : ("password")}
            name="password"
            onChange={changeHandler}
            placeholder="Enter password"
            value={formData.password}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span className='absolute right-3 top-[38px] cursor-pointer' 
            onClick={() => setShowPassword((prev) => !prev)}>
      {showPassword ? (<AiOutlineEyeInvisible  ontSize={24} fill='#AFB2BF'/>) :
       (<AiOutlineEye ontSize={24} fill='#AFB2BF'/>) }
     </span>
          </lable>

           <lable className = " w-full relative">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                Confirm Password<sup className='text-pink-200'>*</sup>
            </p>
            <input   
            required
            type={showconfirmpassword ? ("text") : ("password")}
            name="confirmPassword"
            onChange={changeHandler}
            placeholder="confirm Password"
            value={formData.confirmPassword}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span className='absolute right-3 top-[38px] cursor-pointer'
             onClick={() => setshowconfirmpassword((prev) => !prev)}>
            {showconfirmpassword ? (<AiOutlineEyeInvisible ontSize={24} fill='#AFB2BF'/>) 
            : (<AiOutlineEye ontSize={24} fill='#AFB2BF'/>) }
     </span>
          </lable>
    </div>   
     <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
        Creat Account
     </button>
    </form>
               
    </div>
  )
}

export default SignupForm