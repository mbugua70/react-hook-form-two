// React hook form
// libraly for handling form data
//  why use react hook form
//    manage form data
// submit form data
// enforce validations
// provide visual feedback
// manage complex form
//To install the react hook form we will run the command npm install react-hook-form
//to use react hook form we will use useForm hook
// useForm usually return an object.
//the object will help us in managing form data / submitting form data/ enforcing validations and providing feedback

// import { useFieldArray } from "react-hook-form";


// managin form state
// every user has a few moving part that keep changing from the time a user loads the form to the time they submit it
//  what we mean by form state
// current value of every field in the form
// whether a field has been interacted with
// whether a field value has changed
// whether the form is invalid
// whether a field contains errors

// nb:: form state can be represented as an object
// register method help to manage form state
// it will return for method which will be hooked into the form control
// this are name, ref, onChange, onBlur

// how to use register method
// we will first destructure it
//  const {name, onChange, onBlur, ref} = register("username") - we will pass the name of the field as a string
//shorthand method for this is destructuring the register method in the input field
// <input type ="text"  id="username" {...register("username")}/>

//  react hook devtool
// this one help in the debugging of the code
// to install the dev tool we use npm install -D @hookform/devtools
// to use the dev tool react hook form we will import it to our file projct then use its component on the buttom of our project code <DevTool/>

// react hook form is able to track the form without rerendering the component


// form validation with react hook form
// react hook form support the following form validation
//required, pattern, min & max and then minLength and maxLength
// to allow react hook form to handle validation of the field we will pass the property onValidate to the form
// to add required validation to the field / required field we will pass the second arguement to the regitster object.
// validation only occure when the form is submitted

{/* <input type = "text" id="username" {...register("username", {
 required = "username is required"
})} */}

// pattern validation
{/* <input type = "email" id="email" {...register("email",{

   pattern: {
    value: code,
    message: "invalid email address"
   }
})}/> */}

// one can also pass the required validation as an object too
// required{
//     value: true,
//     message: "Your details is requierd"
// }

// displaying the error message
// we will have to destructure the formState object from the object of the useForm hook
//  then destructure it again

// const {error} = formState
// displaying the errors we will do as follows
//  <p>{error.email?.message}</p>

// custom validation
// we will add another property with a key value to the register
// example
// validate: (fieldValue) =>{
//    return fieldValue !== "johndoe@gmail.com" || "Enter different email address"
// }

// enhancing react hook form
// default values


// nested object
// arrays

// dynamic fields
// collecting multiple fields
// to access this functionality you will have to use useFieldArry hook
// useFieldArry only works with objects values.
//you will need to specify the key field as an array of fields by invoking it using the fieldArray
// by doing this useFieldArray will return fields which can be used in jsx
// example

// const {field} = useFieldArray({
//    name:"phNumber",
//    control: control
// })

// numeric and date field values for react hook form

// watch method to observe the form field values

// const watchUsername = watch([""]) || watch("usename")
// triggers rerenders
// subscribes to input channges

// get field values
// does not cause rerender or cause subscribe input changes
// or changing the field values wiill not trigger the render of change of value
// you can retrieve individual feild value or as an array of field values by passing in as an arguement.

// set values
// this one is use to set the values of the form field element
// setValues method takes two arguement one is the field name and another one is the field values
// example
// setValues("username", "")
// setValue method does not affect the state of the form such as dirty touched and validation


// touched and dirty state.
// touched it tells whether the user has interacted with field or not.
//dirty indicate whether the user has modify the input field or not.
//to access them we will destructure dirtyFields and touchedFields or use the boolean isDirty or isTouched

// disabling fields
//in react hook form we disable a field by passing disable property in the register.
// when field is disabled the value of the field becomes undefined and also the validation is disabled.


// handle submission errors
// we will pass onError as an argument to the handleSubmit function
// example
// const onError = (errors: FieldErrors) =>{}
// FieldErrors is from react hook form
// disabling submit button on submission one can use the isDirty or isTouched or isValid

// form submission state
// its useful in tracking the progress of form submission
// isSubmitting its used to track the submission of the form
// its default value is false and is set to true once the form is  submission
//isSubmitted is used to track whether the form is submitted
// isSubmittedSucceful keep track of the form submission without any runtime error
//submitCount keep track of the number of form has been submitted


// reset
// its a method used to reset form values
// the values will be set back to the dfault values as they were declared
// reset is mostly used inside the useEffect to reset the form values to there default values


// async validation
// can be used to check the validation of the email if it exist or if the email

// validation mode
//mode action will determine when should the validation occure
// example of the values you can use with the mode
// example
//  mode: "onSubmit" - this means validation will occure after the form validation
//other events are onTouched, onChange, onSubmit, all
// all will trigger the changes both on blur or onChange mode


// manually trigger validations
// we will use the method trigger
// trigger method  can also be used to trigger the validation of a specific field
// example trigger("channel")

// yup libraly for validation
// to intergrate yup and hookform we will write this command
// npm i yup @hookform/resolvers
// to use yup in our project we will import the following
//import {yupRosolver } from "@hookform/resolver/yup"
// import * as yup from "yup "

// const schema = yup.object({
//    username: yup.string().required("username is required")
//    email: yup.string().email("validation message for the format").required("email is required")
// })

// to use the yup

// resolver: yupRosolver(schema)