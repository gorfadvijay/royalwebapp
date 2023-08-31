import React from 'react'

const Quality = () => {
  return (
    <div class="w-full mt-[8rem]">
        <div class="relative overflow-hidden scursor-pointer">
          <img
            class="object-cover w-full h-screen md:h-[70vh] "
            src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80"
            alt="Flower and sky"
          />

          <div class="absolute flex-col bg-black/70 w-full h-full top-0 flex justify-center items-center mx-auto  px-6 py-4">
            <h1 className="text-[#FFFFFF] text-center font-bold md:text-[48px] text-[24px] md:leading-[38px] leading-[28px] my-[3rem]">
              We Value Quality Over Quantity
            </h1>

            <div className="flex flex-col items-center justify-center mt-3">
              <h3 className="text-[#0088C1] font-bold text-[1]5px] leading-[25px] ">
                WIN-WIN WITH CLIENTS
              </h3>
              <p className="text-[#FFFFFF] font-medium text-[15px] leading-[25px] ">
                {" "}
                We shall finalize only such deals that promises growth to our
                clients.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
              <h3 className="text-[#0088C1] font-bold text-[1]5px] leading-[25px] ">
                PROVIDE CONTINUOUS UPDATES{" "}
              </h3>
              <p className="text-[#FFFFFF] font-medium text-[15px] leading-[25px] ">
                We shall work in such a network that helps our customers to
                solve their queries and also provide them continuous information
                of latest developments.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
              <h3 className="text-[#0088C1] font-bold text-[1]5px] leading-[25px] ">
                PROVIDE TRAINING FOR OPTIMUM UTILIZATION{" "}
              </h3>
              <p className="text-[#FFFFFF] font-medium text-[15px] leading-[25px] ">
                {" "}
                We shall provide all the required training to our clients which
                will not only help them to gain product's knowledge but also
                help them to make optimum utilization of the product purchased.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
              <h3 className="text-[#0088C1] font-bold text-[1]5px] leading-[25px] ">
                NO SHORT CUTS: NO OPERATOR SWITCHING
              </h3>
              <p className="text-[#FFFFFF] font-medium text-[15px] leading-[25px] ">
                For selling products to new clients, we shall never resort to
                short cuts like switching the operators from one client to
                another.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
              <h3 className="text-[#0088C1] font-bold text-[1]5px] leading-[25px] ">
                NO BRIBING
              </h3>
              <p className="text-[#FFFFFF] font-medium text-[15px] leading-[25px] ">
                {" "}
                We shall never entertain any bribing/commission to clients'
                officers or managers towards the accomplishment of any desired
                task.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
              <h3 className="text-[#0088C1] font-bold text-[1]5px] leading-[25px] ">
                CONSISTENT QUALITY IMPROVEMENT
              </h3>
              <p className="text-[#FFFFFF] font-medium text-[15px] leading-[25px] ">
                {" "}
                We shall always aim at continuous improvement in the quality
                with an intention of providing the best quality to it clients.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-3 md:pb-0 pb-[10rem]">
              <h3 className="text-[#0088C1] font-bold text-[1]5px] leading-[25px] ">
                IN-TIME DELIVERY{" "}
              </h3>
              <p className="text-[#FFFFFF] font-medium text-[15px] leading-[25px] ">
                {" "}
                Delivery of the ordered product shall always be provided in time
                as we not only value our own time but also of our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Quality