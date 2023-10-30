
// import React, { useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "./styles.css";
// //import jsonData from "./gallery.json";
// import Modal from 'react-bootstrap/Modal';
// import { FaTimes } from 'react-icons/fa';
// import { galleryone } from './gallery.js';
// const jsonData= await galleryone();
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 6,
//     slidesToSlide: 4 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 4,
//     slidesToSlide: 3 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 767, min: 464 },
//     items: 3,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };
// const jsonDataper= await galleryone();
// export const Slider = () => {
 
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupContent, setPopupContent] = useState("");
//   const [modalShow, setModalShow] = React.useState(false);
//   const [selectedimage, setSelectedimage] = useState("");

//   const sliderImageUrl = jsonDataper.map((item, index) => ({
//     url: item.ImagePath,
//     name: item.SampleTakerName,
//     addressone: item.DivisionName,
//     addresstwo: item.SubDivisionName,
//     res: item.FeedBackREFCode,
//     value: item.RCValue,
//     date: item.TestedDate,
//     phone: item.MobileNumber,
//     id: item.ImageName,
//     can: item.Can,
//     index: index

//   }));

//   const handleImageClick = (name) => {
//     setPopupContent(name);
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };
//   const leftCoursoel = () => {
//     sliderImageUrl.map((img, index) => {
//       if (index === selectedimage.index - 1) {
//         setSelectedimage(img)
//       }
//     })

//   }
//   const rightCoursoel = () => {
//     sliderImageUrl.map((img, index) => {
//       if (index === selectedimage.index + 1) {
//         setSelectedimage(img)
//       }
//     })
//   }
//   const displayModal = (obj) => {
//     console.log("clicked", obj)
//     setSelectedimage(obj);

//     setModalShow(!modalShow);
//     // if(modalShow){
//     //   MyVerticallyCenteredModal(obj);
//     // }
//   }

//   //onHide={modalShow? setModalShow(false):setModalShow(true) }
//   const closeModel = () => {
//     if (modalShow) {
//       setModalShow(!modalShow)
//     }
//   }

//   return (
//     <>
//       {/* <Modal show={modalShow}  size="sm" centered={true} onHide={closeModel} >
//         <Modal.Header closeButton={false}>
//         {/* <p style={{alignContent:"center"}}>Sample Taker</p> */}
//       {/* <div className="closeicon" onClick={closeModel}>
//             <FaTimes />
//           </div>
//           <p> </p>
//         </Modal.Header> */}
//       {/* <i className="fa fa-close" onClick={modalShow && setModalShow(false)}></i> */}
//       {/* <Modal.Body> */}
//       {/* <img src={selectedimage.url} alt="movie1" /> */}
//       {/* <p>Name: {selectedimage.name}</p>
//         <p>Division: {selectedimage.addressone}</p>
//         <p>{selectedimage.res+": "+""+selectedimage.value + " PPM"}</p>
//         <p>Date: {selectedimage.date}</p>
//         <p>Phone No: {selectedimage.phone}</p>
        
//         </Modal.Body>
       
//       </Modal>  */}




//       <Modal show={modalShow} size="md" centered={true} onHide={closeModel}>
//         <img src={require('./images/left.svg').default} className="left" alt="left" onClick={() => leftCoursoel()} />
//         <img src={require('./images/right.svg').default} className="right" alt="right" onClick={() => rightCoursoel()} />
//         <div className="closeicon" onClick={closeModel}>
//           <FaTimes />
//         </div>
//         {/* <Modal.Header closeButton={false}>
//     <div className="closeicon" onClick={closeModel}>
//       <FaTimes />
//     </div>
//     <p> </p>
//   </Modal.Header> */}
//         <Modal.Body>
//           <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

//             <img
//               src={selectedimage.url}
//               alt="movie1"
//               style={{
//                 maxWidth: "100%",
//                 maxHeight: "400px",
//                 marginBottom: "20px",
//                 marginTop: "-115px"
//               }}
//             />

//           </div>
//           <div style={{ float: "left", flexDirection: "column", alignItems: "flex-start", marginLeft: "24px", width: "100%" }}>
//             <div className="row">
//               <div className="col-7">
//                 <p>Can: {selectedimage.can}</p>
//               </div>
//               <div className="col-5">
//                 <p style={{ float: "right", paddingRight: "45px", color: "red" }}>
//                   {selectedimage.res}: <span>&nbsp;</span>{selectedimage.value} PPM
//                 </p>
//               </div>
//             </div>

