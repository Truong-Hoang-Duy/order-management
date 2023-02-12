import { uuidv4 } from '@firebase/util';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Heading } from '../Heading';
import './Chart.scss';
import { percentageType } from './type';

const Chart = () => {
  const { pathname } = useLocation();
  const chartText =
    pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1);

  const data = [1, 2, 3, 4, 5, 6];
  const sum = data.reduce((a, b) => a + b, 0);
  const percentage: percentageType[] = [];
  data.forEach((item, index, array) => {
    percentage.push({
      id: uuidv4(),
      percent: Math.round((item / sum) * 100) + '%',
      name: array[index].toString(),
      classPercent: Math.round((item / sum) * 100).toString(),
    });
  });

  return (
    <>
      <Heading>Chart</Heading>
      <div className="wrapper w-full gap-4">
        {percentage.map((item) => (
          <div key={item.id} className="flex gap-4 w-full">
            <span className="text">
              {chartText === 'Customers'
                ? `${chartText} have ${item.name} orders`
                : `${chartText} manage ${item.name} orders`}
            </span>
            <div key={item.id} className={`percentage percentage-${item.classPercent}`}>
              <span>{item.percent}</span>
            </div>
          </div>
        ))}
      </div>
      <Typography
        variant="h5"
        sx={{
          margin: '10px 0',
          textAlign: 'center',
          fontWeight: '600',
          color: '#999',
        }}
      >
        Order quantity percentage chart
      </Typography>
    </>
  );
};

export default Chart;
