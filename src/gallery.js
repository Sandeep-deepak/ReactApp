 
import axios from 'axios';
import { getSelectedDate } from './dateUtils'; // Import getSelectedDate
import loaderImage from './Spinner-5.gif';


const showLoader = () => {
  const loaderContainer = document.createElement('div');
  loaderContainer.className = 'loader-container';

  const loaderImageElement = document.createElement('img');
  loaderImageElement.src = loaderImage;
  loaderImageElement.alt = 'Loading...';
  loaderImageElement.className = 'loaderimage';

  const loaderText = document.createElement('h3');
  loaderText.textContent = 'Please Wait Loading...';
  loaderText.className = 'loadertext';

  loaderContainer.appendChild(loaderImageElement);
  loaderContainer.appendChild(loaderText);

  document.body.appendChild(loaderContainer);
};

const hideLoader = () => {
  const loaderContainer = document.querySelector('.loader-container');
  if (loaderContainer) {
    document.body.removeChild(loaderContainer);
  }
};

const formatDate = (date) => {
  const d = new Date(date);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return `${d.getDate()}-${months[d.getMonth()]}-${d.getFullYear()}`;
};


export const galleryone = async () => {
  try {
    console.log("gallery called");
    
    // Get the selected date
    // const currentDate = new Date();
    const selectedDate = getSelectedDate();
    const formattedDate = formatDate(selectedDate);
 

    // Stringify the entire request body
    const requestBody = JSON.stringify({
      "divId": "",
      "FromDate": formattedDate,
      "MobileNo": "",
      "SubDivID": 0,
      "ToDate": formattedDate,
    });

    console.log("requestBody",requestBody);

    // Send the HTTP PUT request to the API with the stringified body
    const response = await axios.put(
      "https://local.hyderabadwater.gov.in/MiscellaneousAPI/GetSocialAuditRCImages",
      requestBody,
      {
        headers: {
          Authorization: `Basic c2VsZmJpbGxpbmc6WGtsTGgvZWFKbVdxOTM3cEp1MmhCQjludktWZXFZaXJTMVdid0RwSEsrVT0=`,
          "Content-Type": "application/json"
        },
      }
    );

    console.log("response data images", response.data);
    return response.data; // Return the response data without filtering
  } catch (error) {
    throw error;
  }
};


// export const galleryone = async () => {
//   try {
//     console.log("gallery called");
//    // showLoader();
//    // const currentDate = new Date();
//       const selectedDate = getSelectedDate();
//     // Format the date as "dd-mmm-yyyy"
//     const formattedDate = formatDate(selectedDate);
//     const formattedDateAsString = JSON.stringify(formattedDate);
//     console.log("formatted date  galary............", formattedDate,formattedDateAsString);

//     const response = await axios.put(
//       "https://local.hyderabadwater.gov.in/MiscellaneousAPI/GetSocialAuditRCImages",
//       {
//         headers: {
//           Authorization: `Basic c2VsZmJpbGxpbmc6WGtsTGgvZWFKbVdxOTM3cEp1MmhCQjludktWZXFZaXJTMVdid0RwSEsrVT0=`,
//           "Content-Type": "application/json"
//         },
//         method: 'put',
//         data: {
//           "divId": "",
//           "FromDate": formattedDateAsString,
//           "MobileNo": "",
//           "SubDivID": 0,
//           "ToDate": formattedDateAsString,
//         },
//       }
//     );
//      // Hide the loader
//    //  hideLoader();

//     // // Filter response data based on the "TestedDate" matching the current date
//     // const filteredData = response.data.filter(item => {
//     //   // Remove the hours part from "TestedDate" and convert to "dd-mmm-yyyy" format
//     //   const testedDateFormatted = item.TestedDate.split('-').reverse().join('-');
//     //   console.log("testedDate",testedDateFormatted);
//     //  // const testedDateFormatted = formatDate(item.TestedDate.split(' ')[0]);
//     //   // Compare the formatted "TestedDate" with the current date
//     //   return testedDateFormatted === formattedDate;
//     // });

//      // Filter response data based on the "TestedDate" matching the current date
//      const filteredData = response.data.filter(item => {
//       // Convert the "TestedDate" to the format "3-Oct-2023"
//     //  const testedDateFormatted = item.TestedDate.split('-').reverse().join('-');
//     const testedDateFormatted = formatDate(item.TestedDate.split(' ')[0]);

//       console.log("testedDate",testedDateFormatted);
//       // Compare the formatted "TestedDate" with the current date
//       return testedDateFormatted === formattedDate;
//     });

//     console.log("filtered response data images", filteredData);
//    // hideLoader();
//     return filteredData; // Return filtered response data
   
//   } catch (error) {
//     //hideLoader();
//     throw error;
//   }
// };