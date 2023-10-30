// import axios from 'axios';

// export const fetchData = async () => {
//   try {
//     const username = "edp";
//     const password = "Navayuga123";
//     const authHeaderValue = `Basic ${btoa(`${username}:${password}`)}`;

//     const response = await axios.put(
//       // "https://test3.hyderabadwater.gov.in/APITest/GetSocialAuditLineSupplyTimingsandCansDetailsReport",
//       "https://local.hyderabadwater.gov.in/MiscellaneousAPI/GetSocialAuditLineSupplyTimingsandCansDetailsReport",
//       {
//         headers: {
//           Authorization: authHeaderValue
//         },
//         method: 'put',
//         data: {
//           "MobileNo": "",
//           "divId": "ALL",
//           "sectionId": "ALL"
//         },
//       }
//     );

//     return response.data; // Return response data
//   } catch (error) {
//     throw error;
//   }
// };


import axios from 'axios';
import "./styles.css";
//Import your loading image (replace 'loader.gif' with your image file)
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

export const fetchData = async () => {
  const username = "edp";
  const password = "Navayuga123";
  const authHeaderValue = `Basic ${btoa(`${username}:${password}`)}`;

  try {
    // Show the loader
    
   

    showLoader();

    const response = await axios.put(
    //  "https://test3.hyderabadwater.gov.in/APITest/GetSocialAuditLineSupplyTimingsandCansDetailsReport",
         "https://local.hyderabadwater.gov.in/MiscellaneousAPI/GetSocialAuditLineSupplyTimingsandCansDetailsReport",

      {
        headers: {
          Authorization: authHeaderValue
        },
        method: 'put',
        data: {
          "MobileNo": "",
          "divId": "ALL",
          "sectionId": "ALL"
        },
      }
    );

    // Hide the loader
    hideLoader();

    return response.data; // Return response data
  } catch (error) {
    // Hide the loader in case of an error
    hideLoader();

    throw error;
  }
};



 

