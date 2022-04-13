import {useEffect, useState} from "react";
export default function useTheme(name,defaultValue){
    const[theme,setTheme]=useState(defaultValue)
    useEffect(()=>{
        document.body.setAttribute(`data-${name}`,theme)
    },[theme])
    return [setTheme]
}
