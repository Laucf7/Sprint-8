import React from 'react';
import WeeklyExpensesGraphic from './WeeklyExpensesGraphic.tsx';
import TodaysExpenses from './TodaysExpenses.tsx';
import YesterdayTodayPercentage from './YesterdayTodayPercentage.tsx';

const Card: React.FC = () => {

    return (
        <div className='bg-cover bg-stone-50 text-black card m-2 p-2'>
            <WeeklyExpensesGraphic />
            <TodaysExpenses />
            <YesterdayTodayPercentage />
        </div>
    );
};

export default Card;