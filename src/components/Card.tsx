import React from 'react';
import WeeklyExpensesGraphic from './WeeklyExpensesGraphic.tsx';
import TodaysExpenses from './TodaysExpenses.tsx';
import YesterdayTodayPercentage from './YesterdayTodayPercentage.tsx';

const Card: React.FC = () => {

    return (
        <div className='bg-cover bg-stone-50 card m-2 p-5'>
            <WeeklyExpensesGraphic />
            <TodaysExpenses />
            <YesterdayTodayPercentage />
        </div>
    );
};

export default Card;