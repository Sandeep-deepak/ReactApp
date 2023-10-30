import React, { useState, useEffect, useRef,useContext } from 'react';
import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Popup from "reactjs-popup";
 
import { DateContext } from './DateProvider';
import { sampletakerreport } from './SampleTakerReport.js';

const sampleTaker = await sampletakerreport();

export const Cardone = () => {
  const chartReference = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(68);

  const [popupOpen, setPopupOpen] = useState(false);
  const [graphType, setGraphType] = useState('vertical'); // Initialize with 'vertical'
  const selectedDate = useContext(DateContext).selectedDate;
  //console.log("card one selected date",selectedDate);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const switchToVertical = () => {
    setGraphType('vertical');
  };

  const switchToHorizontal = () => {
    setGraphType('horizontal');
  };

  const handleResize = () => {
    // setElementWidth(window.innerWidth);
  //  console.log("innerwidth", window.innerWidth)
    if (window.innerWidth <= 1024)
      setHeight(73)
    else
      setHeight(68);


  };

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const obj1 = {
    TestedReservoirs: 0,
    TestedMCCComplaints: 0,
    TestedRandomCans: 0,
    TestedHospitals: 0,
    TestedPollutedAreaCans: 0,
    TestedTankers: 0,
    TotalReservoirs: 0,
    TotalMCCComplaints: 0,
  };

  sampleTaker.forEach((data) => {
    obj1.TestedReservoirs += data.TestedReservoirs;
    obj1.TestedMCCComplaints += data.TestedMCCComplaints + 1;
    obj1.TestedRandomCans += data.TestedRandomCans;
    obj1.TestedHospitals += data.TestedHospitals;
    obj1.TestedPollutedAreaCans += data.TestedPollutedAreaCans;
    obj1.TestedTankers += data.TestedTankers + 1;
    obj1.TotalReservoirs += data.TotalReservoirs;
    obj1.TotalMCCComplaints += data.TotalMCCComplaints;
  });

  const categories = [
    'MCC Complints',
    'Tested Random Cans',
    'Tested Hospitals',
    'Tested Polluted Area CANS',
    'Tankers',
  ];

  // Calculate total for the "Done" column
  let totalDone = 0;

  for (const key in obj1) {
    if (key !== 'TotalReservoirs' && key !== 'TotalMCCComplaints') {
      totalDone += obj1[key];
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const sampleTaker = await sampletakerreport();

      Chart.register(annotationPlugin, ChartDataLabels);

      if (chartInstance) {
        chartInstance.destroy(); // Destroy the existing Chart instance
      }

    // Calculate obj1 and obj2 values from sampleTaker
    let obj1 = {
      TestedReservoirs: 0,
      TestedMCCComplaints: 0,
      TestedRandomCans: 0,
      TestedHospitals: 0,
      TestedPollutedAreaCans: 0,
      TestedTankers: 0,
      TotalReservoirs: 0,
      TotalMCCComplaints: 0

    };

    sampleTaker.forEach((data) => {
      obj1.TestedReservoirs += data.TestedReservoirs;
      obj1.TestedMCCComplaints += data.TestedMCCComplaints + 1;
      obj1.TestedRandomCans += data.TestedRandomCans;
      obj1.TestedHospitals += data.TestedHospitals;
      obj1.TestedPollutedAreaCans += data.TestedPollutedAreaCans;
      obj1.TestedTankers += data.TestedTankers + 1;
      obj1.TotalReservoirs += data.TotalReservoirs;
      obj1.TotalMCCComplaints += data.TotalMCCComplaints;
    });

    // Rest of your code...

    // Create the new Chart instance
    const ctx = chartReference.current.getContext('2d');
    if (chartInstance) {
      chartInstance.destroy(); // Destroy the existing Chart instance
    }
    const newChartInstance = new Chart(ctx, {
      type: graphType === 'vertical' ? 'bar' : 'horizontalBar', // Change type based on graphType

      type: 'bar',
      columnWidth: '50%',
      data: {
        labels: ['RES', 'MCC', 'TRC', 'HSP', 'TPRAC', 'TAN'],
        datasets: [
          {
            label: 'Reservoirs',
            backgroundColor: ['#67e0d6', '#FF4560', '#546E7A', '#d676c9', '#734896', '#89f5cd'],
            borderColor: '#EBEBEB',
            borderWidth: 1,
            borderRadius: [0, 0, 0, 0, 0, 0],
            data: [
              obj1.TestedReservoirs,
              obj1.TestedMCCComplaints,
              obj1.TestedRandomCans,
              obj1.TestedHospitals,
              obj1.TestedPollutedAreaCans,
              obj1.TestedTankers,
            ],
          },
          {
            label: 'MCC Complints',
            backgroundColor: ['#FF4560'],
            datalabels: {
              display: true,
            },
          },
          {
            label: 'Tested Random Cans',
            backgroundColor: ['#546E7A'],
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
          {
            label: 'Total Count',
            backgroundColor: '#DDD',
            hoverBackgroundColor: '#DDD',
            data: [
              obj1.TotalReservoirs,
              obj1.TotalMCCComplaints,
              // 0, // Fill remaining values with 0
              // 0,
              // 0,
              // 0,
            ],
            datalabels: {
              display: true,
            },
          },
        ],
      },

      options: {
        ...(
          graphType === 'vertical'
            ? {
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
            }
            : {
              indexAxis: 'y',
              scales: {
                x: {
                  ticks: {
                    precision: 0,
                    display: true,
                  },
                  grid: {
                    drawTicks: true,
                  },
                },
                y: {
                  stacked: true,
                  offset: true,
                  grid: {
                    display: false,
                  },
                },
              },
            }
        ),

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
              size: 5,
            },
            // align: 'start',
          },
          tooltip: {
            filter: (tooltipItem) => !tooltipItem.datasetIndex,
          },
          datalabels: {
            display: true,
            color: 'black',
            anchor: 'end',

            align: graphType === 'vertical' ? 'top' : 'right', 
            offset: graphType === 'vertical' ? 4 : -2,  
           // offsetX: graphType === 'vertical' ? 12 : -2,
            paddingRight: '12px',
            // offsetY: graphType ==='vertical' ? 10 : -12,

            formatter: function (value) {
              return '\n' + value;
            },
          },
          annotation: {
            annotations: {},
          },
        },
      },


      // Rest of your code...
    });

    // Save the new Chart instance in state
    setChartInstance(newChartInstance);
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
      Chart.unregister(annotationPlugin, ChartDataLabels);
    };

    // Rest of your code...
  };
    fetchData();
  }, [graphType, window.innerWidth,selectedDate]);

  return (
    <div className='md-align-center'>

      <article className="cardone">

      <div style={{ marginBottom: "-25px", marginLeft: "10px", paddingTop: "0px",paddingBottom:"4px", size: "12px" }}>Sample Taker Reports</div>

        <span className='optionIcons'>
          <img src={require('./images/Vertical.svg').default} className="verticalone" alt="location" onClick={() => switchToVertical()} />

          <img src={require('./images/Horizontal.svg').default} className="horizotalone" alt="location" onClick={() => switchToHorizontal()} />
        </span>

        {/* <div style={{marginTop:"5px"}}> */}
        {graphType === 'vertical' ? (

          <canvas className="my-canvas" ref={chartReference} width={75} height={73} onClick={openPopup} />

        ) : (
          // Render your horizontal graph here

          <canvas className="my-canvas" ref={chartReference} width={75} height={73} onClick={openPopup} />
        )}

        {popupOpen && <GraphonPopup onClose={closePopup} obj1={obj1} totalDone={totalDone} sampleTaker={sampleTaker} />}
        {/* </div> */}
      </article>
    </div>
  );
};

