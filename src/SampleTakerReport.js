
import axios from 'axios';
import { DateContext } from './DateProvider';
import { getSelectedDate } from './dateUtils'; // Import getSelectedDate


export const sampletakerreport = async () => {
 // console.log("called sample taker report");
  try {
    const currentDate=new Date();
    const selectedDate = getSelectedDate(); // Get the selected date from dateUtils.js
    // const formattedDateone = selectedDate;
    // console.log("sampletakerreport selected",selectedDate);
    var months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      
      // Format the date as "dd-mmm-yyyy"
      var formattedDate = selectedDate.getDate() + "-" + months[selectedDate.getMonth()] + "-" + selectedDate.getFullYear();
//console.log("format date............",formattedDate);
//   const selectedDateHandler=(d)=>{
//     setDate(d)
//   }
//console.log("date............",currentDate.toISOString().slice(0, 10))
    const response = await axios.put(
      "https://local.hyderabadwater.gov.in/MiscellaneousAPI/GetSampleTakersAbstract",
      {
        // Move the data to the "data" property
        "FromDate": formattedDate,
        // "FromDate":  "24-Sep-2023",
        "SubDivIDs": [
            "121",
            "122",
            "10398",
            "26016690",
            "124",
            "123",
            "10400",
            "10402",
            "26016692",
            "125",
            "126",
            "128761938",
            "26016694",
            "10404",
            "10415",
            "128762182",
            "26016696",
            "10407",
            "10420",
            "26016698",
            "10410",
            "10422",
            "26016700",
            "10413",
            "26016587",
            "26016702",
            "26016655",
            "26016656",
            "26016738",
            "26016824",
            "26016871",
            "129541569",
            "26016741",
            "26016872",
            "101159521",
            "101159523",
            "127",
            "128",
            "129",
            "129541578",
            "26016676",
            "26016796",
            "26016810",
            "26016924",
            "101159518",
            "26016907",
            "26016908",
            "26016909",
            "26016910",
            "26016927",
            "26016931",
            "26016959",
            "26016960",
            "101159519",
            "101159520",
            "130",
            "131",
            "132",
            "133",
            "129541488",
            "129541581",
            "26016678",
            "101159779",
            "101159781",
            "129541487",
            "134",
            "135",
            "136",
            "26016632",
            "137",
            "138",
            "139",
            "26016634",
            "26016668",
            "26016669",
            "26016670",
            "129541570",
            "129541571",
            "129541572",
            "129541573",
            "26016671",
            "26016706",
            "140",
            "141",
            "142",
            "143",
            "26016680",
            "26016941",
            "26016940",
            "26016956",
            "26016998",
            "26017001",
            "93510159",
            "101159692",
            "129541480",
            "26016744",
            "144",
            "145",
            "146",
            "26016682",
            "148",
            "149",
            "150",
            "26016684",
            "10396",
            "152",
            "153",
            "26016686",
            "25759255",
            "155",
            "10397",
            "156",
            "128761937",
            "26016688",
            "129541530",
            "101159515",
            "0"
        ],
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

