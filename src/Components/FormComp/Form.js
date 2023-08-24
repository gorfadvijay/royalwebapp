import InputType from "../../atoms/InputType";
import TextArea from "../../atoms/TextArea";
import React from "react";

function Form(props) {
  return (
      <div className="w-full md:px-0 px-10">
       

        <form
          className="text-[16px] w-full font-semibold leading-[30px] md:w-[1000px]"
         >
          <div className="grid  md:grid-cols-2 md:gap-5 gap-2 mt-5 w-full">
            <InputType
              name="question"
              type="text"
              placeholder="Your Name"
            
            />

         <div className="md:mt-0 mt-[20px]">   <InputType
              name="questions_comments"
              type="text"
              placeholder="Subject"
            
            /></div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-5 gap-2 mt-5 t">
            <InputType
              name="reviewername"
              type="text"
              placeholder="Your Email"
            
            />
            <div className="md:-mt-[19px] "> 
            <TextArea
            name="questions_explanation"
            
            placeholder="Questions Explanation"
          
          /></div>
            
          </div>

          <div className="grid md:grid-cols-2 md:gap-5 gap-2 mt-[20px] md:-mt-[46px]">
            <InputType
              name="reviewername"
              type="text"
              placeholder="Your Email"
            
            />
          
          </div>         

<div className="mt-5 mb-10">
  <input
    type="submit"
    className="cursor-pointer text-white bg-[#2F6DA3] flex justify-center items-center h-12 w-full text-center py-[2px] px-[5px] font-semibold text-[16px] leading-[22px]"
    value="SEND MESSAGE" 
  />
</div>

        </form>
      </div>
  );
}

export default Form;