import { useEffect } from "react";
import { useState } from "react"

const CarsListApi = () => {
    const [cars, setcars] = useState([]);
    useEffect(() => {
        fetch('https://tuki-rides-nazmul-rion.herokuapp.com/allcars')
            .then(res => res.json())
            .then(data => setcars(data));
    }, [cars]);
    return [cars, setcars];
}

export default CarsListApi;