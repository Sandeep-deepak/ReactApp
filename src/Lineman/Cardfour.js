// import React, { useEffect, useState ,useRef} from "react";
// import "../styles.css";
// import { Line } from "react-chartjs-2";
// import Chart from 'chart.js/auto';
// import annotationPlugin from 'chartjs-plugin-annotation';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

// // Card component
// export const Cardfour = () => {
//      const chartReference = useRef(null);
//     const [chartInstance, setChartInstance] = useState(null);

// // const data = {
// //     labels: ["RES", "MCC", "TRC", "HSP", "TPRAC", "TAN"],
// //     datasets: [
// //       {
// //         label: "Linemen Data",
// //         data: [33, 53, 85, 41, 44, 65],
// //         fill: true,
// //         backgroundColor: "rgba(75,192,192,0.2)",
// //         borderColor: "rgba(75,192,192,1)"
// //       },
// //       {
// //         label: "Second dataset",
  
// //         data: [33, 25],
// //         fill: true,
// //         borderColor: "#742774"
// //       }
// //     ]
// //   };

// //   useEffect(() => {
// //     // Initialize the annotation plugin
// //     Chart.plugins.register(annotationPlugin);
// //   }, []);


  

  

//   useEffect(() => {
//     // Register Chart.js plugins
//     Chart.register(annotationPlugin, ChartDataLabels);

//     if (chartInstance) {
//       // If a previous Chart instance exists, destroy it
//       chartInstance.destroy();
//     }

   
    

//     // Rest of your code...

//     // Create the new Chart instance
//     const ctx = chartReference.current.getContext('2d');
//     const newChartInstance = new Chart(ctx, {     

//       type: 'line',
//       columnWidth: '50%',
//       data: {
//         labels: ['RES', 'MCC', 'TRC', 'HSP', 'TPRAC', 'TAN'],
//         datasets: [

//             {
//                 label: "Linemen Data",
//                 data: [33, 53, 85, 41, 44, 65],
//                 fill: true,
//                 backgroundColor: "rgba(75,192,192,0.2)",
//                 borderColor: "rgba(75,192,192,1)"
//               },
//               {
//                 label: "Second dataset",
          
//                 data: [33, 25],
//                 fill: true,
//                 borderColor: "#742774"
//               },
          
           
      
//         ], 
//       },

//       options: {
           
//               scales: {
//                 x: {
//                   stacked: true,
//                   grid: {
//                     display: false,
//                   },
//                 },
//                 y: {
//                   ticks: {
//                     precision: 0,
//                     display: true,
//                   },
//                   grid: {
//                     drawTicks: true,
//                   },
//                 },
//               },
//               legend: {
//                 display: true,
//                 position: 'bottom'
//               },
//             },
           
            
       

//         // plugins: {
//         //   legend: {
//         //     display: false,
//         //     position: 'bottom',
//         //     offsetX: -10,
//         //     offsetY: 0,
//         //     labels: {
//         //       usePointStyle: true,
//         //     }
//         //   },
//         // //   title: {
//         // //     display: true,
//         // //     // text: 'Sample Taker Reports',
//         // //     padding: {
//         // //       top: 10,
//         // //       right: 10,
//         // //       bottom: 30,
//         // //     },
//         // //     weight: 'bold',
//         // //     color: '#00325c',
//         // //     font: {
//         // //       size: 5,
//         // //     },
//         // //     // align: 'start',
//         // //   },
//         // //   tooltip: {
//         // //     filter: (tooltipItem) => !tooltipItem.datasetIndex,
//         // //   },
//         // //   datalabels: {
//         // //     display: true,
//         // //     color: 'black',
//         // //     anchor: 'end',

//         // //     align: graphType === 'vertical' ? 'top' : 'right',
            
//         // //     offset: graphType === 'vertical' ? 4 : -2,  
//         // //    // offsetX: graphType === 'vertical' ? 12 : -2,
//         // //     paddingRight: '12px',
//         // //     // offsetY: graphType ==='vertical' ? 10 : -12,

//         // //     formatter: function (value) {
//         // //       return '\n' + value;
//         // //     },
//         // //   },
//         //   annotation: {
//         //     annotations: {},
//         //   },
//         // },
  

  
//       // Rest of your code...
//     });

//     // Save the new Chart instance in state
//     setChartInstance(newChartInstance);
//     return () => {
//       if (chartInstance) {
//         chartInstance.destroy();
//       }
//       Chart.unregister(annotationPlugin, ChartDataLabels);
//     };

//     // Rest of your code...
//   }, []);

//   return (
//     <div className='md-align-center-2'>
//         <div className="cardthree" >
//             {/* <div  style={{ width: "400px", height: "600px" }}> */}
//             {/* <Line data={data} plugins={['annotation', 'datalabels']}   /> */}
//             <canvas className="my-canvas" ref={chartReference} width={70} height={53}   />
//             </div>
//         {/* </div>     */}
//     </div>
//   );
// };









// import React, { useEffect, useState ,useRef} from "react";
// import "../styles.css";
// import { Line } from "react-chartjs-2";
// import Chart from 'chart.js/auto';
// import annotationPlugin from 'chartjs-plugin-annotation';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

// // ... (import statements and other code above)

