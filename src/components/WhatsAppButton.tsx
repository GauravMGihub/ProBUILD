// import React from 'react';

// const WhatsAppButton: React.FC = () => {
//   // 1. CONFIGURATION
//   // Enter your number with country code, NO spaces, NO dashes, NO plus sign.
//   // Example: 919876543210 (for India +91)
//   const phoneNumber = "919822959007";
 

//   // Create the WhatsApp Link
//   const whatsappUrl = `https://wa.me/${phoneNumber}?}`;

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-8 left-8 z-50 flex items-center group"
//       aria-label="Chat on WhatsApp"
//     >
//       {/* 2. THE BUTTON (Green Circle) */}
//       <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 hover:shadow-green-500/50 transition-all duration-300">
        
//         {/* Pulsing Ring Animation (Optional, makes it attention grabbing) */}
//         {/* <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div> */}

//         {/* Custom WhatsApp SVG Icon */}
//         <svg
//           viewBox="0 0 24 24"
//           width="32"
//           height="32"
//           fill="white"
//           className="relative z-10"
//         >
//           <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.694c1.003.545 1.987.835 3.018.835 3.183 0 5.768-2.586 5.769-5.766.001-3.181-2.585-5.767-5.766-5.767zm0 10.662c-.922 0-1.896-.285-2.731-.837l-1.921.503.513-1.876c-.596-.921-.892-1.93-.892-3.003-.001-2.678 2.179-4.858 4.862-4.858 2.682 0 4.861 2.179 4.861 4.858 0 2.679-2.179 4.86-4.86 4.86l-.168.045z"/>
//           <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20.2C8.36 20.2 5.2 17.79 4.22 14.47L3 18L6.77 17.01C8.26 18.03 10.07 18.63 12 18.63C15.66 18.63 18.63 15.66 18.63 12C18.63 8.34 15.66 5.37 12 5.37C8.34 5.37 5.37 8.34 5.37 12C5.37 13.51 5.88 14.9 6.74 16.02L12 20.2Z" fill="none"/>
//           {/* Simplified Path for reliable rendering */}
//           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
//         </svg>
//       </div>

//       {/* 3. POP-UP TEXT (Visible on Hover) */}
//       <span className="ml-3 bg-white text-slate-800 px-3 py-1.5 rounded-lg shadow-md border border-slate-100 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
//         Chat with us
//       </span>

//     </a>
//   );
// };

// export default WhatsAppButton;

import React from 'react';

const WhatsAppButton: React.FC = () => {
  // 1. CONFIGURATION
  const phoneNumber = "919822959007"; // Your number (e.g., 919876543210)
 
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 flex items-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* 2. BUTTON CONTAINER */}
      <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg shadow-green-900/20 hover:scale-110 hover:shadow-green-500/40 transition-all duration-300 border border-slate-100">
        
        {/* Pulsing Ring (Optional - makes it look alive) */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-ping group-hover:opacity-100"></div>

        {/* 3. OFFICIAL LOGO IMAGE */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* 4. HOVER TEXT */}
      <div className="ml-4 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl border border-slate-100 text-sm font-bold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap hidden md:block">
        Chat with us
        {/* Little triangle arrow pointing left */}
        <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-white transform rotate-45 border-l border-b border-slate-100"></div>
      </div>

    </a>
  );
};

export default WhatsAppButton;