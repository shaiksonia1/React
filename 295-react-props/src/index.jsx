import React from "react";
import ReactDOM from "react-dom";



function Card(props){
  return <div>
 <h1>My Contacts</h1>

<h2>{props.name}</h2>
<img
  src={props.img}/>
<p>{props.phno}</p>
<p>{props.email}</p>

  </div>
}

ReactDOM.render(
  <div>
   <Card  name = "Beyonce"
   img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
  alt="avatar_img"
  phno = "+123 456 789"
  email = "b@beyonce.com"
   
   />

   <Card 
   
   name ="Sonia"
   img = "https://images.pexels.com/photos/19640832/pexels-photo-19640832/free-photo-of-untitled.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
   phno = "+123 456 789"
   email = "b@beyonce.com"

   
   />
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
