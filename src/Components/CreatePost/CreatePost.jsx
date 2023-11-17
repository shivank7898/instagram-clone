import React, { useState, useEffect } from "react";
import styles from "./createpost.modules.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

 export default function Createpost() {
   const [body, setBody] = useState("");
   const [image, setImage] = useState("");
   const [url, setUrl] = useState("");
   const navigate = useNavigate();
   
   return (
     <div className="createPost">
       {/* //header */}
       <div className="post-header">
         <h4 style={{ margin: "3px auto" }}>Create New Post</h4>
        <Link to={"/"}>
            <button id="post-btn">
                Share
            </button>
         </Link>
       </div>
       {/* image preview */}
       <div className="main-div">
         <img
           id="output"
           src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
         />
         <input
           type="file"
           accept="image/*"
           onChange={(event) => {
             setImage(event.target.files[0]);
           }}
         />
       </div>
       {/* details */}
       <div className="details">
         <div className="card-header">
           <div className="card-pic">
             {/* <img
               src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
               alt=""
             /> */}
           </div>
           <h5>Ramesh</h5>
         </div>
         <textarea
           value={body}
           onChange={(e) => {
             setBody(e.target.value);
           }}
           type="text"
           placeholder="Write a caption...."
         ></textarea>
       </div>
     </div>
   );
 }
