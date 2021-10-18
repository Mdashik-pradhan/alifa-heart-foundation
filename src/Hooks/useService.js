import { useState, useEffect} from 'react';
import { useHistory } from 'react-router';

const useService = () => {
    const [services, setServices] = useState([]);
    const history = useHistory();
     useEffect(() => {
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
     }, []);

    //  to go service details page
     const handleDetails = (id) => {
        history.push(`/serviceDetails/${id}`);
        console.log(id)
     };

    return {
        services,
        setServices,
        handleDetails
    };
}

export default useService;