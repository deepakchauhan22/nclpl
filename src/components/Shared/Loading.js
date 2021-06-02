import React from 'react';

import HashLoader from "react-spinners/HashLoader";

import {FaSpinner} from  "react-icons/fa";
export const Loading =()=>{
      return(
        <div className="center">
        {/* <p><FaSpinner></FaSpinner></p> */}
        <HashLoader color={'#c41a34'}  size={70} />
      </div>
      );
};