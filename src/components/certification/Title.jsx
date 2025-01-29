import React from 'react';

function Banner({title}) {
  return (
    <div className='container mx-auto'>
       <section 
        className="w-full max-w-[1600px] mx-auto relative bg-[url('/images/Vector%20(1).svg')] bg-no-repeat  h-[200px] sm:h-[250px] lg:h-[306px] mt-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E368F] to-[#B2B6E0] opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[25px] sm:text-[50px] lg:text-[60px] font-[700] font_calibri text-white text-center">
            {title}
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Banner;