//             <p>Name: {selectedimage.name}</p>
//             {/* <p style={{ color: "black",fontSize:"15px", display:"block",float:"left",wordWrap:"normal",display:"inline-block",maxWidth:"100% !important",maxHeight:"20% !important", wordWrap:"break-word",
//   overflow:"hidden"}}>Div: {selectedimage.addressone}</p> */}

//             <p>Mobile No: {selectedimage.phone}</p>
//             <p>Date: {selectedimage.date}</p>

//           </div>

//         </Modal.Body>

//       </Modal>



//       <div className="parent">
//         <div className="card mb-3 carouselstyle" >
//           <Carousel
//             responsive={responsive}
//             autoPlay={false}
//             swipeable={true}
//             draggable={true}
//             showDots={true}
//             infinite={true}
//             partialVisible={false}
//             dotListClass="custom-dot-list-style"
//             style={{ marginBottom: "-5px", paddingleft: "100px !important" }}
//           >
//             {sliderImageUrl.map((imageUrl, index) => {
//               return (
//                 <div className="slider" key={index} onClick={() => displayModal(imageUrl)}>
//                   {/* <div> */}
//                   <img src={imageUrl.url} alt="movie" />
//                   {/* </div> */}

//                   <p>
//                     <span className="imagename">{imageUrl.name}</span>
//                     <span className="addressone">{imageUrl.addressone}</span>
//                     <span className="imageres">{imageUrl.res + " "}</span>
//                     <span className="imgvalue">{imageUrl.value + " PPM"}</span>
//                     <span className="imgdate">{imageUrl.date}</span>
//                   </p>
//                 </div>
//               );
//             })}
//           </Carousel>
//           {showPopup && (
//             <div className="popup-container">
//               <div className="popup">
//                 <span className="close" onClick={handleClosePopup}>
//                   &times;
//                 </span>
//                 <p style={{ color: "black" }}>{popupContent}</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };




import React, { useState, useEffect, useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-bootstrap/Modal";
import { FaTimes } from "react-icons/fa";
import { galleryone } from "./gallery.js";
import { DateContext } from "./DateProvider";
import { getSelectedDate } from "./dateUtils";

const ITEMS_PER_PAGE = 10; // Number of items to load at a time
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
};

