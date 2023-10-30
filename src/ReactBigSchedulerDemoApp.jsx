import React, { Component } from "react";
import Scheduler, { SchedulerData, ViewTypes } from "react-big-scheduler";
import DemoData from "./DemoData";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import moment from "moment";
import "react-big-scheduler/lib/css/style.css";
import "./styles.css";
import withDragDropContext from './withDnDContext';
import { Col,Row} from "react-bootstrap"
import { fetchData } from './fetchData';
const jsonData= await fetchData();
//import jsonData from "./file.json";


class Basic extends Component {

  constructor(props) {
    super(props);
    const currentDate = new Date();
    console.log("currentDate", currentDate);
    let schedulerData = new SchedulerData(
      currentDate,
      ViewTypes.Day,
      false,
      false,
      {
        displayWeekend: false,
        views: []
      }
    );

    schedulerData.localeMoment.locale("en");
    schedulerData.setResources(DemoData.resources);
    schedulerData.setEvents(DemoData.events);
    schedulerData.config.resourceName = "Divisions / Time";

    // Extract division names from DemoData.events and remove duplicates
    //console.log("divisions", DemoData.resources);
    const divisionNames = [];
    DemoData.resources.forEach((x) => {
      if (x.groupOnly === true && x.name !== "") {
        let obj = { value: x.id, label: x.name };
        divisionNames.push(obj);
      }
    });
    console.log("div op", divisionNames);
    const sectionNames = [];
    DemoData.resources.forEach((x) => {
      if (x.name !== "" && x.groupOnly !== true) {
        let obj = { value: x.name, label: x.name };
        sectionNames.push(obj);
      }
    });
    console.log("sec opt", sectionNames);
    divisionNames.unshift({ value: "All", label: "All" });
    sectionNames.unshift({ value: "All", label: "All" });

    this.state = {
      viewModel: schedulerData,
      divisionoptions: divisionNames,
      sectionoptions: sectionNames,
      selectedOption: sectionNames[0],
      divisionOption: divisionNames[0]

    };
  }


  _onSelectdiv = (divisionOption) => {
    console.log("select div option", divisionOption);
    let sectionNames = [];
    let selectedevent = [];
    let selectedresource = [];
    const currentDate = new Date();
    let schedulerData = new SchedulerData(
      currentDate,
      ViewTypes.Day,
      false,
      false,
      { displayWeekend: false, views: [] }
    );

    sectionNames.unshift({ value: "All", label: "All" });
    schedulerData.localeMoment.locale("en");
    schedulerData.config.resourceName = "Divisions / Time";
    if (divisionOption.value === "All") {
      selectedevent = DemoData.events;
      selectedresource = DemoData.resources;
      schedulerData.setResources(selectedresource);
      schedulerData.setEvents(selectedevent);
      this.setState({
        viewModel: schedulerData,
        divisionOption,
        selectedOption: sectionNames[0],
        sectionoptions: sectionNames
      });
    } else {
      DemoData.resources.forEach((x) => {
        if (
          x.name !== "" &&
          x.groupOnly !== true &&
          x.parentId === divisionOption.value
        ) {
          let obj = { value: x.name, label: x.name };
          sectionNames.push(obj);
        }
      });
      console.log("sec op", sectionNames);
      this.setState({
        divisionOption,
        selectedOption: sectionNames[0],
        sectionoptions: sectionNames
      });

      console.log("divisionOption.value", divisionOption.value);
      DemoData.resources.forEach((x) => {
        if (
          divisionOption.value === x.id ||
          x.parentId === divisionOption.value
        ) {
          selectedresource.push(x);
        }
      });
      console.log("sec op", selectedresource);
      selectedresource.forEach((rr) => {
        DemoData.events.forEach((x) => {
          if (rr.id === x.resourceId) {
            selectedevent.push(x);
          }
        });
      });

      schedulerData.setResources(selectedresource);
      schedulerData.setEvents(selectedevent);
      this.setState({
        viewModel: schedulerData,
        divisionOption,
        selectedOption: sectionNames[0],
        sectionoptions: sectionNames
      });
    }
  };
  _onSelect = (selectedOption) => {
    const currentDate = new Date();
    console.log("demo", DemoData.events);
    let selectedevent = [];
    let selectedresource = [];
    console.log("DemoData.resources", DemoData.resources);
    if (selectedOption.value === "All") {
      DemoData.resources.forEach((x) => {
        if (
          this.state.divisionOption.value === x.id ||
          x.parentId === this.state.divisionOption.value
        ) {
          selectedresource.push(x);
        }
      });
    } else {
      DemoData.resources.forEach((x) => {
        if (
          this.state.divisionOption.value === x.id ||
          selectedOption.value === x.name
        ) {
          selectedresource.push(x);
        }
      });
    }
    console.log("DemoEvengts", DemoData.events);
    if (selectedOption.value === "All") {
      selectedresource.forEach((rr) => {
        DemoData.events.forEach((x) => {
          if (rr.id === x.resourceId) {
            selectedevent.push(x);
          }
        });
      });
    } else {
      DemoData.events.forEach((x) => {
        if (selectedOption.value === x.SectionName) {
          selectedevent.push(x);
        }
      });
    }
    console.log("selected eve", selectedevent);

    let schedulerData = new SchedulerData(
      currentDate,
      ViewTypes.Day,
      false,
      false,
      {
        displayWeekend: false,
        views: []
      }
    );

    schedulerData.localeMoment.locale("en");
    schedulerData.setResources(selectedresource);
    schedulerData.setEvents(selectedevent);
    schedulerData.config.resourceName = "Divisions / Time";

    this.setState({ selectedOption, viewModel: schedulerData });
  };

