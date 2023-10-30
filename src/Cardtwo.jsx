
// import React, { useState, useEffect, useRef, useMemo } from 'react';
// import Chart from 'chart.js/auto';
// import annotationPlugin from 'chartjs-plugin-annotation';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
// //import jsonData from "./dailyreports.json";
// import GoogleMapReact from "google-map-react";
// import useSupercluster from "use-supercluster";
// import "./styles.css";
// import Popup from "reactjs-popup";
// import MapContainer from './map/MapContainer';
// import { dailyreports } from './dailyreports.js';
// const jsonData= await dailyreports();


// // setup map

// const MapPopup = ({ onClose }) => {
//   const [jsonDatamap, setJsonDatamap] = useState({});
//   useEffect(() => {

//     let points1 = require('./map.json');
//     let points = []
//     points1.SocialAuditInfoReportCanWiseDts.forEach((item, index) => {
//       let itemdata = { ...item, id: index, Latitude: parseFloat(item.Latitude), Longitude: parseFloat(item.Longitude) }
//       if (itemdata.Latitude !== 0 || itemdata.Longitude !== 0) {
//         points.push(itemdata);
//       }
//     });
//     setJsonDatamap(points);
//   }, [])

//   return (
//     <Popup open modal closeOnDocumentClick onClose={onClose}>
//       <div style={{ height: "80vh", width: "100%" }}>
//         <MapContainer jsonDatamap={jsonDatamap} />

//       </div>
//     </Popup>
//   );
// };

// export const Cardtwo = ({ sampleTaker }) => {
//   console.log("card two one");
//   const chartReference = useRef(null);
//   const [chartInstance, setChartInstance] = useState(null);

//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const handlePopupOpen = () => {
//     setIsPopupOpen(true);
//   };

//   const handlePopupClose = () => {
//     setIsPopupOpen(false);
//   };






//   useEffect(() => {

//     console.log("card two two");
//     // Register Chart.js plugins
//     Chart.register(annotationPlugin, ChartDataLabels);

//     if (chartInstance) {
//       // If a previous Chart instance exists, destroy it
//       chartInstance.destroy();
//     }

//     let r1 = 0;
//     let r2 = 0;
//     let r3 = 0;
//     let r4 = 0;
//     let r5 = 0;
//     let r6 = 0;

//     // Calculate obj1 and obj2 values from sampleTaker
//     const result = Array.isArray(jsonData.m_Item2)
//       ? jsonData.m_Item2.map((data) => {
//         // Increment the count based on FeedbackRefCode
//         if (data.FeedbackRefCode === "RES") {
//           r1++;
//         } else if (data.FeedbackRefCode === "MCC") {
//           r2++;
//         } else if (data.FeedbackRefCode === "RC") {
//           r3++;
//         } else if (data.FeedbackRefCode === "HSP") {
//           r4++;
//         } else if (data.FeedbackRefCode === "PA") {
//           r5++;
//         } else if (data.FeedbackRefCode === "TNKR") {
//           r6++;
//         }

//         // Return the FeedbackRefCode as data in the map function
//         return {
//           data: [data.FeedbackRefCode],
//         };
//       })
//       : [];

//     // let obj2 = {
//     //   // TotalReservoirs: obj1.TestedReservoirs + obj1.TestedMCCComplaints,
//     //   // TotalMCCComplaints: obj1.TestedRandomCans + obj1.TestedHospitals,

//     //   // Fill remaining values with 0
//     //   // Add other keys and their values here if required
//     // };

//     // Create the new Chart instance

