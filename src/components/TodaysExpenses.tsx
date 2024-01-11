import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext.tsx';

const TodaysExpenses: React.FC = () => {
  const { todayExpenses } = useContext(ExpenseContext);

  return (
    <div>
      <h4 className='text-gray-400 mb-2'>Despeses d'avui</h4>
      <h2 className='mt-2'>{todayExpenses}€</h2>
    </div>
  );
};

export default TodaysExpenses;