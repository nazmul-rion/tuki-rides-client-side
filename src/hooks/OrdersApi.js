import { useEffect } from "react";
import { useState } from "react"

const OrdersApi = () => {
    const [ord, setord] = useState([]);
    useEffect(() => {
        fetch('https://tuki-rides-nazmul-rion.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setord(data));
    }, [ord]);
    return [ord, setord];
}

export default OrdersApi;