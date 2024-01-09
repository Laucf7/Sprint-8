import React, { createContext, useState } from 'react';

interface WeekData {
  week: number;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
}

interface ExpenseContextProps {
  totalWeekExpenses: number;
  weeklyExpensesGraphic: WeekData[];
  todayExpenses: number;
  percentageChange: number;
}

const ExpenseContext = createContext<ExpenseContextProps | undefined>(undefined);

const ExpenseProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const arrayWeeks: WeekData[] = [
    {
      week: 1,
      monday: 10,
      tuesday: 15,
      wednesday: 20,
      thursday: 18,
      friday: 25,
      saturday: 30,
      sunday: 22,
    },
    {
      week: 2,
      monday: 12,
      tuesday: 18,
      wednesday: 22,
      thursday: 20,
      friday: 28,
      saturday: 32,
      sunday: 25,
    },
    {
      week: 3,
      monday: 15,
      tuesday: 22,
      wednesday: 26,
      thursday: 24,
      friday: 30,
      saturday: 35,
      sunday: 28,
    },
  ];
  const [totalWeekExpenses, setTotalWeekExpenses] = useState<number>(0);
  const [weeklyExpensesGraphic, setWeeklyExpenses] = useState<WeekData[]>([]);
  const [todayExpenses, setTodayExpenses] = useState<number>(0);
  const [percentageChange, setPercentageChange] = useState<number>(0);

  return (
    <ExpenseContext.Provider
      value={{
        totalWeekExpenses,
        weeklyExpensesGraphic,
        todayExpenses,
        percentageChange,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export { ExpenseProvider, ExpenseContext };