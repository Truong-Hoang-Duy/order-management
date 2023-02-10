import {
  CalendarMonthOutlined,
  LocalShippingOutlined,
  PaidOutlined,
  SellOutlined,
} from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
const DataView = [
  {
    id: 1,
    quantity: 20,
    name: 'Ready to shipping',
    icon: LocalShippingOutlined,
  },
  {
    id: 2,
    quantity: 80,
    name: 'Sales',
    icon: SellOutlined,
  },
  {
    id: 3,
    quantity: 63,
    name: 'Pengding sign offs',
    icon: CalendarMonthOutlined,
  },
  {
    id: 4,
    quantity: 2200,
    name: 'Paid invoices',
    icon: PaidOutlined,
  },
];

const CardBox = () => {
  return (
    <div className="cardBox relative w-full p-5 grid grid-cols-4 gap-5">
      {DataView.map((item, index) => (
        <div
          className="card relative bg-white shadow-card p-[30px] shadow-lg rounded-2xl flex justify-between items-center gap-1 cursor-pointer hover:bg-blue group"
          key={item.id}
        >
          <div className="">
            <div className="relative font-medium text-[40px] text-blue group-hover:text-white">
              {index === 3 ? `$${item.quantity}` : item.quantity}
            </div>
            <div className="text-black9 mt-1 group-hover:text-white">{item.name}</div>
          </div>
          <div className="text-black9 group-hover:text-white">
            <SvgIcon component={item.icon} style={{ width: 40, height: 40, color: 'inherit' }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBox;
