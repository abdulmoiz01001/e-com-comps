import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PersonalInfoForm = ({ nextStep, prevStep, setFormData, formData } : { nextStep : any , prevStep : any, setFormData : any, formData : any } ) => {
  const [imagePreview, setImagePreview] = useState(formData.image || '');

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    gender: Yup.string().required('Gender is required'),
    age: Yup.number().required('Age is required').min(18, 'You must be at least 18 years old'),
    // image validation is removed because we'll handle the file upload separately
  });

  const handleImageUpload = (event : any, setFieldValue : any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFieldValue('image', reader.result); // Save the image data as a base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData({ ...formData, ...values });
        nextStep();
      }}
    >
      {({ setFieldValue }) => (
        <Form className="w-[50%] md:w-full sm:w-full xs:w-full xxs:w-full space-y-4 xxs:space-y-1">
          <div className="w-full flex flex-col justify-start items-start">
            <label>First Name</label>
            <Field name="firstName" className="w-full px-4 py-2 mt-2 border rounded-md" />
            <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <label>Last Name</label>
            <Field name="lastName" className="w-full px-4 py-2 mt-2 border rounded-md" />
            <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
          </div>
         
          <div className="w-full flex flex-col justify-start items-start">
            <label>Gender</label>
            <Field name="gender" as="select" className="w-full px-4 py-2 mt-2 border rounded-md">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <label>Age</label>
            <Field name="age" type="number" className="w-full px-4 py-2 mt-2 border rounded-md" />
            <ErrorMessage name="age" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <label>Image Upload</label>
            <input
              type="file"
              className="w-full px-4 py-2 mt-2 border rounded-md"
              onChange={(event) => handleImageUpload(event, setFieldValue)}
            />
            <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />
          </div>
          {imagePreview && (
            <div className="w-full flex flex-col justify-start items-start mt-4">
              <label>Image Preview:</label>
              <img src={imagePreview} alt="Preview" className="w-32 h-32 rounded-md object-cover" />
            </div>
          )}
          <div className="flex justify-between">
            <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md">
              Previous
            </button>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInfoForm;
