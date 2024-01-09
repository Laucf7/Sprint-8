import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext.tsx'; 

const TotalWeekExpenses: React.FC = () => {
  const { totalWeekExpenses } = useContext(ExpenseContext);

  return (
    <div className='bg-cover bg-orange-500 card m-2 p-2'>
      <h2 className='mx-left m-0 px-2 text-base text-slate-100'>Balanç total</h2>
      <p className='mx-left m-0 px-2 text-xl text-slate-50'>{totalWeekExpenses}€</p>
    </div>
  );
};

export default TotalWeekExpenses;