  customNonAgendaCellHeaderTemplateResolver = (
    schedulerData,
    item,
    formattedDateItems,
    style
  ) => {
    //const format = "h A";
    const currentDate = moment(item.time);
    const nextHour = moment(item.time).add(1, "hour");
    // const headerText = `${currentDate.format(format)}-${nextHour.format(
    //   format
    // )}`;

    const hourNumbersStyle = {
      fontWeight: "1200",
      // color: "#2c6ea3",
      // color:"#0349fc",
      color:"#074682",
      fontSize: "10px"
      // backgroundColor: "#b3bec7"
    };
    const amPmStyle = {
      fontWeight: "300",
    //  color: "#1d65a1",
      fontSize: "8px",
      // color:"#0349fc",
      color:"#074682",
      //  backgroundColor: "#b3bec7"
      // color: "#adb3b3"
    };
    const bar = {
      // color: "#1d65a1"
      color:"#074682",
      // backgroundColor: "#b3bec7"
    };

    return (
      <th
        key={item.time}
        className="rbc-header"
        style={{
          ...style,
          textAlign: "center",
          // fontSize: "10px",
          color: "darkblue",
          backgroundColor: "#b3bec7"
        }}
      >
        <span style={hourNumbersStyle}>{currentDate.format("h")}</span>
        <span style={amPmStyle}>{currentDate.format("A")}</span>
        <span style={bar}>{currentDate.format("-")}</span>
        <span style={hourNumbersStyle}>{nextHour.format("h")}</span>
        <span style={amPmStyle}>{nextHour.format("A")}</span>
      </th>
    );
  };

  render() {
    const {
      viewModel,
      divisionoptions,
      sectionoptions,
      selectedOption,
      divisionOption
    } = this.state;

    return (
      <div>
        <div>
          <h3
            className="primary-header"
            style={{
              textAlign: "center",
              backgroundColor: "#007DB9",
              padding: "15px",
              color: "white",
              fontFamily: "sans-serif"
            }}
          >
            NAANYATHA
          </h3>
          <Row className="justify-content-md-center mt-2 div-width">
          <Col sm={12} md={4} lg={6} className="d-lg-flex flex-lg-column align-items-lg-end mt-1" ><span className="schedular-datepicker"></span> </Col>
          <Col sm={12} md={4} lg={3} className="d-lg-flex flex-lg-column align-items-lg-end"> 
           {/* <div className="custom-align-end"> */}
           {/* <div className="container-dropdown">  */}
            <Dropdown
              className="mydropdown"
              //className="dropdowns"
              options={divisionoptions}
              onChange={this._onSelectdiv}
              value={divisionOption.value}
              placeholder="Select an option"
            />
          {/* </div> */}
          </Col>

          <Col sm={12} md={4} lg={3} className="d-lg-flex flex-lg-column align-items-lg-end"> 
         {/* <div className="custom-align-end">  */}
           {/* <div className="container-dropdown">  */}
            <Dropdown
               //className="dropdowns"
               className="mydropdown1"
              options={sectionoptions}
              onChange={this._onSelect}
              value={selectedOption.value}
              placeholder="Select an option"
            />
          {/* </div> */}
          </Col>
         
          </Row>
          <Scheduler
            schedulerData={viewModel}
            nonAgendaDayCellHeaderFormat="HH:mm"
            nonAgendaCellHeaderTemplateResolver={
              this.customNonAgendaCellHeaderTemplateResolver
            }
            onMouseOver={this.onMouseOver}
            prevClick={this.prevClick}
            nextClick={this.nextClick}
            onSelectDate={this.onSelectDate}
            onViewChange={this.onViewChange}
            //  eventItemClick={this.eventClicked}
            viewEventClick={this.ops1}
            viewEventText="Edit"
            viewEvent2Text="Delete"
            viewEvent2Click={this.ops2}
            updateEventStart={this.updateEventStart}
            updateEventEnd={this.updateEventEnd}
            // moveEvent={this.moveEvent}
            // newEvent={this.newEvent}
            onScrollLeft={this.onScrollLeft}
            onScrollRight={this.onScrollRight}
            onScrollTop={this.onScrollTop}
            onScrollBottom={this.onScrollBottom}
            toggleExpandFunc={this.toggleExpandFunc}
            // nonAgendaCellBodyTemplateResolver={
            //   this.nonAgendaCellBodyTemplateResolver
            // }
            eventItemPopoverTemplateResolver={
              this.eventItemPopoverTemplateResolver
            }
          />
        </div>
      </div>
    );
  }

