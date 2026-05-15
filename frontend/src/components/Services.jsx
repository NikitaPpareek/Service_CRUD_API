import axios from 'axios';
import { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';

function Services() {

    const [services, setServices] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');

    // IMAGE STATE
    const [image, setImage] = useState(null);

    const [keyword, setKeyword] = useState('');

    const [editId, setEditId] = useState(null);




    useEffect(() => {

        fetchServices();

    }, []);




    const fetchServices = async () => {

        try {

            const response = await axios.get(
                'http://localhost:3000/services/getservices'
            );

            setServices(response.data);

        } catch (error) {

            console.log(error);

        }

    };




    // ADD SERVICE
    const addService = async () => {

        try {

            const formData = new FormData();

            formData.append('title', title);

            formData.append('description', description);

            formData.append('status', status);

            formData.append('type', type);

            formData.append('image', image);



            await axios.post(

                'http://localhost:3000/services/addservice',

                formData

            );

            fetchServices();

            clearForm();

        } catch (error) {

            console.log(error);

        }

    };




    const deleteService = async (id) => {

        try {

            await axios.delete(
                `http://localhost:3000/services/deleteservice/${id}`
            );

            fetchServices();

        } catch (error) {

            console.log(error);

        }

    };




    const searchService = async () => {

        try {

            const response = await axios.get(
                `http://localhost:3000/services/searchservice?keyword=${keyword}`
            );

            setServices(response.data);

        } catch (error) {

            console.log(error);

        }

    };




    const editService = (service) => {

        setTitle(service.title);
        setDescription(service.description);
        setStatus(service.status);
        setType(service.type);

        setEditId(service._id);

    };




    // UPDATE SERVICE
    const updateService = async () => {

        try {

            const formData = new FormData();

            formData.append('title', title);

            formData.append('description', description);

            formData.append('status', status);

            formData.append('type', type);

            formData.append('image', image);



            await axios.put(

                `http://localhost:3000/services/updateservice/${editId}`,

                formData

            );

            fetchServices();

            clearForm();

            setEditId(null);

        } catch (error) {

            console.log(error);

        }

    };




    const clearForm = () => {

        setTitle('');
        setDescription('');
        setStatus('');
        setType('');

        // CLEAR IMAGE
        setImage(null);

    };



return (

    <div className="min-h-screen bg-gray-100 py-10">

        <div className="max-w-4xl mx-auto px-4">

            <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">

                MERN Service Project

            </h1>



            <SearchBar

                keyword={keyword}
                setKeyword={setKeyword}

                searchService={searchService}
                fetchServices={fetchServices}

            />



            <ServiceForm

                title={title}
                setTitle={setTitle}

                description={description}
                setDescription={setDescription}

                status={status}
                setStatus={setStatus}

                type={type}
                setType={setType}

                // IMAGE PROPS
                image={image}
                setImage={setImage}

                addService={addService}
                updateService={updateService}

                editId={editId}

            />



            <ServiceList

                services={services}

                deleteService={deleteService}

                editService={editService}

            />

        </div>

    </div>

);

}

export default Services;