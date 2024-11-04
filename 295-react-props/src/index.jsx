import React from "react";
import ReactDOM from "react-dom";



function Card(){
  return <div>
 <h1>My Contacts</h1>

<h2>Beyonce</h2>
<img
  src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
  alt="avatar_img"
/>
<p>+123 456 789</p>
<p>b@beyonce.com</p>

  </div>
}

ReactDOM.render(
  <div>
   <h1>My contacts</h1>
 
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
