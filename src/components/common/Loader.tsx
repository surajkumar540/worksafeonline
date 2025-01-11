import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex flex-col justify-center gap-5 font-semibold items-center text-3xl">
      <div className="h-16 w-16 border-4 border-t-4 border-primary animate-spin"></div>
      <p className="text-center text-primary">
        <span>Please Wait</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </p>
      <style jsx>{`
        @keyframes dots {
          0%,
          20% {
            opacity: 1;
          }
          30%,
          50% {
            opacity: 0;
          }
          60%,
          80% {
            opacity: 0;
          }
        }
        .dot:nth-child(1) {
          animation: dots 1s infinite;
          animation-delay: 0s;
        }
        .dot:nth-child(2) {
          animation: dots 1s infinite;
          animation-delay: 0.3s;
        }
        .dot:nth-child(3) {
          animation: dots 1s infinite;
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default Loader;
