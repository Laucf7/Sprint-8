import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { ExpenseContext } from '../context/ExpenseContext';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler);

const WeeklyExpensesGraphic: React.FC = () => {
  const { daysData } = useContext(ExpenseContext);
  const { expensesDayData } = useContext(ExpenseContext);

  const data = {
    labels: daysData,
    datasets: [
      {
        label: "Despeses",
        data: expensesDayData,
        backgroundColor: "rgba(234, 88, 12)",
        hoverBackgroundColor: "rgba(234, 88, 12, 0.5)",
        
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 40,
        grid: {
          display: false,
        },
        ticks: {
          maxTicksLimit: 4,
        }
      },
      x: {
        ticks: { color: 'rgba(234, 88, 12)' },
        grid: {
          display: false,
        }
      },
    },
  };

  return (
    <div className="flex justify-center items-center m-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default WeeklyExpensesGraphic;


// import { ExpenseContext } from '../context/ExpenseContext.tsx';
// import { useContext } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler);

// const WeeklyExpensesGraphic = (): JSX.Element => {
//   const { daysData } = useContext(ExpenseContext);
//   const { expensesDayData } = useContext(ExpenseContext);

//   const data = {
//     labels: daysData,
//     datasets: [
//       {
//         label: "Despeses",
//         data: expensesDayData,
//         backgroundColor: "rgba(234, 88, 12)",
//         hoverBackgroundColor: "rgba(234, 88, 12, 0.5)",
//         borderRadius: '4',
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       y: {
//         min: 0,
//         max: 40,
//         grid: {
//           display: false,
//         },
//         ticks: {
//           maxTicksLimit:4,
//         }
//       },
//       x: {
//         ticks: {color: 'rgba(234, 88, 12)'},
//         grid: {
//           display: false,
//         }
//       },
//     },
//   }

//   return (
//     <div className="flex justify-center items-center m-4">
//      <Bar data={data} options={options} />
//     </div>
//   );
// }

// export default WeeklyExpensesGraphic;