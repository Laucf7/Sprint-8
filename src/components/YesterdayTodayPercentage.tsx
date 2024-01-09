import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext.tsx';

const YesterdayTodayPercentage: React.FC = () => {
  const { percentageChange } = useContext(ExpenseContext);

  return (
    <div>
      <h2>Yesterday-Today Percentage</h2>
      {/* Renderitza el percentatge de variació entre ahir i avui */}
    </div>
  );
};

export default YesterdayTodayPercentage;