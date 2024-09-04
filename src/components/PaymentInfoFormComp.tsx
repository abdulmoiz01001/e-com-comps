import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PaymentInfoForm = ({ prevStep, setFormData, formData, submitForm }: { prevStep: any, setFormData: any, formData: any, submitForm: any }) => {
  const validationSchema = Yup.object({
    cardNumber: Yup.string()
      .matches(/^\d{16}$/, 'Card number must be 16 digits')
      .nullable(),  // Optional but validated if filled
    expiryDate: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Invalid expiry date')
      .nullable(),  // Optional but validated if filled
    cvv: Yup.string()
      .matches(/^\d{3}$/, 'CVV must be 3 digits')
      .nullable(),  // Optional but validated if filled
  });

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData({ ...formData, ...values });
        submitForm();
      }}
    >
      {() => (
        <Form className="w-[50%] md:w-full sm:w-full xs:w-full xxs:w-full space-y-4">
          <div className='w-full flex flex-col justify-start items-start'>
            <label>Card Number</label>
            <Field name="cardNumber" type="text" className="w-full px-4 py-2 mt-2 border rounded-md" />
            <ErrorMessage name="cardNumber" component="div" className="text-red-500 text-sm" />
          </div>
          <div className='w-full flex flex-col justify-start items-start'>
            <label>Expiry Date</label>
            <Field name="expiryDate" type="text" className="w-full px-4 py-2 mt-2 border rounded-md" />
            <ErrorMessage name="expiryDate" component="div" className="text-red-500 text-sm" />
          </div>
          <div className='w-full flex flex-col justify-start items-start'>
            <label>CVV</label>
            <Field name="cvv" type="text" className="w-full px-4 py-2 mt-2 border rounded-md" />
            <ErrorMessage name="cvv" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md">
              Previous
            </button>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentInfoForm;
