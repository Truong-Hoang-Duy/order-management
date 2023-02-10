import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center flex-col bg-black text-white">
      <div className="max-w-[1000px] m-auto my-0 text-center">
        <h1 className="text-[60px] font-bold mb-5">404 - Looks like you're lost.</h1>
        <p className="max-w-[800px] m-auto my-0 mb-10">
          Maybe this page used to exist or you just spelled something wrong. Chances are your
          spelled something wrong, so can you double check the URL?
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-block px-[30px] py-[15px] text-white rounded-lg cursor-pointer bg-gradient-to-tr from-button1 to-button2"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
