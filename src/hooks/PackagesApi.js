import { useEffect } from "react";
import { useState } from "react"

const PackagesApi = () => {
    const [tourpackages, settourpackages] = useState([]);
    useEffect(() => {
        fetch('https://lit-springs-32062.herokuapp.com/allpackages')
            .then(res => res.json())
            .then(data => settourpackages(data));
    }, [tourpackages]);
    return [tourpackages, settourpackages];
}

export default PackagesApi;