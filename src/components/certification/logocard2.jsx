import React from 'react';

function Logocard2({ data }) {

  return (
    <div className='container mx-auto mb-20'>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 mt-8">
        {data?.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center mx-auto w-full max-w-[600px] h-auto sm:h-[300px] justify-center border border-gray-300 p-4   duration-300"
          >
            <img src={card.Image?.data?.attributes?.url} alt={card.title} className="object-contain mb-4 w-[250px] h-[150px]" />
            <h2 className="text-center text-[18px] sm:text-[20px] lg:text-[22px] font-[700] text-[#171F7C]">
              {card.title}
            </h2>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Logocard2;
