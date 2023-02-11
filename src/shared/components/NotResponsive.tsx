const NotResponsive = () => {
  return (
    <div className="not__responsive d-none h-screen flex items-center justify-center flex-col bg-black text-white">
      <div className="max-w-[1000px] mx-5 text-center flex items-center justify-center h-full">
        <h1 className="text-[30px] font-bold">
          The current page does not support responsive mobile & table yet
        </h1>
      </div>
    </div>
  );
};

export default NotResponsive;