// // Card component
// export const Cardfour = () => {
//   const chartReference = useRef(null);
//   const [chartInstance, setChartInstance] = useState(null);

//   useEffect(() => {
//     // Register Chart.js plugins
//     Chart.register(annotationPlugin, ChartDataLabels);

//     if (chartInstance) {
//       // If a previous Chart instance exists, destroy it
//       chartInstance.destroy();
//     }

//     // Create the new Chart instance
//     const ctx = chartReference.current.getContext('2d');
//     const newChartInstance = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: ['TNLM', 'TSC', 'TC', 'NLUNA', 'NCC', 'NCT'],
//         datasets: [
//           {
//             label: "Linemen Data",
//             data: [],
//             fill: true,
//             backgroundColor: "rgba(75,192,192,0.2)",
//             borderColor: "rgba(75,192,192,1)",
//           },
//           // {
//           //   label: "Second dataset",
//           //   data: [33, 25],
//           //   fill: true,
//           //   borderColor: "#742774",
//           // },
//         ],
//       },
//       options: {
//         scales: {
//           x: {
//             stacked: true,
//             grid: {
//               display: false,
//             },
//           },
//           y: {
//             ticks: {
//               precision: 0,
//               display: true,
//             },
//             grid: {
//               drawTicks: true,
//             },
//           },
//         },
//         plugins: {
//           legend: {
//             display: true,
//             position: 'bottom',
//             labels: {
//               usePointStyle: true,
//             }
//           },
//           datalabels: {
//             color: 'black',
//             anchor: 'end',
//             align: 'top', // Align the labels at the top of the data point
//             offset: 4, // Distance between the label and the data point
//             borderRadius: 50, // Make the label shape circular
//             formatter: function (value) {
//               return value; // Display the data point value as the label
//             },
           
//           },
//         },
//       },
//     });

//     // Save the new Chart instance in state
//     setChartInstance(newChartInstance);

//     // Clean up
//     return () => {
//       if (chartInstance) {
//         chartInstance.destroy();
//       }
//       Chart.unregister(annotationPlugin, ChartDataLabels);
//     };
//   }, []);

//   return (
//     <div className='md-align-center-2'>
//       <div className="cardthree">
//         <canvas className="my-canvas" ref={chartReference} width={70} height={53} />
//       </div>
//     </div>
//   );
// };



import React, { useEffect, useState, useRef } from "react";
import "../styles.css";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import jsonData from "../linegraph.json"; // Assuming your JSON data is in linegraph.json

export const Cardfour = () => {
  const chartReference = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    Chart.register(annotationPlugin, ChartDataLabels);

    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = chartReference.current.getContext('2d');
    const newChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['TNLM', 'TSC', 'TC', 'NLUNA', 'NCC', 'NCT'],
        datasets: [
          {
            label: "Total Number Of Line Mans",
            // data: [],
            fill: true,
             backgroundColor: "rgba(75,192,192,0.2)",
            // borderColor: "rgba(75,192,192,1)",
            
          },

          {
            label: 'Total Supply Cycles',
            backgroundColor: ['#FF4560'],
            datalabels: {
              display: true,
            },
          },
          {
            label: 'Total Cans',
            backgroundColor: ['pink'],
            // backgroundColor: ['#546E7A'],
            datalabels: {
              display: true,
            },
          },
          {
            label: 'Number of Lineman Using Naanytha App',
            backgroundColor: ['#d676c9'],
            datalabels: {
              display: true,
            },
          },
          {
            label: 'Number of Cycles Covered',
            backgroundColor: ['#734896'],
            datalabels: {
              display: true,
            },
          },
          {
            label: 'Number of CANs Tested',
            backgroundColor: ['#89f5cd'],
            datalabels: {
              display: true,
            },
          },



        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              precision: 0,
              display: true,
            },
            grid: {
              drawTicks: true,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
            }
          },
          datalabels: {
            color: 'black',
            anchor: 'end',
            align: 'top',
            offset: -3,
            borderRadius: 50,
            formatter: function (value) {
              return value;
            },
          },
        },
      },
    });

    const totalCounts = {
      TotalNumberOfLineMans: 0,
      TotalSupplyCycles: 0,
      TotalCans: 0,
      NumberofLinemanUsingNaanythaApp: 0,
      NumberofCyclesCovered: 0,
      NumberofCANsTested: 0,
    };

    jsonData.m_Item2.forEach(item => {
      totalCounts.TotalNumberOfLineMans += item.TotalNumberOfLineMans;
      totalCounts.TotalSupplyCycles += item.TotalSupplyCycles;
      totalCounts.TotalCans += item.TotalCans;
      totalCounts.NumberofLinemanUsingNaanythaApp += item.NumberofLinemanUsingNaanythaApp;
      totalCounts.NumberofCyclesCovered += item.NumberofCyclesCovered;
      totalCounts.NumberofCANsTested += item.NumberofCANsTested;
    });

    newChartInstance.data.datasets[0].data = Object.values(totalCounts);
    newChartInstance.update();

    setChartInstance(newChartInstance);

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
      Chart.unregister(annotationPlugin, ChartDataLabels);
    };
  }, []);

  return (
    <div className='md-align-center-2'>
      <div className="cardthree">
        <canvas className="my-canvas" ref={chartReference} width={72} height={71} />
      </div>
    </div>
  );
};
