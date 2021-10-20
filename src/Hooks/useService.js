import { useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import useAuth from './useAuth';

const useService = () => {
    const [services, setServices] = useState([]);
    const history = useHistory();
     useEffect(() => {
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
     }, []);

    //  to go service details page
     const handleDetails = id => {
        history.push(`/serviceDetails/${id}`);
     };

    return {
        services,
        setServices,
        handleDetails
    };
}

export default useService;