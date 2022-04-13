import {useEffect, useState} from "react";
export default function useTheme(){
    const[theme,setTheme]=useState('')
    useEffect(()=>{
        document.body.setAttribute(`data-theme`,theme)
    },[theme])
    return [setTheme]
}
