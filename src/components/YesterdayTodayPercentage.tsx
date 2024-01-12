import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext.tsx';
import { useTranslation } from 'react-i18next'

const YesterdayTodayPercentage= (): JSX.Element => {
  const { t } = useTranslation();
  const { percentageChange } = useContext(ExpenseContext);

  return (
    <div>
      <h3 className="mb-2">{ percentageChange.toFixed(2) }%</h3>
      <h4 className="mt-2">{t('RespecteAhir')}</h4>
    </div>
  );
};

export default YesterdayTodayPercentage;