import { createContext } from "react";
import { useState,useEffect } from "react";
import FeatureFlagService from "../data";

export const FeatureFlagContext = createContext(null)

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false)
    const [enabledFlags, setEnabledFlags] = useState({})

    async function fetchFeaturedFlags() {
        try {
            setLoading(true)
            const response = await FeatureFlagService()
            setLoading(false)
            console.log(response)
            setEnabledFlags(response)
            
        } catch (error) {
            console.log(error)
            setLoading(false);
            throw new Error(error)
            
        }
    }
    
    useEffect(() => { 
        setLoading(true)
        fetchFeaturedFlags();
    },[])
    
    return (
      <FeatureFlagContext.Provider value={{loading,enabledFlags}}>
        {children}
      </FeatureFlagContext.Provider>
    );
}