import { Menu, Search } from '@mui/icons-material';
import { useEffect } from 'react';
import './Topbar.scss';

interface Toggle {
  toggle: boolean;
  setToggle: (active: boolean) => void;
}

const Topbar = ({ toggle, setToggle }: Toggle) => {
  const handleClickToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="topbar w-full h-[60px] flex justify-between items-center">
      <div className="topbar__toggle relative px-[10px]" onClick={handleClickToggle}>
        <Menu style={{ width: 30, height: 30, cursor: 'pointer' }} />
      </div>

      <div className="search relative w-[400px] mx-[10px]">
        <label className="relative w-full">
          <input
            type="text"
            placeholder="Search here"
            className="w-full h-[40px] rounded-[40px] py-[5px] px-[20px] pl-[35px] outline-none border border-solid border-black9"
          />
          <div className="absolute top-2/4 -translate-y-2/4 left-3">
            <Search style={{ width: 20, height: 20, color: '#999' }} />
          </div>
        </label>
      </div>

      <div className="user relative w-10 h-10 rounded-[50%] overflow-hidden mr-4 cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Avatar"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Topbar;
