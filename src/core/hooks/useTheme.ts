import {useEffect, useState} from "react";
export default function useTheme(Theme:string){
    const[theme,setTheme]=useState('')
    useEffect(()=>{
        document.body.setAttribute(`data-${Theme}`,theme)
    },[theme])
    return [setTheme]
}
