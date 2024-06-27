import React from "react";
import {createContext,useState} from 'react';

export const Mycontext = createContext();

export const Mycontextprovider= (props)=>{
  const[data,setData]=useState("default :hello");
  return(
    <Mycontext.Provider value={{data,setData}}>
      {props.children}
    </Mycontext.Provider>
  )
}