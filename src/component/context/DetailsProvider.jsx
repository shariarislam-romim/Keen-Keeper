import { createContext, useEffect, useState } from "react";

export const DetailsContext = createContext();

const DetailsProvider = ({children}) => {
    const [check,setCheck] = useState([]);
    const [friends,setFriends] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch("/Friends.json").then((res)=> res.json())
        .then((data)=>{
            setFriends(data);
            setLoading(false);
        })
    }, []);

    const addCheck =(friend)=>{
        setCheck((f)=> [...f,friend])
    }

    const data = {
        check,
        setCheck,
        addCheck,
        friends,
        setFriends,
        loading,
        setLoading
    }

    return (
        <DetailsContext.Provider value={data}>
            {children}
        </DetailsContext.Provider>
    );
};

export default DetailsProvider;