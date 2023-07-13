import { useState } from "react";
import StateContentTitle from "./StateContextTitles"
const StateProvider = ({ children }) => {
    let [titles, setTitles] = useState({})
    setTitles(
        {home:"Home", past:"Past Events", uncoming:"Uncoming Events", stats:"Stadistics to Events"}
    )
    const getTitles = () => {
        return initialState.titles
    }
    
    const initialState = {
        titles,
        getTitles,
    }

    return (
        <StateContentTitle.Provider value={initialState}>
            {children}
        </StateContentTitle.Provider>
    )
}
export default StateProvider;