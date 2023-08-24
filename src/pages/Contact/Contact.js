import Form from "@/Components/FormComp/Form";
import React from "react";

const Contact = () => {
  return (
    <div>
      {" "}
      <div class="w-full relative ">
        <div class="flex  flex-wrap lg:flex-row   relative  md:mt-[8rem] md:gap-14">
          <div className="md:flex hidden  justify-center items-center rounded-r-full  bg-[#2F6DA3] b work  md:w-[390px] h-[140px] w-full sm:w-full "></div>
          <div className="md:flex md:flex-row flex-col md:mt-0 mt-[2rem]    justify-center md:text-start items-start   text-primary relative">
            <div className="flex flex-col uppercase px-4 md:px-0 ">
              <div>
                {" "}
                <h1 className="md:text-[84px] text-blue  text-[30px] leading-[35px] font-bold  md:leading-[75px]">
                  GET IN
                </h1>
              </div>
              <div className="">
                {" "}
                <h1 className="text-[#1A1A1A] md:text-[84px] text-[30px] leading-[35px] font-bold  md:leading-[75px] ">
                  TOUCH
                </h1>
              </div>
            </div>
            <div className="md:ml-[5rem]">
              <p className="px-4 md:px-0 text-[#404040] font-normal text-[21px] md:w-[800px] leading-[40px]">
                You can use the form below to get in touch with LEXUS for any
                questions or comments. Please select the correct choices and
                your message will automatically be routed to the correct person.
              </p>
            </div>
          </div>
        </div>
     
        <div>

        
  
    </div>

      </div>
      <div className="mt-[3rem] w-full md:max-w-[900px] flex flex-col justify-center items-center mx-auto ">
       <Form/></div>  
    </div>
  );
};

export default Contact;
