import appleIcon from "../assets/appleIcon.png";
import au from "../assets/au.png";
import avater from "../assets/avater.png";
import bell from "../assets/bell.png";
import blueRight from "../assets/blueRight.png";
import box from "../assets/box.png";
import boxBlack from "../assets/boxBlack.png";
import burger from "../assets/burger.png";
import clock from "../assets/clock.png";
import copy from "../assets/copy.png";
import cross from "../assets/cross.png";
import docter from "../assets/docter.png";
import download from "../assets/download.png";
import email from "../assets/email.png";
import eye from "../assets/eye.png";
import faceBook from "../assets/faceBook.png";
import fy from "../assets/fy.png";
import gear from "../assets/gear.png";
import googleIcon from "../assets/googleIcon.png";
import grid from "../assets/grid.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import homeImg from "../assets/homeImg.png";
import hr from "../assets/hr.png";
import js from "../assets/js.png";
import leftArr from "../assets/leftArr.png";
import link from "../assets/link.png";
import list from "../assets/list.png";
import location from "../assets/location.png";
import loginImg from "../assets/loginImg.jpg";

import logo from "../assets/logo.png";
import ly from "../assets/ly.png";
import newLogo from "../assets/nn.png";
import navbg from "../assets/navBg.png";
import message from "../assets/message.png";
import nz from "../assets/nz.png";
import pencil from "../assets/pencil.png";
import philippines from "../assets/philippines.png";
import plus from "../assets/plus.png";
import profileIcon from "../assets/profileIcon.png";
import remote from "../assets/remote.png";
import rightArr from "../assets/rightArr.png";
import roundedLeft from "../assets/roundedLeft.png";
import roundedRight from "../assets/roundedRight.png";
import save from "../assets/save.png";
import search from "../assets/search.png";
import share from "../assets/share.png";
import tick from "../assets/tick.png";
import ty from "../assets/ty.png";
import yy from "../assets/yy.png";
import down from "../assets/down.png";
import arrWhite from "../assets/arrWhite.png";
import canada from "../assets/canada.png";
import saveYellow from "../assets/saveYellow.png";

export const asset = {
  appleIcon,
  saveYellow,
  arrWhite,
  fy,
  down,
  navbg,
  newLogo,
  faceBook,
  eye,
  email,
  download,
  docter,
  cross,
  copy,
  clock,
  canada,
  burger,
  boxBlack,
  box,
  blueRight,
  bell,
  avater,
  yy,
  nz,
  au,
  message,
  logo,
  ly,
  loginImg,
  location,
  link,
  list,
  grid,
  leftArr,
  js,
  hr,
  home2,
  home3,
  homeImg,
  googleIcon,
  gear,
  ty,
  share,
  tick,
  search,
  save,
  roundedLeft,
  roundedRight,
  rightArr,
  remote,
  profileIcon,
  plus,
  philippines,
  pencil,
};



const sixHoursAgo = new Date(Date.now() - 6 * 60 * 60 * 1000);
const formattedDate = sixHoursAgo.toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

export const jobe = [
  {
    _id:"2844984877478", 
    JobName: "Contact Center Agent",
    location: "Pakistan",
    JobStatus: "Remote",
    jobType: "Full Time",
    saveImg: save,
    salary: "2k",
    date: formattedDate,
    description:
      "Call center jobs involve handling customer inquiries, resolving complaints, and providing support via phone, email, or chat. Key skills include communication, problem-solving, and multitasking in a fast-paced environment.",
    clockImg: clock,
    locationImg: location,
    Img: docter,
    smallDescription: "Sales,services & Support",
    experience: "Entry Level",
    category: "tech",
    content:"mara name abdullah"
  },
  {
    _id:"848992867666", // Static ID
    JobName: "HR Director",
    location: "Pakistan",
    JobStatus: "Remote",
    jobType: "Full Time",
    saveImg: save,
    salary: "2k",
    date: formattedDate,
    description:
      "Call center jobs involve handling customer inquiries, resolving complaints, and providing support via phone, email, or chat. Key skills include communication, problem-solving, and multitasking in a fast-paced environment.",
    clockImg: clock,
    locationImg: location,
    Img: hr,
    smallDescription: "People",
    experience: "Entry Level",
    content:"mara name abdullah ",
    category: "web developer",
  },
  {
    _id:"88399939882", // Static ID
    JobName: "Full-Stack Developer",
    location: "Pakistan",
    JobStatus: "Remote",
    jobType: "Full Time",
    saveImg: save,
    salary: "2k",
    date: formattedDate,
    description:
      "Call center jobs involve handling customer inquiries, resolving complaints, and providing support via phone, email, or chat. Key skills include communication, problem-solving, and multitasking in a fast-paced environment.",
    clockImg: clock,
    locationImg: location,
    Img: js,
    smallDescription: "Tech & Enggineering",
    experience: "Entry Level",
    category: "Teaching",
    content:"mara name abdullah "
  },
];









// const data = [
//   { id: 1, name: 'Apple', categories: ['Fruit', 'Food', 'Healthy'] },
//   { id: 2, name: 'Banana', categories: ['Fruit', 'Yellow'] },
//   { id: 3, name: 'Carrot', categories: ['Vegetable', 'Healthy', 'Orange'] },
//   { id: 4, name: 'Broccoli', categories: ['Vegetable', 'Green'] },
// ];

// You can configure Fuse.js to search through the categories array.

// React Example

// import React, { useState } from 'react';
// import Fuse from 'fuse.js';

// const App = () => {
//   const data = [
//     { id: 1, name: 'Apple', categories: ['Fruit', 'Food', 'Healthy'] },
//     { id: 2, name: 'Banana', categories: ['Fruit', 'Yellow'] },
//     { id: 3, name: 'Carrot', categories: ['Vegetable', 'Healthy', 'Orange'] },
//     { id: 4, name: 'Broccoli', categories: ['Vegetable', 'Green'] },
//   ];

//   const [query, setQuery] = useState('');

//   const options = {
//     keys: ['name', 'categories'], // Specify 'categories' for array search
//     threshold: 0.3, // Controls fuzziness
//   };

//   const fuse = new Fuse(data, options);
//   const results = query ? fuse.search(query).map(result => result.item) : data;

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by name or category..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <ul>
//         {results.map(item => (
//           <li key={item.id}>
//             {item.name} - Categories: {item.categories.join(', ')}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// How This Works
// 	1.	keys: ['categories']: Tells Fuse.js to search through the categories array.
// 	2.	Automatic Flattening: Fuse.js automatically flattens arrays when searching, so each element of the array is treated as an individual searchable term.
// 	3.	Partial Matching: It will match any query string to any element in the categories array, even if the query is incomplete or has typos (depending on the threshold).

// Search Behavior
// 	•	Querying "Healthy" will match both Apple and Carrot.
// 	•	Querying "Vegetable" will match both Carrot and Broccoli.
// 	•	Querying "Yellow" will match Banana.

// Would you like to explore any additional configurations or features?