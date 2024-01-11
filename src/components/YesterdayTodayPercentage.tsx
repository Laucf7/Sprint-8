import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext.tsx';

const YesterdayTodayPercentage= (): JSX.Element => {
  const { percentageChange } = useContext(ExpenseContext);

  return (
    <div>
      <h3 className="mb-2">{ percentageChange.toFixed(2) }%</h3>
      <h4 className="mt-2">Respecte a ahir</h4>
    </div>
  );
};

export default YesterdayTodayPercentage;