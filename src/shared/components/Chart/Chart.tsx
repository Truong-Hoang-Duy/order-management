import { uuidv4 } from '@firebase/util';
import { Typography } from '@mui/material';
import { Heading } from '../Heading';
import './Chart.scss';

interface percentageType {
  id: string;
  percent: string;
  name: string;
  classPercent: string;
}

const Chart = () => {
  const data = [1, 2, 3];
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
          <div className="flex gap-4 w-full">
            <span className="text">{`Customers have ${item.name} orders`}</span>
            <div key={item.id} className={`percentage percentage-${item.classPercent}`}>
              <span>{item.percent}</span>
            </div>
          </div>
        ))}
      </div>
      <Typography></Typography>
    </>
  );
};

export default Chart;
