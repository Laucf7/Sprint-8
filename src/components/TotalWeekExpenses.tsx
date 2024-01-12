import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext.tsx';
import { useTranslation } from 'react-i18next'

const TotalWeekExpenses = (): JSX.Element => {
  const { t } = useTranslation();
  const { totalWeekExpenses } = useContext(ExpenseContext);

  return (
    <div className='bg-cover bg-orange-500 card m-2 py-6 px-4 font-sans'>
      <h2 className='mx-left m-0 px-2 text-base text-slate-100'>{t('BalançTotal')} </h2>
      <div className='flex items-center justify-between'>
        <p className='mx-left m-0 px-2 text-3xl text-slate-50'>{totalWeekExpenses}€</p>
        <div>
        <button className='bg-transparent border border-orange-400 text-white text-xl mr-2'>←</button>
        <button className='bg-transparent border border-orange-400 text-white text-xl'>→</button>
        </div>
      </div>
    </div>
  );
};

export default TotalWeekExpenses;