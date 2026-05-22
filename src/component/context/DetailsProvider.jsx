import { createContext, useState } from "react";

export const DetailsContext = createContext();

const DetailsProvider = ({children}) => {
    const [check,setCheck] = useState([]);

    const addCheck =(friend)=>{
        setCheck((f)=> [...f,friend])
    }

    const data = {
        check,
        setCheck,
        addCheck,
    }

    return (
        <DetailsContext.Provider value={data}>
            {children}
        </DetailsContext.Provider>
    );
};

export default DetailsProvider;