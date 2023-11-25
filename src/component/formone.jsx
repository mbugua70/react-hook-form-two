
import React from 'react'
import {useForm, useFieldArray} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'

const FormOne = () =>{
    // return an object
    const form = useForm({
      defaultValues: {
        username: "john",
        email: "johndoe@gmail.com",
        social:{
         twitter:"",
         facebook:""
        },
        phoneNumbers: ["", ""],
        phNumbers: [{number:''}],
        age: 0,
        date: new Date()
      },
      mode: "onSumit"
    })
const {register, control, handleSubmit,formState, watch, getValues, setValue, reset, trigger} = form;

    const {errors,isDirty, isValid,isSubmitSuccessful} = formState;

    // dynamic fields with useFieldArrays

    const {fields, append, remove} = useFieldArray({
      name: "phNumber",
      control
    })

    // watch method in react hook
    const watchUserDetails = watch("username")

    // get field values with getValues method
    const handleGeValues = () =>{
      console.log("field values:", getValues())
    }

    // setValues method

const handleSetValues = () =>{
  setValue("username", "")

}

    // form submission
    // by passing the function below as the arguement of the handlesubmit this gives it access to data of the form
    const onSubmit = (data) =>{
        console.log("submit",data)
    }

    // handling erroRs

    const onError = (errors) =>{
     console.log("error handling", errors)
    }

    // useEffect and reset with isSubmittedSuccessful

  React.useEffect(() =>{
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful, reset])

    return(
        <form action="" onSubmit={handleSubmit(onSubmit, onError)}>
          <h2>watch values: {watchUserDetails}</h2>
            <div className="col">
                <div className="row">
                 <label htmlFor="username">Username</label>
                  <input
                  type="text"
                   id="username"
                   {...register("username",{
                    required: "username is required"
                   })}
                   />
                   <p>{errors.username?.message}</p>
                </div>
                <div className="row">
                 <label htmlFor="email">Email</label>
                  <input
                  type="email"
                  id="email"
                  {...register("email", {
                    pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email format"
                    },
                    validate: {
                      noDomain: (fieldValue) =>{
                        return fieldValue !== "johndoe@gmail.com" || "Enter different email address"
                    },
                    emailAvailable: async (fieldValue) => {
                      const respose = await fetch(
                        `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                       );
                       const data = respose.json();
                       return data.length == 0 || "Email already exist";
                    }
                  }



                  })}
                  />
                  <p>{errors.email?.message}</p>
                </div>
                <div className="row">
                 <label htmlFor="channel">Channel</label >
                  <input
                  type="text"
                  id="channel"
                  {...register("channel",{
                    required:{
                      value: true,
                      message: "Fill in the field"
                    }
                  })}
                  />
                  <p>{errors.channel?.message}</p>
                </div>
                <div className="row">
                 <label htmlFor="twitter">Twitter</label >
                  <input
                  type="text"
                  id="twitter"
                  {...register("social.twitter",{
                    required:{
                      value: true,
                      message: "Fill in the field"
                    }
                  })}
                  />
                  <p>{errors.channel?.message}</p>
                </div>
                <div className="row">
                 <label htmlFor="facebook">Facebook</label >
                  <input
                  type="text"
                  id="facebook"
                  {...register("social.facebook",{
                    required:{
                      value: true,
                      message: "Fill in the field"
                    }
                  })}
                  />
                  <p>{errors.channel?.message}</p>
                </div>

                {/* arrays in react hook form */}

                <div className="row">
                 <label htmlFor="phone_one">Secondary phone number</label >
                  <input
                  type="tel"
                  id="phone_one"
                  {...register("phoneNumbers.0",{
                    required:{
                      value: true,
                      message: "Fill in the field"
                    }
                  })}
                  />
                  <p>{errors.channel?.message}</p>
                </div>

                <div className="row">
                 <label htmlFor="phone_two">Primary phone number</label >
                  <input
                  type="text"
                  id="phone_two"
                  {...register("phoneNumbers.1",{
                    required:{
                      value: true,
                      message: "Fill in the field"
                    }
                  })}
                  />
                  <p>{errors.channel?.message}</p>
                </div>

                {/* dynamic field arrays */}
                <div className="row">
                 <label>List of phone number</label >
                  {fields.map((field, index) =>{
                    return(
                      <div className="row_child" key={field.id}>
                     <input type="number" {...register(`phNumbers.${index}.number`)} />
                     {index > 0 && (
                        <button type="button" onClick={() => remove(index)}>remove number</button>
                     )}
                      </div>

                    )
                  })}
                   <button type="button" onClick={() => append({number: ""})}>add number</button>
                </div>

                {/* numeric and date */}
                <div className="row">
                 <label htmlFor="age">Age</label >
                  <input
                  type="number"
                  id="age"
                  {...register("age",{
                      // this will ensure the submitted data is of value number
                      valueAsNumber: true,
                    required:{
                      value: true,
                      message: "Fill in the field"
                    }
                  })}
                  />
                  <p>{errors.age?.message}</p>
                </div>

                <div className="row">
                 <label htmlFor="date">Date</label >
                  <input
                  type="date"
                  id="date"
                  {...register("date",{
                      // this will ensure the submitted data is of value number
                      valueAsDate: true,
                    required:{
                      value: true,
                      message: "Fill in the field"
                    }
                  })}
                  />
                  <p>{errors.date?.message}</p>
                </div>



                <div className="row">
                <button>submit</button>
                </div>
                <div className="row">
                <button type="button" onClick={handleGeValues} disabled={!isDirty || !isValid}>Get Values</button>
                </div>
                <div className="row">
                <button type="button" onClick={handleSetValues}>Set Values</button>
                </div>
                <div className="row">
                <button type="button" onClick={() => trigger()
                } >valdate</button>
                </div>
              <DevTool control={control}/>
            </div>
        </form>
    )
}

export default FormOne;