
import { useState } from "react";
import { createContext } from "react";

export const DataContext=createContext(null);

const DataProvider=({children})=>{
    const [acc,setAcc]=useState('');

    return(
        <DataContext.Provider value={{
            acc,setAcc
        }}>
            {children}
         </DataContext.Provider>
    )
}

export default DataProvider;