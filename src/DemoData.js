//import jsonData from "./file.json";
 import { fetchData } from './fetchData';
 const jsonData= await fetchData();
//console.log("-----jsonData demoData----",jsonData);
var formattedData = [];
const getDivision = () => {
 // console.log("jsonData from someFunction:", jsonData);
  const uniqueDivisions = Array.from(
    new Set(jsonData.m_Item2.map((item) => item.DivisionName))
  );

  const sortedDivisions = uniqueDivisions.sort((a, b) =>
    compareDivisionNames(a, b)
  );

  const dynamicResources = sortedDivisions.map((division, index) => {
    const divisionSectionsSet = new Set();
    // const currentDate = new Date();
    // let uniqueId = "";
    const divisionSections = jsonData.m_Item2

      .filter(
        (item) => item.DivisionName === division && item.SectionName !== null
      )
      .reduce((uniqueSections, item) => {
        if (!divisionSectionsSet.has(item.SectionName)) {
          divisionSectionsSet.add(item.SectionName);
       //   uniqueId = item.Can;
          uniqueSections.push({
            id: item.Can, //`${index}${uniqueSections.length}`,
            name: item.SectionName,
            parentId: `r${index}`
          });
        }

        return uniqueSections;
      }, []);

    return [
      {
        id: `r${index}`,
        name: division,
        groupOnly: true
      },
      ...divisionSections
    ];
  });

  const dynamicJsonData = dynamicResources.flat();
  //setDynamicJson({ resources: dynamicJsonData });
 // console.log(dynamicJsonData);
  return dynamicJsonData;
};

const compareDivisionNames = (a, b) => {
  const regex = /(\d+)/;
  const aMatches = a.match(regex);
  const bMatches = b.match(regex);

  if (aMatches && bMatches) {
    const aNumber = parseInt(aMatches[1], 10); // Specify radix as 10
    const bNumber = parseInt(bMatches[1], 10); // Specify radix as 10
    if (aNumber < bNumber) {
      return -1;
    } else if (aNumber > bNumber) {
      return 1;
    }
  } else if (aMatches && !bMatches) {
    return -1;
  } else if (!aMatches && bMatches) {
    return 1;
  }

  return a.localeCompare(b);
};

const formatData = (items) => {
  const currentDate = new Date();

  items.forEach((item, index) => {
    const id = index + 1;
    const start = `${currentDate.toISOString().split("T")[0]} ${item.FromTime
      }:00`;
    const end = `${currentDate.toISOString().split("T")[0]} ${item.ToTime}:00`;
    const resourceId = `${item.Can}`;
    const title = "";
    //const title = item.SectionName;
    const bgColor = "#007DB9";
    const LineManName = `${item.LineManName}`;
    const SectionName = `${item.SectionName}`;
    const Can = `${item.Can}`;
    const LineManMobileNumber = `${item.LineManMobileNumber}`;
    const formattedItem = {
      id,
      start,
      end,
      resourceId,
      title,
      bgColor,
      LineManName,
      SectionName,
      LineManMobileNumber,
      Can
    };

    formattedData.push(formattedItem);
  });
 // console.log("formattedData", formattedData);
  return formattedData;
};

// today changes end here

const DemoData = {
  resources: getDivision(),
  events: formatData(jsonData.m_Item2)
};

export default DemoData;