//     const ctx = chartReference.current.getContext('2d');
//     const newChartInstance = new Chart(ctx, {
//       type: 'bar',
//       columnWidth: '50%',
//       data: {
//         labels: ['RES', 'MCC', 'TRC', 'HSP', 'TPRAC', 'TAN'],
//         datasets: [
//           {
//             label: 'Reservoirs',
//             backgroundColor: ['#67e0d6', '#FF4560', 'pink', '#d676c9', '#734896', '#89f5cd'],
//             borderColor: '#EBEBEB',
//             borderWidth: 1,
//             borderRadius: [0, 0, 0, 0, 0, 0],
//             data: [r1, r2, r3, r4, r5, r6],
//             datalabels: {
//               display: true,
//             },
//           },
//           // {
//           //   label: 'Reservoirs',
//           //   backgroundColor: ['#67e0d6'],
//           //   datalabels: {  
//           //     display: true,
//           //   },
//           // },
//           {
//             label: 'MCC Complints',
//             backgroundColor: ['#FF4560'],
//             datalabels: {
//               display: true,
//             },
//           },
//           {
//             label: 'Tested Random Cans',
//             backgroundColor: ['pink'],
//             // backgroundColor: ['#546E7A'],
//             datalabels: {
//               display: true,
//             },
//           },
//           {
//             label: 'Tested Hospitals',
//             backgroundColor: ['#d676c9'],
//             datalabels: {
//               display: true,
//             },
//           },
//           {
//             label: 'Tested Polluted Area CANS',
//             backgroundColor: ['#734896'],
//             datalabels: {
//               display: true,
//             },
//           },
//           {
//             label: 'Tankers',
//             backgroundColor: ['#89f5cd'],
//             datalabels: {
//               display: true,
//             },
//           },
//           // {
//           //   label: 'Total Count',
//           //   backgroundColor: '#DDD',
//           //   hoverBackgroundColor: '#DDD',
//           //   data: [
//           //     obj1.TotalReservoirs,
//           //     obj1.TotalMCCComplaints,
//           //     // 0, // Fill remaining values with 0
//           //     // 0,
//           //     // 0,
//           //     // 0,
//           //   ],
//           //   datalabels: {
//           //     display: true,
//           //   },
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
//             offsetX: -10,
//             offsetY: 0,
//             labels: {
//               usePointStyle: true,
//             }
//           },
//           title: {
//             display: true,
//             // text: 'Sample Taker Reports',
//             padding: {
//               top: 10,
//               right: 10,
//               bottom: 30,
//             },
//             weight: 'bold',
//             color: '#00325c',
//             font: {
//               size: 13,
//             },
//             // align: 'start',
//           },
//           tooltip: {
//             filter: (tooltipItem) => !tooltipItem.datasetIndex,
//           },
//           annotation: {
//             annotations: {},
//           },
//         },
//       },
//     });

//     // Save the new Chart instance in state
//     setChartInstance(newChartInstance);

//     // Clean up: unregister plugins on unmount
//     return () => {
//       if (chartInstance) {
//         chartInstance.destroy();
//       }
//       Chart.unregister(annotationPlugin, ChartDataLabels);
//     };
//   }, []);

//   return (
//     <div className='md-align-center-2'>
//       <article className="cardtwo">
//         {/* <div style={{marginBottom:"-25px",marginLeft:"10px",paddingTop:"10px", size:"13px"}}>Sample Taker daily Reports</div> */}

//         <div className="row">

//           <div className="col-8">
//             <div style={{ float: "left", paddingBottom: "-10px" }}>Sample Taker daily Reports</div>
//             <div style={{ float: "left", paddingBottom: "-10px" }}>Customer Name: Syed Irhad Hussain</div>
//           </div>
//           <div className="col-4">
//             <div style={{ float: "right", paddingRight: "15px", paddingBottom: "-10px" }}>
//               <img src={require('./images/sampledailytakermap.svg').default} className="location" alt="location" onClick={() => handlePopupOpen()} />
//               {isPopupOpen && <MapPopup onClose={handlePopupClose} />}
//             </div>
//           </div>
//         </div>
//         <canvas ref={chartReference} width={75} height={67} onClick={() => { console.log("hi") }} />
//         {/* </div> */}
//       </article>
//     </div>
//   );
// };














import React, { useState, useEffect, useRef,useContext } from 'react';
import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import "./styles.css";
import Popup from "reactjs-popup";
import MapContainer from './map/MapContainer';
import { DateContext } from './DateProvider';
import { getSelectedDate } from './dateUtils';
import { dailyreports } from './dailyreports.js';
import { map } from './map.js';

const jsonData = await dailyreports();
const points1 = await map();
const MapPopup = ({ onClose }) => {
  const [jsonDatamap, setJsonDatamap] = useState({});

  useEffect(() => {
   // let points1 = require('./map.json');
    console.log("points1",points1);
    let points = [];
    points1.SocialAuditInfoReportCanWiseDts.forEach((item, index) => {
      let itemdata = { ...item, id: index, Latitude: parseFloat(item.Latitude), Longitude: parseFloat(item.Longitude) }
      if (itemdata.Latitude !== 0 || itemdata.Longitude !== 0) {
        points.push(itemdata);
      }
    });
    setJsonDatamap(points);
  }, []);

  return (
    <Popup open modal closeOnDocumentClick onClose={onClose}>
      <div style={{ height: "80vh", width: "100%" }}>
        <MapContainer jsonDatamap={jsonDatamap} />
      </div>
    </Popup>
  );
};

