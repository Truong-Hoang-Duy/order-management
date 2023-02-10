import {
  AcUnitOutlined,
  HomeOutlined,
  PersonOutline,
  ShoppingCartOutlined,
  BadgeOutlined,
  LockOutlined,
  LogoutOutlined,
} from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Topbar } from '../Topbar';
import './Sidebar.scss';

const Sidebar = () => {
  const { pathname } = useLocation();
  const activeSidebar = pathname.slice(1);
  const [toggleMenu, setToggleMenu] = useState(false);
  const sidebarData = [
    {
      id: 1,
      name: 'dashboard',
      icon: HomeOutlined,
    },
    {
      id: 2,
      name: 'customers',
      icon: PersonOutline,
    },
    {
      id: 3,
      name: 'orders',
      icon: ShoppingCartOutlined,
    },
    {
      id: 4,
      name: 'employee',
      icon: BadgeOutlined,
    },
    {
      id: 5,
      name: 'password',
      icon: LockOutlined,
    },
    {
      id: 6,
      name: 'sign out',
      icon: LogoutOutlined,
    },
  ];

  useEffect(() => {
    const list = document.querySelectorAll('.navigation li');
    const ul = document.querySelector('.navigation ul');
    list.forEach((item) => {
      item.classList.remove('active');
      if (item.getAttribute('data-active') === activeSidebar) {
        item.classList.add('active');
      }
    });

    function moveOutActive() {
      list.forEach((item) => {
        item.classList.remove('active');
        if (item.getAttribute('data-active') === activeSidebar) {
          item.classList.add('active');
        }
      });
    }

    function activeLink() {
      list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
      });
    }
    list.forEach((item) => item.addEventListener('mouseover', activeLink));
    ul?.addEventListener('mouseout', moveOutActive);
  }, []);

  return (
    <div className="relative w-full">
      <div
        className={clsx(
          'navigation fixed  h-full bg-blue border-l-8 border-blue overflow-hidden',
          !toggleMenu ? 'w-[300px]' : 'w-[80px]'
        )}
      >
        <ul className="absolute top-0 left-0 w-full overflow-hidden">
          <li className="relative w-full pl-4 mb-10 pointer-events-none overflow-hidden">
            <a
              href=""
              className="relative flex items-center w-full text-white hover:text-blue gap-5"
            >
              <span className="icon relative block h-[60px] leading-[60px]">
                <AcUnitOutlined style={{ width: 30, height: 30 }} />
              </span>
              {!toggleMenu && (
                <span
                  className={clsx(
                    'title relative block py-0 h-[60px] leading-[65px]',
                    toggleMenu ? 'w-0' : ''
                  )}
                >
                  Order management
                </span>
              )}
            </a>
          </li>

          {sidebarData.map((item) => (
            <li
              key={item.id}
              data-active={item.name}
              className="relative w-full hover:bg-white text-blue rounded-tl-[30px] rounded-bl-[30px] pl-4"
            >
              <a
                href={`/${item.name}`}
                className="relative flex items-center w-full text-white hover:text-blue gap-5"
              >
                <span className="icon relative block h-[60px] leading-[60px]">
                  <SvgIcon component={item.icon} style={{ width: 30, height: 30 }} />
                </span>
                {!toggleMenu && (
                  <span
                    className={clsx(
                      'title relative block py-0 h-[60px] leading-[65px]',
                      toggleMenu ? 'w-0' : ''
                    )}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={clsx(
          'main absolute min-h-screen bg-white',
          toggleMenu ? 'w-[calc(100%-80px)] left-[80px]' : 'w-[calc(100%-300px)] left-[300px]'
        )}
      >
        <Topbar toggle={toggleMenu} setToggle={setToggleMenu} />
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
