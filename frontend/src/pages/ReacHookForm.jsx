////////////////////////////// this is
//////////Use of the REACT HOOK FORM //////////////////////

// for reference - https://www.youtube.com/watch?v=cc_xmawJ8Kg&list=LL&index=1&t=545s

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { resolvePath } from "react-router-dom";

const ReacHookForm = () => {
  const {
    register, // this is used to register the fields from input , it automatically take the field value and register with name using {...register("name")}
    handleSubmit, // this is function provided by the useFor() which take our onSubmit function inside with we will call the api or to handle few defalults
    setError,// this is used to setError after the api call by making our onSubmit Function as async
    formState: { errors, isSubmitting }, // these are two fields provided by useForm for handking error before submitting 
  } = useForm();

  const onSubmit = async(data) => {
    try {
      await new Promise((resolve)=>{  // throwing errro after calling api
        setTimeout(resolve,1000);
      })
      throw new Error();
      console.log(data);
    } catch (error) {
    //   setError("email",{message:"This email is already taken"}) // handeled after api call
      setError("root",{message:"This email is already taken"}) // handeled after api call for whole form below the form 

    
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email Adderess</label>
      <input
        {...register("email", {                    // ------------------------------------
          required: "Email Id is Required",             // this part is called to register a field
          validate: (value) => value.includes("@"), 
        })}                                        // -----------------------------------------
        type="text"
        placeholder="Email"
      />
      {errors.email && <div>{errors.email.message}</div>}
      <br></br>
      <label>Password</label>
      <input
        {...register("password", {
          required: "password is required",
          minLength: {
            value: 8,
            message: "minimum length of 8 is required",
          },
          validate: (value) => {},
        })}
        type="text"
        placeholder="Password"
      />
      {errors.password && <div>{errors.password.message}</div>}

      <br />

      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? <div>Loading.......</div> : "Submit"}
      </button>

      {errors.root && <div>{errors.root.message}</div>}
    </form>
  );
};

export default ReacHookForm;
