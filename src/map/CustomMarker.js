import React, { useState } from "react";
import { Marker ,InfoWindow} from "@react-google-maps/api";
import { v4 as uuidv4 } from "uuid";
import Popup from "reactjs-popup";
import CustomPopup from "./custom-popup.js";
export default function CustomMarker(props) {

  const { position, clusterer,can } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  

  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = () => {
    setVisibility(false);
    setIsOpen(false);
  };
  const togglePopup = () => {

    setIsOpen(!isOpen);
   // setIsPopupOpen(!isPopupOpen);
  };
  // const togglcanPopup = () => {
  //   setIsPopupOpen(!isPopupOpen);

  // };

 
  const candetailsPopup =() =>{
    setVisibility(true);
    setIsPopupOpen(true);
   // setIsOpen(!isOpen);
  };
  return (
  <>
  
 

<Marker
  position={position}
  clusterer={clusterer}
  onClick={togglePopup}
  icon={{
    url:
      can.QCode === 'SQ001'
        ? require('../images/Polluted_water.svg').default
        : can.QCode === 'SQ002'
        ? require('../images/All_positive_answers.svg').default
        : can.QCode === 'SQ003'
        ? require('../images/Not_supplied.svg').default
        : require('../images/water_drop.svg').default,
    scaledSize: new window.google.maps.Size(40, 40),
  }}
>
  {isOpen && (
    <InfoWindow position={position} onCloseClick={togglePopup}>
      <div>
        <p onClick={candetailsPopup}>CAN: {can.CAN}</p>
      </div>
    </InfoWindow>
  )}
      

  
     
 </Marker> 
 
    <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        // title="Hello Jeetendra"
      >
         <div className="candetailspopup">
              {/* <button className="close" onClick={togglcanPopup}> */}
                  {/* &times;</button> */}
                  <div className="row">
                  <div className="col-10">
                  <div><p style={{ float:"left"}}>Quality of water was supplied as per schedule</p></div>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-5">
                  <div><p style={{ float:"center"}}>CAN:</p></div>
                  </div>
                  <div className="col-7">
                  <div><p style={{ float:"left"}}> {can.CAN}</p> </div>  
                 </div>
                 </div>

                 <div className="row">
                  <div className="col-5">
                  <div><p style={{ float:"left"}}>Section Name:</p></div>
                  </div>
                  <div className="col-7">
                  <div><p style={{ float:"left"}}>{can.SecName}</p> </div>  
                 </div>
                 </div>

                 <div className="row">
                  <div className="col-5">
                  <div><p style={{ float:"left"}}>Section Code:</p></div>
                  </div>
                  <div className="col-7">
                  <div><p style={{ float:"left"}}>{can.SecCode}</p> </div>  
                 </div>
                 </div>

                 <div className="row">
                  <div className="col-5">
                  <div><p style={{ float:"left"}}>Mobile:</p></div>
                  </div>
                  <div className="col-7">
                  <p><a href="tel:{can.ConsumerMobileNo}">{can.ConsumerMobileNo}</a></p>
                 </div>
                 </div>

                 <div className="row">
                  <div className="col-5">
                  <div><p style={{ float:"left"}}>Created Date:</p></div>
                  </div>
                  <div className="col-7">
                  <div><p style={{ float:"left"}}>{can.CreatedDate}</p> </div>  
                 </div>
                 </div>

                 <div className="row">
                  <div className="col-5">
                  <div><p style={{ float:"left"}}>Lineman Name:</p></div>
                  </div>
                  <div className="col-7">
                  <div><p style={{ float:"left"}}>{can.LineManName}</p> </div>  
                 </div>
                 </div>

                 <div className="row">
                  <div className="col-5">
                  <div><p style={{ float:"left"}}>Lat/Long:</p></div>
                  </div>
                  <div className="col-7">
                  <div><p style={{ float:"left"}}>{can.Latitude +"/"+can.Longitude}</p> </div>  
                 </div>
                 </div>

                  
                  </div>
      </CustomPopup>
  </>
   ) 
}
