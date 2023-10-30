
import axios from 'axios';
import { DateContext } from './DateProvider';
import { getSelectedDate } from './dateUtils'; // Import getSelectedDate
 


export const dailyreports = async () => {
 // console.log("daily reports called");
  try {
    const currentDate=new Date();
    const selectedDate = getSelectedDate(); // Get the selected date from dateUtils.js
   // const formattedDateone = selectedDate;
   // console.log("daily reports selected",selectedDate);

    var months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      
      // Format the date as "dd-mmm-yyyy"
      var formattedDate = selectedDate.getDate() + "-" + months[selectedDate.getMonth()] + "-" + selectedDate.getFullYear();
//console.log("format date daily reports............",formattedDate);
//   const selectedDateHandler=(d)=>{
//     setDate(d)
//   }
//console.log("date............",currentDate.toISOString().slice(0, 10))
    const response = await axios.put(
      "https://local.hyderabadwater.gov.in/MiscellaneousAPI/GetFeedbackDetails",
      {
        // Move the data to the "data" property
        "FromDate": formattedDate,
        "MobileNo": "9121139431",
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
    //console.log("my response data of sample taker", response.data);
    return response.data; // Return response data
  } catch (error) {
    throw error;
  }
};

