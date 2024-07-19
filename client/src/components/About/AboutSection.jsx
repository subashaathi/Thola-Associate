import React from 'react';

function AboutSection() {
  return (
    <div className="py-10 my-10 md:py-10 md:my-10 lg:py-30 lg:my-30">
      <div className="flex items-center justify-center">
        <span class="relative text-5xl font-bold text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">About Us</span>
      </div>

      <div className="flex flex-col items-center mx-10 px-10 py-5 md:mx-20 md:px-20 lg:mx-30 lg:px-30">
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, pariatur aspernatur. Sint, a soluta fuga quae atque itaque aspernatur ut nihil laborum, maiores praesentium blanditiis, iste repellat quia corrupti ipsum molestiae. Quidem quas non doloribus maxime id aut maiores earum.
        </p>
        <ul className="py-5 list-disc">

          <div class=" rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="#0EA5E9" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga debitis, deleniti magnam saepe nulla doloribus velit tempore est quos voluptate, excepturi nihil nemo amet. Laboriosam rerum, optio sequi, incidunt itaque similique esse velit veritatis at sit dicta vel ex?</span>
        </div>
           
         
        <div class=" rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="#0EA5E9" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga debitis, deleniti magnam saepe nulla doloribus velit tempore est quos voluptate, excepturi nihil nemo amet. Laboriosam rerum, optio sequi, incidunt itaque similique esse velit veritatis at sit dicta vel ex?</span>
        </div>
           
        <div class=" rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="#0EA5E9" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span class="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga debitis, deleniti magnam saepe nulla doloribus velit tempore est quos voluptate, excepturi nihil nemo amet. Laboriosam rerum, optio sequi, incidunt itaque similique esse velit veritatis at sit dicta vel ex?</span>
        </div>
           
        </ul>
        <p className="font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque sapiente itaque earum magnam dicta adipisci veritatis, autem sed vero est vel quo sequi ex iste ipsa quidem atque sint, quam laudantium, omnis tempora quia iusto? Voluptates, reiciendis. Expedita, veritatis magni.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;