  prevClick = (schedulerData) => {
    schedulerData.prev();
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });
  };
  eventItemPopoverTemplateResolver = (
    schedulerData,
    eventItem,
    title,
    start,
    end,
    statusColor,
    LineManName,
    SectionName
  ) => {
    const event = eventItem;
    console.log("demo data", DemoData.events);
    console.log("eventItem", eventItem);
    console.log("section name", eventItem.start);
    console.log("LineManName", eventItem.LineManName);
    // const listItems = event.map((link) => (
    //   <li key={link.id}>
    //     {link.start},{link.end},{}
    //   </li>
    // ));
    // if (!event) {
    //   return null; // Event not found in DemoData.events, return null or any other fallback.
    // }
    return (
      <div>
        <h6>SectionName: {event.SectionName}</h6>
        <h6>Start Time: {event.start}</h6>
        <h6>End Time: {event.end}</h6>
        <h6>Line Man Name: {event.LineManName}</h6>
        <h6>Can: {event.Can}</h6>
        <h6>Line Man MobileNumber: {event.LineManMobileNumber}</h6>
      </div>
    );
  };
  nextClick = (schedulerData) => {
    schedulerData.next();
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(
      view.viewType,
      view.showAgenda,
      view.isEventPerspective
    );
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  onSelectDate = (schedulerData, date) => {
  
    var formattedData = [];
    console.log("selected date");


    const formatData = (items) => {
      const currentDate = date;
    
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
      console.log("formattedData", formattedData);
      return formattedData;
    };

    const DemoData = {
      // resources: getDivision(),
      events: formatData(jsonData.m_Item2)
    };

    schedulerData.setDate(date);
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  onMouseOver = (schedulerData, event) => {
    alert("mouse Over");
  };
  eventClicked = (schedulerData, event) => {
    // alert(
    //   `You just clicked an event: {id: ${event.id}, title: ${event.title}}`
    // );
    alert("Event was Clicked");
  };

  ops1 = (schedulerData, event) => {
    alert(
      `You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`
    );
  };

  ops2 = (schedulerData, event) => {
    alert(
      `You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`
    );
  };

  newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    if (
      window.confirm(
        `Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`
      )
    ) {
      let newFreshId = 0;
      schedulerData.events.forEach((item) => {
        if (item.id >= newFreshId) newFreshId = item.id + 1;
      });

      let newEvent = {
        id: newFreshId,
        title: "New Event",
        start: start,
        end: end,
        resourceId: slotId,
        bgColor: "#007DB9"
      };
      schedulerData.addEvent(newEvent);
      this.setState({
        viewModel: schedulerData
      });
    }
  };

  updateEventStart = (schedulerData, event, newStart) => {
    if (
      window.confirm(
        `Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`
      )
    ) {
      schedulerData.updateEventStart(event, newStart);
    }
    this.setState({
      viewModel: schedulerData
    });
  };

  updateEventEnd = (schedulerData, event, newEnd) => {
    if (
      window.confirm(
        `Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`
      )
    ) {
      schedulerData.updateEventEnd(event, newEnd);
    }
    this.setState({
      viewModel: schedulerData
    });
  };

  // moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
  //   if (
  //     window.confirm(
  //       `Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`
  //     )
  //   ) {
  //     schedulerData.moveEvent(event, slotId, slotName, start, end);
  //     this.setState({
  //       viewModel: schedulerData
  //     });
  //   }
  // };

  onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.next();
      schedulerData.setEvents(DemoData.events);
      this.setState({
        viewModel: schedulerData
      });

      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  };

  onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.prev();
      schedulerData.setEvents(DemoData.events);
      this.setState({
        viewModel: schedulerData
      });

      schedulerContent.scrollLeft = 10;
    }
  };

  onScrollTop = (schedulerData, schedulerContent, maxScrollTop) => {
    console.log("onScrollTop");
  };

  onScrollBottom = (schedulerData, schedulerContent, maxScrollTop) => {
    console.log("onScrollBottom");
  };

  toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    this.setState({
      viewModel: schedulerData
    });
  };
}
export default withDragDropContext(Basic);
