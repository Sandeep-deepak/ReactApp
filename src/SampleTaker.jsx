import { Cardthree } from "./Cardthree";
import { Cardtwo } from "./Cardtwo";
import { Cardone } from "./Card";
import { Slider } from "./SliderCourosel";
import jsonData from "./SampleTakerReport.json"; // Import jsonData from the separate file
import DemoData from "./DemoData";
import Dropdown from "react-dropdown";
import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";



const SampleTaker = () => {

  const [demoData, setDemoData] = useState(DemoData);
  const [sectionoptions, setSectionoptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const [divisionoptions, setDivisionoptions] = useState([]);
  const [divisionOption, setDivisionOption] = useState({});

  const [startDate, setDate] = React.useState(new Date());
  useEffect(() => {

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



  }, []);

  // const handleDate =(date)=>{

  //   setStartDate(date);
  //   console.log("date",date);
  // }

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

  const today = new Date();
  const selectedDateHandler = (d) => {
    setDate(d)
  }


  return (
    // <div>Sample Taker</div>
    <div>

      <div className="row">
        <div className="datepicker" >
          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={selectedDateHandler}
            minDate={today}
            todayButton={"today"}
          />
        </div>
        <div className="col-md-6 ">
          {/* <div className="row" style={{display:"inline",width:'300px'}}>       */}


          <div
            className="d-flex flex-row justify-content-between mt-0 mb-0"
            style={{ position: "relative", right: "-690px" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <span>
                <Dropdown
                  className="dropdowns3"
                  options={divisionoptions}
                  onChange={onSelectdiv}
                  value={divisionOption.value}
                  placeholder="Select an option"
                />
              </span>
              <span>
                <Dropdown
                  className="dropdowns3"
                  options={sectionoptions}
                  onChange={onSelect}
                  value={selectedOption.value}
                  placeholder="Select an option"
                />
              </span>
            </div>
          </div>
        </div>
      </div>


      <div>
        <section className="cardWrapper">

          <div className="card-container">
            <div className="card">
              <Cardone title="Lemon" sampleTaker={jsonData} />
            </div>

            <div className="card">
              <Cardtwo title="Rocket" />
            </div>

            <div className="card">
              <Cardthree title="Doggy" />
            </div>
          </div>
        </section>

        <Slider />
      </div>


    </div>
  )


}
export default SampleTaker;