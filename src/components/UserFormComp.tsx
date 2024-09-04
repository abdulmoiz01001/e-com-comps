import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ nextStep, setFormData, formData } : { nextStep : any  ,  setFormData : any , formData : any } ) => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <>
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData({ ...formData, ...values });
        nextStep();
      }}
    >
      {() => (
        <Form className=" w-[50%] md:w-full sm:w-full xs:w-full xxs:w-full  space-y-4">
          <div className='w-full flex flex-col justify-start items-start'  >
            <label>Username</label>
            <Field name="username" className="w-full px-4 py-2 mt-2 border rounded-md" />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
          </div>
          <div className='w-full flex flex-col justify-start items-start' >
            <label>Email</label>
            <Field name="email" type="email" className="w-full px-4 py-2 mt-2 border rounded-md" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>
          <div className='w-full flex flex-col justify-start items-start' >
            <label>Password</label>
            <Field name="password" type="password" className="w-full px-4 py-2 mt-2 border rounded-md" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>
         
          <div className="flex justify-end">
           
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
   
    </>
  );
};

export default UserForm;
