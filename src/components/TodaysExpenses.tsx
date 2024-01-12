import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext.tsx';
import { useTranslation } from 'react-i18next'

const TodaysExpenses: React.FC = () => {
  const { t } = useTranslation();
  const { todayExpenses } = useContext(ExpenseContext);

  return (
    <div>
      <h4 className='text-gray-400 mb-2'>{t('DespesesAvui')}</h4>
      <h2 className='mt-2'>{todayExpenses}€</h2>
    </div>
  );
};

export default TodaysExpenses;