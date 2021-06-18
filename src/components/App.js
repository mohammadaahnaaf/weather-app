import React from 'react';
import Forecast from "./Forecast/Forecast";

import style from '../styles/style.js'

const date = new Date();
const time = date.getHours();

let greetings = "";

if(time < 12 && time > 6) {
    greetings = "Good Morning";
} else if(time < 18 && time > 12) {
    greetings = "Good Afternoon";
} else {
  greetings = "Good Night"
}

function App() {
  const classes = style();

  return (
    <div className={classes.app}>
      <header className={classes.header}>
       
        <h1 className={classes.greetings}>{greetings}</h1>
      </header>
      <main className={classes.main}>
        <Forecast />
      </main>
      <footer className={classes.footer}>
        This site is created by Ahnafia
      </footer>
    </div>
  );
}

export default App;



// .image_holder {
//   position: relative;
//   background-color: #333;
//   color: #fff;
//   border: 1px solid #ddd;
// }

// .bg_image {
//   width: 100%;
//   display: block;
// }

/* <div class="image_holder">
<div class="bg_image_container">
  <img src="" alt="" class="bg_image js_bg_image">
</div>
<div id="overlay"></div>
<div class="foreground_text_container">
  <div class="foreground_text"></div>
</div>
</div> */

// .image_showcase {
//   min-height: 100px;
//   text-align: left;
// }