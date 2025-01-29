'use client'
// import { useState } from "react";

// const Tooltip = ({ children, content }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative inline-block"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {children}
//       {isHovered && (
//         <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg w-max">
//           {content}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tooltip;


import { useState } from "react";

const Tooltip = ({ children, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 px-3 py-2 text-sm text-theme-main bg-white border border-grey-200 rounded shadow-lg w-max mr-2">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
