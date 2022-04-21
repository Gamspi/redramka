import axios from "axios";
import {useState} from "react";
import {useNavigate, useParams} from "react-router";
import {IAirline} from "../models/Airline";
import {
    useEffect
} from "../../../../../../Program Files/JetBrains/WebStorm 2021.3.1/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";

export function useGetInfo() {

    const [card, setCard] = useState<IAirline>({} as IAirline)
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {

    }, [])

    return [card]
}
