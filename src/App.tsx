import React, { Suspense } from 'react';
import TotalWeekExpenses from './components/TotalWeekExpenses';
import Card from './components/Card.tsx';
import { ExpenseProvider } from './context/ExpenseContext.tsx';
import Languages from './components/Languages.tsx';

const App: React.FC = () => {
  
  return (
    <ExpenseProvider>
      <div>
        <Languages />
        <TotalWeekExpenses />
        <Card />
      </div>
    </ExpenseProvider>
  );
};

export default function WrappedApp() {
  return (
    <Suspense fallback='...loading'>
      <App />
    </Suspense>
  )
}