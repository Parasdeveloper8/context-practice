import React,{useContext} from 'react';
import { Mycontext } from './context';
const Component=()=>{
    const {data,setData} = useContext(Mycontext);
    return(
        <>
        <p>{data}</p>
        </>
    )
}
export default Component;