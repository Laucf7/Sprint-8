
import React from 'react';
import TotalWeekExpenses from './components/TotalWeekExpenses';
import Card from './components/Card.tsx';
import { ExpenseProvider } from './context/ExpenseContext.tsx';

const App: React.FC = () => {
  return (
    <ExpenseProvider>
      <div>
        <TotalWeekExpenses />
        <Card />
      </div>
    </ExpenseProvider>
  );
};

export default App