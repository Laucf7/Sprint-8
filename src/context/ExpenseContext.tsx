import React, { createContext } from 'react';

interface WeekData {
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
  // todayExpenses: number;
  // percentageChange: number;
}

const ExpenseContext = createContext<ExpenseContextProps>({
  totalWeekExpenses: 0,
  daysData: [],
  expensesDayData: [],
  // todayExpenses: 0,
  // percentageChange: 0,
});

const ExpenseProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
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
      Wednesday: 26,
      Thursday: 24,
      Friday: 30,
      Saturday: 35,
      Sunday: 28,
    },
  ];
  //agafem l'ultima setmana del array, per sempre tenir la info de la setmana més recent
  const totalWeekExpenses = arrayWeeks.length > 0
  ? Object.values(arrayWeeks[arrayWeeks.length - 1]).reduce((acc, value) => acc + value, 0)
  : 0;

  const daysData = Object.keys(arrayWeeks[arrayWeeks.length - 1]);
  const expensesDayData = Object.values(arrayWeeks[arrayWeeks.length - 1]);
  
  // const [todayExpenses, setTodayExpenses] = useState<number>(0);
  // const [percentageChange, setPercentageChange] = useState<number>(0);

  return (
    <ExpenseContext.Provider
      value={{
        totalWeekExpenses,
        daysData,
        expensesDayData,
        // todayExpenses,
        // percentageChange,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export { ExpenseProvider, ExpenseContext };