const GraphonPopup = ({ onClose, obj1, totalDone, sampleTaker }) => {

  return (
    <div className="cardpopup">
      <Popup style={{ height: "35%", border: '1px light grey' }} open modal closeOnDocumentClick onClose={onClose}>
        <div className="graponepop" style={{ height: "auto", border: '1px light grey', margin: "13px 13px 13px 13px" }} >
          <div> <p style={{ float: "left", marginTop: "0px", marginBottom: "0px" }}>Sample Taker Report </p> </div>

          <div style={{ position: "relative" }}>
            <span className="closePop" onClick={onClose}> &times; </span>
            <table className='popuptableone'>
              <thead>
                <tr>
                  <th className="headingone">Category</th>
                  <th className="headingone" style={{ padding: "0px 7px" }}>Total</th>
                  <th className="headingone" style={{ padding: "0px 7px" }}>Done</th>
                </tr>
              </thead>
              <tbody>
                <tr className="rowone">
                  <td className="columnone">Reservoirs</td>
                  <td className="columnone">{obj1.TotalReservoirs}</td>
                  <td className="columnone">{obj1.TestedReservoirs}</td>
                </tr>
                <tr className="rowone">
                  <td className="columnone">MCC Complaints</td>
                  <td className="columnone">{obj1.TotalMCCComplaints}</td>
                  <td className="columnone">{obj1.TestedMCCComplaints}</td>
                </tr>
                <tr className="rowone">
                  <td className="columnone">Random CANS</td>
                  <td className="columnone"></td>
                  <td className="columnone">{obj1.TestedRandomCans}</td>
                </tr>
                <tr className="rowone">
                  <td className="columnone">Hospitals</td>
                  <td className="columnone"></td>
                  <td className="columnone">{obj1.TestedHospitals}</td>
                </tr>
                <tr className="rowone">
                  <td className="columnone">Polluted Area CANS</td>
                  <td className="columnone"></td>
                  <td className="columnone">{obj1.TestedPollutedAreaCans}</td>
                </tr>
                <tr className="rowone">
                  <td className="columnone">Tankers</td>
                  <td className="columnone"></td>
                  <td className="columnone">{obj1.TestedTankers}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="rowone">
                  <td className="columnone"></td>
                  <th className="columnone">Total</th>
                  <th className="columnone">{totalDone}</th>
                </tr>
              </tfoot>
            </table>
          </div>

        </div>
      </Popup>
    </div>
  );

};

export default Cardone;










