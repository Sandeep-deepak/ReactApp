 // const Lineman=()=>{
//     return(
//         <div>Lineman</div>
//     )
       
    
// }
// export default Lineman;



import { Cardfour } from "./Lineman/Cardfour";
import { Cardtwo } from "./Cardtwo";
import { Cardone } from "./Card";
import { Slider } from "./SliderCourosel";
import jsonData from "./SampleTakerReport.json"; 
import DemoData from "./DemoData";
import Dropdown from "react-dropdown";
import React,{useState,useEffect} from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { Col, Row } from "react-bootstrap"
import "./styles.css";


 
const Lineman=()=>{
   
  const [demoData,setDemoData]=useState(DemoData);
  const [sectionoptions,setSectionoptions]=useState([]);
  const [selectedOption,setSelectedOption]=useState({});
  const [divisionoptions,setDivisionoptions]=useState([]);
  const [divisionOption,setDivisionOption]=useState({});
 
 const[startDate,setDate]=React.useState(new Date());
  useEffect(()=>{

    const divisionNames = [];
    demoData.resources.forEach((x) => {
      if (x.groupOnly === true && x.name !== "") {
        let obj = { value: x.id, label: x.name };
        divisionNames.push(obj);
      }
    });
    divisionNames.unshift({ value: "All", label: "All" });
    setDivisionoptions(divisionNames);
    setDivisionOption(divisionNames[0]);//set default
    console.log("div op", divisionNames);
    const sectionNames = [];
    demoData.resources.forEach((x) => {
      if (x.name !== "" && x.groupOnly !== true) {
        let obj = { value: x.name, label: x.name };
        sectionNames.push(obj);
      }
    });
    sectionNames.unshift({ value: "All", label: "All" });
    setSectionoptions(sectionNames);
    setSelectedOption(sectionNames[0]);
    console.log("sec opt", sectionNames);

   

  },[]);


  const onSelect = (selectedOption) => {
    let selectedresource = [];
      setSelectedOption(selectedOption);
      console.log(selectedOption);

    console.log("demoData.resources", demoData.resources);
     
  
  };

  const onSelectdiv = (divisionOption) => {
    console.log("select div option", divisionOption);
    let sectionNames = [];
    let selectedevent = [];
    let selectedresource = [];
    
    
    if (divisionOption.value === "All") {
      selectedevent = demoData.events;
      selectedresource = demoData.resources;
      
      
    } 
   else {
      demoData.resources.forEach((x) => {
        if (
          x.name !== "" &&
          x.groupOnly !== true &&
          x.parentId === divisionOption.value
        ) {
          let obj = { value: x.name, label: x.name };
          sectionNames.push(obj);
        }
      });
      sectionNames.unshift({ value: "All", label: "All" });
      console.log("sectionNames", sectionNames);
      setSectionoptions(sectionNames);
      setDivisionOption(divisionOption);
      setSelectedOption(sectionNames[0]);
      console.log("divisionOption.value", divisionOption.value);
      demoData.resources.forEach((x) => {
        if (
          divisionOption.value === x.id ||
          x.parentId === divisionOption.value
        ) {
          selectedresource.push(x);
        }
      });
     console.log("selectedresource", selectedresource);
      

   }
  };
 
  const today=new Date();
  const selectedDateHandler=(d)=>{
    setDate(d)
  }
   

    return(
       <div>
        {/* <Container> */}
        <Row className="justify-content-md-center mt-2 div-width">
        <Col sm={12} md={4} lg={6} className="d-lg-flex flex-lg-column align-items-lg-start custom-column mt-1 px-5">
  <div className="custom-align-end" style={{ display: 'flex', alignItems: 'center' }}>
    <span
      onClick={() => {
        const newDate = new Date(startDate);
        newDate.setDate(newDate.getDate() - 1);
        selectedDateHandler(newDate);
      }}
      style={{ cursor: "pointer", marginRight: '2px' }}
    >
      &lt;
    </span>
    <p
      style={{ cursor: "pointer", margin: '0 0px' }}
      onClick={() => {
        // Handle click on the DatePicker area if needed
      }}
    >
      <DatePicker
        className="mydate"
        dateFormat="MMM d, yyyy"
        selected={startDate}
        onChange={selectedDateHandler}
        minDate={today}
        todayButton={"today"}
        style={{ width: '20px' }}
      />
    </p>
    <span
      onClick={() => {
        const newDate = new Date(startDate);
        newDate.setDate(newDate.getDate() + 1);
        selectedDateHandler(newDate);
      }}
      style={{ cursor: "pointer", marginLeft: '0px' }}
    >
      &gt;
    </span>
  </div>
</Col>



        <Col sm={12} md={4} lg={3} className="d-lg-flex flex-lg-column align-items-lg-end mt-1"> 
        <Dropdown    
              className="mydropdown"
             options={divisionoptions}
              onChange={onSelectdiv}
              value={divisionOption.value}
              placeholder="Select an option"
            />
        </Col>
        <Col sm={12} md={4} lg={3}  className="d-lg-flex flex-lg-column align-items-lg-center mt-1">
        <Dropdown
              className="mydropdown1" 
              options={sectionoptions}
              onChange={onSelect}
              value={selectedOption.value}
              placeholder="Select an option"
            />  
        </Col>
      </Row>













      <Row className="justify-content-md-center justify-content-lg-center justify-content-xl-center mt-0  div-width">
      {/* <Row className="justify-content-md-center justify-content-lg-center justify-content-xl-center mt-4 ml-1 div-width"> today */}
        <Col sm={12} md={12} lg={4}>
        <div className="bar-center">  
         
      <div className="justify-content-md-center mt-4">
         { <Cardfour  />  }
      </div>
             </div> 
            </Col>
        <Col sm={12} md={12} lg={4} > 
        {/* <div className="bar-center">  
        <div className="justify-content-md-center mt-4">
        <Cardtwo title="Rocket" />
      </div>
      </div> */}

        </Col>
        <Col sm={12} md={12} lg={4} >
        {/* <div className="bar-center">  
        <div className="justify-content-md-center mt-4">
        <Cardthree title="Doggy" />
      </div>
      </div> */}
        </Col>
      </Row>
      
    {/* </Container> */}
    <Slider />
       </div>
        
    )
       
    
}
export default Lineman;