export const Cardtwo = ({ sampleTaker }) => {
  //console.log("one");
  const chartReference = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const selectedDate = useContext(DateContext).selectedDate;
  var months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  var formattedDate = selectedDate.getDate() + "-" + months[selectedDate.getMonth()] + "-" + selectedDate.getFullYear();

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
   // console.log("two");
    const fetchData = async () => {
    //  console.log("three");
      const jsonData = await dailyreports(selectedDate);
    // Register Chart.js plugins
    Chart.register(annotationPlugin, ChartDataLabels);

    if (chartInstance) {
      // If a previous Chart instance exists, destroy it
      chartInstance.destroy();
    }

    let r1 = 0;
    let r2 = 0;
    let r3 = 0;
    let r4 = 0;
    let r5 = 0;
    let r6 = 0;

    // Calculate obj1 and obj2 values from sampleTaker
    const result = Array.isArray(jsonData.m_Item2)
      ? jsonData.m_Item2.map((data) => {
        // Increment the count based on FeedbackRefCode
        if (data.FeedbackRefCode === "RES") {
          r1++;
        } else if (data.FeedbackRefCode === "MCC") {
          r2++;
        } else if (data.FeedbackRefCode === "RC") {
          r3++;
        } else if (data.FeedbackRefCode === "HSP") {
          r4++;
        } else if (data.FeedbackRefCode === "PA") {
          r5++;
        } else if (data.FeedbackRefCode === "TNKR") {
          r6++;
        }

        // Return the FeedbackRefCode as data in the map function
        return {
          data: [data.FeedbackRefCode],
        };
      })
      : [];

    // Create the new Chart instance
    const ctx = chartReference.current.getContext('2d');
    const newChartInstance = new Chart(ctx, {
      
      type: 'bar',
      columnWidth: '50%',
      data: {
        labels: ['RES', 'MCC', 'TRC', 'HSP', 'TPRAC', 'TAN'],
        datasets: [
          {
            label: 'Reservoirs',
            backgroundColor: ['#67e0d6', '#FF4560', 'pink', '#d676c9', '#734896', '#89f5cd'],
            borderColor: '#EBEBEB',
            borderWidth: 1,
            borderRadius: [0, 0, 0, 0, 0, 0],
            data: [r1, r2, r3, r4, r5, r6],
            datalabels: {
              display: true,
            },
          },
          // {
          //   label: 'Reservoirs',
          //   backgroundColor: ['#67e0d6'],
          //   datalabels: {  
          //     display: true,
          //   },
          // },
          {
            label: 'MCC Complints',
            backgroundColor: ['#FF4560'],
            datalabels: {
              display: true,
            },
          },
          {
            label: 'Tested Random Cans',
            backgroundColor: ['pink'],
            // backgroundColor: ['#546E7A'],
            datalabels: {
              display: true,
            },
          },
          {
            label: 'Tested Hospitals',
            backgroundColor: ['#d676c9'],
            datalabels: {
              display: true,
            },
          },
          {
            label: 'Tested Polluted Area CANS',
            backgroundColor: ['#734896'],
            datalabels: {
              display: true,
            },
          },
          {
            label: 'Tankers',
            backgroundColor: ['#89f5cd'],
            datalabels: {
              display: true,
            },
          },
          // {
          //   label: 'Total Count',
          //   backgroundColor: '#DDD',
          //   hoverBackgroundColor: '#DDD',
          //   data: [
          //     obj1.TotalReservoirs,
          //     obj1.TotalMCCComplaints,
          //     // 0, // Fill remaining values with 0
          //     // 0,
          //     // 0,
          //     // 0,
          //   ],
          //   datalabels: {
          //     display: true,
          //   },
          // },
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
            offsetX: -10,
            offsetY: 0,
            labels: {
              usePointStyle: true,
            }
          },
          title: {
            display: true,
            // text: 'Sample Taker Reports',
            padding: {
              top: 10,
              right: 10,
              bottom: 30,
            },
            weight: 'bold',
            color: '#00325c',
            font: {
              size: 13,
            },
            // align: 'start',
          },
          tooltip: {
            filter: (tooltipItem) => !tooltipItem.datasetIndex,
          },
          annotation: {
            annotations: {},
          },
        },
      },
    });

    // Save the new Chart instance in state
    setChartInstance(newChartInstance);

    // Clean up: unregister plugins on unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
      Chart.unregister(annotationPlugin, ChartDataLabels);
    };
  };
 // console.log("four");
  fetchData();
  }, [selectedDate]); // Include selectedDate in the dependency array

  // ... (rest of your component code)

  return (
       <div className='md-align-center-2'>
      <article className="cardtwo">
        {/* <div style={{marginBottom:"-25px",marginLeft:"10px",paddingTop:"10px", size:"13px"}}>Sample Taker daily Reports</div> */}

        <div className="row">

          <div className="col-8">
            <div style={{ float: "left", paddingBottom: "-10px" }}>Sample Taker daily Reports</div>
            <div style={{ float: "left", paddingBottom: "-10px" }}>Customer Name: Syed Irhad Hussain</div>
          </div>
          <div className="col-4">
            <div style={{ float: "right", paddingRight: "15px", paddingBottom: "-10px" }}>
              <img src={require('./images/sampledailytakermap.svg').default} className="location" alt="location" onClick={() => handlePopupOpen()} />
              {isPopupOpen && <MapPopup onClose={handlePopupClose} />}
            </div>
          </div>
        </div>
        <canvas ref={chartReference} width={75} height={67} onClick={() => { console.log("hi") }} />
        {/* </div> */}
      </article>
    </div>
  );
};




 


