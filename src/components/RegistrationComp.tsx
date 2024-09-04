import React, { useState } from "react";
import UserForm from "./UserFormComp";
import PersonalInfoForm from "./PersonalInfoFormComp";
import PaymentInfoForm from "./PaymentInfoFormComp";
import { useNavigate } from "react-router-dom";

const RegistrationComp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    image: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitForm = () => {
    console.log('Form Submitted', formData);
    navigate('/otp')

  };

 const steps = [
  { label: "User Details", component: <UserForm nextStep={nextStep} setFormData={setFormData} formData={formData} /> },
  { label: "Personal Info", component: <PersonalInfoForm nextStep={nextStep} prevStep={prevStep} setFormData={setFormData} formData={formData} /> },
  { label: "Payment Info", component: <PaymentInfoForm prevStep={prevStep} setFormData={setFormData} formData={formData} submitForm={submitForm} /> },
];


  return (
    <div className="w-[80vw]  xxs:w-full xxs:flex    mt-10 md:w-[90vw] xxs:m-0  mx-auto">
      <div className="flex xxs:bg-blue-500 xxs:min-h-full p-4 xxs:flex-col items-center justify-between xxs:mb-0 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex-1">
            <div
              className={`relative flex items-center justify-center ${
                currentStep === index + 1
                  ? "text-white bg-blue-500"
                  : "text-gray-600 bg-gray-200"
              } w-10 h-10 rounded-full mx-auto`}
            >
              {index + 1}
            </div>
            <div className="mt-2 text-sm text-center font-medium">
              {step.label}
            </div>
            {/* {index < steps.length - 1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-5 w-20 h-1 bg-gray-200"></div>
            )} */}
          </div>
        ))}
      </div>

      <div className="p-4 border xxs:min-h-[100vh] rounded-lg flex items-center justify-between bg-white shadow-sm">
        {steps[currentStep - 1].component as React.ReactNode}
        <div className='w-[50%] h-full md:hidden sm:hidden xs:hidden xxs:hidden flex justify-center items-center' >
     <img src='https://www.parklanepracticeswindon.nhs.uk/wp-content/uploads/sites/557/2019/09/pt_info_pic_357510480.jpg' alt='user' className='w-1/2 h-1/2 object-cover' />
    </div>
      </div>

     
    </div>
  );
};

export default RegistrationComp;
