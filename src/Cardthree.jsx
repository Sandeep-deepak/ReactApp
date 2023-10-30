
import React, { useEffect, useState, useContext } from "react";
import "./styles.css";
import Chart from "react-apexcharts";
import { nontesteddata } from './nontesteddata.js';
import { DateContext } from './DateProvider';
import { getSelectedDate } from './dateUtils';

export const Cardthree = () => {
  const [seriesData, setSeriesData] = useState([]);
  const selectedDate = useContext(DateContext).selectedDate;

 
  //  // const formattedDateone = selectedDate;
   var months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
   var formattedDate = selectedDate.getDate() + "-" + months[selectedDate.getMonth()] + "-" + selectedDate.getFullYear();

  useEffect(() => {
    const fetchData = async () => {
      const data = await nontesteddata(selectedDate); // Pass the selectedDate as a parameter
      const recordsCount = data.m_Item2.SampleTakersNoRCTests.length;
      setSeriesData([recordsCount]);
    };

    fetchData();
  }, [selectedDate]); // Include selectedDate in the dependency array

  const colors = ['#67e0d6', '#FF4560', '#546E7A', '#d676c9', '#734896', '#89f5cd'];
  const options = {
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // Handle chart click event if needed
        }
      }
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: '10%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: true
    },
    legend: {
      position: 'bottom',
      onItemClick: {
        toggleDataSeries: false,
      },
      markers: {
        radius: 12,
      },
    },
    xaxis: {
      categories: [[formattedDate]],
      labels: {
        style: {
          content: "vgh",
          colors: colors,
          fontSize: '12px'
        }
      }
    }
  };

  return (
    <div className='md-align-center-2'>
      <article className="cardthree">
        <div style={{ marginBottom: "-25px", marginLeft: "15px", paddingTop: "10px", paddingBottom: "30px", size: "13px" }}>STK non tested data</div>
        <Chart options={options} series={[{ data: seriesData }]} type="bar" height={335} />
      </article>
    </div>
  );
};

export default Cardthree;
