
import { useState } from "react";
import { createContext } from "react";

export const DataContext=createContext(null);

const DataProvider=({children})=>{
    const [acc,setAcc]=useState('');
    const [authenticate,setAuthenticate]=useState(false);
   
    return(
        <DataContext.Provider value={{
            acc,setAcc,authenticate,setAuthenticate
        }}>
            {children}
         </DataContext.Provider>
    )
}

export default DataProvider;