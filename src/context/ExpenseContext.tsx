import React, { createContext, useState } from 'react';
import { useTranslation } from 'react-i18next'


interface WeekData {
  [key: string]: number;
  Monday: number;
  Tuesday: number;
  Wednesday: number;
  Thursday: number;
  Friday: number;
  Saturday: number;
  Sunday: number;
}

interface ExpenseContextProps {
  totalWeekExpenses: number;
  daysData: string[];
  expensesDayData: number[];
  todayExpenses: number;
  percentageChange: number;
  changeWeek: (direction: 'previous' | 'next') => void;
}

const ExpenseContext = createContext<ExpenseContextProps>({
  totalWeekExpenses: 0,
  daysData: [],
  expensesDayData: [],
  todayExpenses: 0,
  percentageChange: 0,
  changeWeek: () => {},
});

const ExpenseProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation();
  const arrayWeeks: WeekData[] = [
    {
      Monday: 10,
      Tuesday: 15,
      Wednesday: 20,
      Thursday: 18,
      Friday: 25,
      Saturday: 30,
      Sunday: 22,
    },
    {
      Monday: 12,
      Tuesday: 18,
      Wednesday: 22,
      Thursday: 20,
      Friday: 28,
      Saturday: 32,
      Sunday: 25,
    },
    {
      Monday: 15,
      Tuesday: 22,
      Wednesday: 36,
      Thursday: 24,
      Friday: 30,
      Saturday: 35,
      Sunday: 28,
    },
  ];

  const [currentWeekIndex, setCurrentWeekIndex] = useState<number>(arrayWeeks.length - 1);

  const changeWeek = (direction: 'previous' | 'next') => {
    if (direction === 'previous') {
      setCurrentWeekIndex((prevIndex) => Math.max(0, prevIndex - 1));
    } else if (direction === 'next') {
      setCurrentWeekIndex((prevIndex) => Math.min(arrayWeeks.length - 1, prevIndex + 1));
    }
  };

  const totalWeekExpenses = Object.values(arrayWeeks[currentWeekIndex]).reduce((acc, value) => acc + value, 0);

  const daysData = Object.keys(arrayWeeks[currentWeekIndex]).map(day => t(`days.${day}`));
  const expensesDayData = Object.values(arrayWeeks[currentWeekIndex]);
  

  let actualDay = new Date().getDay() -1;
  actualDay = actualDay === -1 ? 6 : actualDay;
  const todayExpenses = arrayWeeks[currentWeekIndex][Object.keys(arrayWeeks[currentWeekIndex])[actualDay]];
 
  const previousDay = actualDay - 1 < 0 ? 6 : actualDay - 1;
  const yesterdayExpenses = arrayWeeks[currentWeekIndex][Object.keys(arrayWeeks[currentWeekIndex])[previousDay]];
  
  const percentageChange = ((todayExpenses - yesterdayExpenses)/yesterdayExpenses)*100
  

  return (
    <ExpenseContext.Provider
      value={{
        totalWeekExpenses,
        daysData,
        expensesDayData,
        todayExpenses,
        percentageChange,
        changeWeek,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export { ExpenseProvider, ExpenseContext };