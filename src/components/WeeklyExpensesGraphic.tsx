import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext.tsx';

const WeeklyExpensesGraphic: React.FC = () => {
  const { weeklyExpenses } = useContext(ExpenseContext);

  return (
    <div>
      <h2>Weekly Expenses</h2>
      {/* Renderitza les dades setmanals */}
    </div>
  );
};

export default WeeklyExpensesGraphic;