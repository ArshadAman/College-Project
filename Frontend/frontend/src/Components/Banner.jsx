import React from "react";
function Banner(props) {
  return (
    <div className="image">
      {/* <img src={bann} alt="" className='h-[70vh] w-full' /> */}
      <video src={props.video} autoPlay={true} loop={true} muted={true} className="w-[100%] md:h-[600px] object-cover brightness-50"></video>
      <div className="search">
        <form action="" className="space-x-2 hidden md:block">
          <input
            type="text"
            placeholder={`Search by ${props.name} name`}
            size={60}
            className="px-8 py-[12px] outline-none absolute bottom-[50%] opacity-80 left-[31%] rounded"
          />
          <button className="bg-[#3e52c6] text-white px-8 py-[12px] outline-none absolute bottom-[50%] md:left-[67%] rounded backdrop-filter backdrop-blur-lg opacity-70">
            Search
          </button>
        </form>
        <form action="" className="space-x-2 md:hidden flex justify-center">
          <input
            type="text"
            placeholder={`Search by ${props.name} name`}
            size={30}
            className="px-2 py-[12px] outline-none absolute bottom-[70%] opacity-80  rounded"
          />
          <button className="bg-[#ffffff] px-8 py-[10px] outline-none absolute bottom-[62%] right-[35%] rounded backdrop-filter backdrop-blur-lg opacity-70">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Banner;
