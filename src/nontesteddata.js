
import axios from 'axios';
//import React, { useContext } from 'react';
import { DateContext } from './DateProvider';
import { getSelectedDate } from './dateUtils'; // Import getSelectedDate
export const nontesteddata = async () => {
//  const { today, selectedDate } = useContext(DateContext);
//console.log("called");
  try {
    const currentDate=new Date();
    const selectedDate = getSelectedDate(); // Get the selected date from dateUtils.js
   // const formattedDateone = selectedDate;
   // console.log("nontested selected",selectedDate);

    var months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      
      // Format the date as "dd-mmm-yyyy"
    //  const format = selectedDate;
      //.toISOString().slice(0, 10);
     // console.log("selectedDate",format);
      var formattedDate = selectedDate.getDate() + "-" + months[selectedDate.getMonth()] + "-" + selectedDate.getFullYear();
    //   console.log(" myDate............",myDate);
    //  var formattedDate = selectedDate + "-" + months[selectedDate] + "-" + selectedDate;
//console.log("format date............",formattedDate);
//   const selectedDateHandler=(d)=>{
//     setDate(d)
//   }
//console.log("date............",currentDate.toISOString().slice(0, 10))
    const response = await axios.put(
      "https://local.hyderabadwater.gov.in/MiscellaneousAPI/GetSampleTakersFeedbackSummary",
      {
        // Move the data to the "data" property
        "FromDate": formattedDate,
        "ToDate":formattedDate
      },
      {
        headers: {
          Authorization: `Basic c2VsZmJpbGxpbmc6WGtsTGgvZWFKbVdxOTM3cEp1MmhCQjludktWZXFZaXJTMVdid0RwSEsrVT0=`
        },
        method: 'put',
      }
    );

    // The return statement should come before any other code
   // console.log("my response data of sample taker", response.data);
    return response.data; // Return response data
  } catch (error) {
    throw error;
  }
};