export const Slider = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [selectedimage, setSelectedimage] = useState("");
  const [loadedImages, setLoadedImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { selectedDate } = useContext(DateContext);

  const loadImages = async (start, count) => {
    setIsLoading(true);
    const jsonData = await galleryone(selectedDate, start, count); // Fetch images based on selectedDate
    setLoadedImages(jsonData);
    setIsLoading(false);
  };

  useEffect(() => {
    setStartIndex(0);
    loadImages(0, ITEMS_PER_PAGE); // Load initial set of images
  }, [selectedDate]); // Reload images when the selectedDate changes

  const sliderImageUrl = loadedImages.map((item, index) => ({
    url: item.ImagePath,
    name: item.SampleTakerName,
    addressone: item.DivisionName,
    addresstwo: item.SubDivisionName,
    res: item.FeedBackREFCode,
    value: item.RCValue,
    date: item.TestedDate,
    phone: item.MobileNumber,
    id: item.ImageName,
    can: item.Can,
    index: index,
  }));

  const handleImageClick = (name) => {
    setPopupContent(name);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const leftCarousel = () => {
    if (selectedimage.index > 0) {
      setSelectedimage(sliderImageUrl[selectedimage.index - 1]);
    }
  };

  const rightCarousel = () => {
    if (selectedimage.index < sliderImageUrl.length - 1) {
      setSelectedimage(sliderImageUrl[selectedimage.index + 1]);
    }
  };

  const displayModal = (obj) => {
    setSelectedimage(obj);
    setModalShow(true);
  };

  const closeModel = () => {
    setModalShow(false);
  };

  const handleSlideChange = (currentSlide) => {
    if (currentSlide + ITEMS_PER_PAGE >= sliderImageUrl.length) {
      const nextPageStart = loadedImages.length;
      loadImages(nextPageStart, ITEMS_PER_PAGE); // Load more images when reaching the end
    }
  };

  return (
    <>
      <Modal show={modalShow} size="md" centered={true} onHide={closeModel}>
        <img
          src={require("./images/left.svg").default}
          className="left"
          alt="left"
          onClick={leftCarousel}
        />
        <img
          src={require("./images/right.svg").default}
          className="right"
          alt="right"
          onClick={rightCarousel}
        />
        <div className="closeicon" onClick={closeModel}>
          <FaTimes />
        </div>
        <Modal.Body>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
              src={selectedimage.url}
              alt="movie1"
              style={{
                width: "430px",
                height: "260px",
                marginBottom: "20px",
                marginTop: "-115px",
              }}
            />
          </div>
          <div
            style={{
              float: "left",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "24px",
              width: "100%",
            }}
          >
            <div className="row">
              <div className="col-7">
                <p>Can: {selectedimage.can}</p>
              </div>
              <div className="col-5">
                <p
                  style={{
                    float: "right",
                    paddingRight: "45px",
                    color: "red",
                  }}
                >
                  {selectedimage.res}: <span>&nbsp;</span>
                  {selectedimage.value} PPM
                </p>
              </div>
            </div>
            <p>Name: {selectedimage.name}</p>
            <p>Mobile No: {selectedimage.phone}</p>
            <p>Date: {selectedimage.date}</p>
          </div>
        </Modal.Body>
      </Modal>

      <div className="parent">
        <div className="card mb-3 carouselstyle">
          {isLoading ? (
            <p style={{ textAlign: "center", marginTop: "10px", color: "blue" }}>Loading...</p>
          ) : (
            <Carousel
              responsive={responsive}
              autoPlay={false}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              partialVisible={false}
              dotListClass="custom-dot-list-style"
              beforeChange={(currentSlide) => handleSlideChange(currentSlide)}
            >
              {sliderImageUrl.slice(0, startIndex + ITEMS_PER_PAGE).map((imageUrl, index) => (
                <div className="slider" key={index} onClick={() => displayModal(imageUrl)}>
                  <img src={imageUrl.url} alt="movie" />
                  <p>
                    <span className="imagename">{imageUrl.name}</span>
                    <span className="addressone">{imageUrl.addressone}</span>
                    <span className="imageres">{imageUrl.res + " "}</span>
                    <span className="imgvalue">{imageUrl.value + " PPM"}</span>
                    <span className="imgdate">{imageUrl.date}</span>
                  </p>
                </div>
              ))}
            </Carousel>
          )}
          {showPopup && (
            <div className="popup-container">
              <div className="popup">
                <span className="close" onClick={handleClosePopup}>
                  &times;
                </span>
                <p style={{ color: "black" }}>{popupContent}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};







// import React, { useState, useEffect, useContext } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Modal from "react-bootstrap/Modal";
// import { FaTimes } from "react-icons/fa";
// import { galleryone } from "./gallery.js";
// import { DateContext } from "./DateProvider";
// import { getSelectedDate } from "./dateUtils";

// const ITEMS_PER_PAGE = 10; // Number of items to load at a time
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 6,
//     slidesToSlide: 4,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 4,
//     slidesToSlide: 3,
//   },
//   mobile: {
//     breakpoint: { max: 767, min: 464 },
//     items: 3,
//     slidesToSlide: 1,
//   },
// };







// export const Slider = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupContent, setPopupContent] = useState("");
//   const [modalShow, setModalShow] = useState(false);
//   const [selectedimage, setSelectedimage] = useState("");
//   const [loadedImages, setLoadedImages] = useState([]);
//   const [startIndex, setStartIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const { selectedDate } = useContext(DateContext);

//   const loadImages = async () => {
//     setIsLoading(true);
//     const jsonData = await galleryone(); // Fetch all images
//     setLoadedImages(jsonData);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     loadImages();
//   }, [selectedDate]); // Reload images when the selectedDate changes

//   const sliderImageUrl = loadedImages.map((item, index) => ({
//     url: item.ImagePath,
//     name: item.SampleTakerName,
//     addressone: item.DivisionName,
//     addresstwo: item.SubDivisionName,
//     res: item.FeedBackREFCode,
//     value: item.RCValue,
//     date: item.TestedDate,
//     phone: item.MobileNumber,
//     id: item.ImageName,
//     can: item.Can,
//     index: index,
//   }));

//   const handleImageClick = (name) => {
//     setPopupContent(name);
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const leftCarousel = () => {
//     if (selectedimage.index > 0) {
//       setSelectedimage(sliderImageUrl[selectedimage.index - 1]);
//     }
//   };

//   const rightCarousel = () => {
//     if (selectedimage.index < sliderImageUrl.length - 1) {
//       setSelectedimage(sliderImageUrl[selectedimage.index + 1]);
//     }
//   };

//   const displayModal = (obj) => {
//     setSelectedimage(obj);
//     setModalShow(true);
//   };

//   const closeModel = () => {
//     setModalShow(false);
//   };

//   const handleSlideChange = (currentSlide) => {
//     if (currentSlide + ITEMS_PER_PAGE >= sliderImageUrl.length) {
//       setStartIndex(currentSlide + ITEMS_PER_PAGE);
//     }
//   };

//   return (
//     <>
//       <Modal show={modalShow} size="md" centered={true} onHide={closeModel}>
//         <img
//           src={require("./images/left.svg").default}
//           className="left"
//           alt="left"
//           onClick={leftCarousel}
//         />
//         <img
//           src={require("./images/right.svg").default}
//           className="right"
//           alt="right"
//           onClick={rightCarousel}
//         />
//         <div className="closeicon" onClick={closeModel}>
//           <FaTimes />
//         </div>
//         <Modal.Body>
//           <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//             <img
//               src={selectedimage.url}
//               alt="movie1"
//               style={{
//                 width: "430px",
//                 height: "260px",
//                 marginBottom: "20px",
//                 marginTop: "-115px",
//               }}
//             />
//           </div>
//           <div
//             style={{
//               float: "left",
//               flexDirection: "column",
//               alignItems: "flex-start",
//               marginLeft: "24px",
//               width: "100%",
//             }}
//           >
//             <div className="row">
//               <div className="col-7">
//                 <p>Can: {selectedimage.can}</p>
//               </div>
//               <div className="col-5">
//                 <p
//                   style={{
//                     float: "right",
//                     paddingRight: "45px",
//                     color: "red",
//                   }}
//                 >
//                   {selectedimage.res}: <span>&nbsp;</span>
//                   {selectedimage.value} PPM
//                 </p>
//               </div>
//             </div>
//             <p>Name: {selectedimage.name}</p>
//             <p>Mobile No: {selectedimage.phone}</p>
//             <p>Date: {selectedimage.date}</p>
//           </div>
//         </Modal.Body>
//       </Modal>

//       <div className="parent">
//         <div className="card mb-3 carouselstyle">
//           {isLoading ? (
//              <p style={{ textAlign: "center", marginTop:"10px",color: "blue" }}>Loading...</p>
//           ) : (
//             <Carousel
//               responsive={responsive}
//               autoPlay={false}
//               swipeable={true}
//               draggable={true}
//               showDots={true}
//               infinite={true}
//               partialVisible={false}
//               dotListClass="custom-dot-list-style"
//               beforeChange={(currentSlide) => handleSlideChange(currentSlide)}
//             >
//               {sliderImageUrl.map((imageUrl, index) => (
//                 <div className="slider" key={index} onClick={() => displayModal(imageUrl)}>
//                   <img src={imageUrl.url} alt="movie" />
//                   <p>
//                     <span className="imagename">{imageUrl.name}</span>
//                     <span className="addressone">{imageUrl.addressone}</span>
//                     <span className="imageres">{imageUrl.res + " "}</span>
//                     <span className="imgvalue">{imageUrl.value + " PPM"}</span>
//                     <span className="imgdate">{imageUrl.date}</span>
//                   </p>
//                 </div>
//               ))}
//             </Carousel>
//           )}
//           {showPopup && (
//             <div className="popup-container">
//               <div className="popup">
//                 <span className="close" onClick={handleClosePopup}>
//                   &times;
//                 </span>
//                 <p style={{ color: "black" }}>{popupContent}</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };


 