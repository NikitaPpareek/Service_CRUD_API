import ServiceCard from './ServiceCard';

function ServiceList({

    services,
    deleteService,
    editService

}) {

    return (

        <div>

           <h2 className="text-3xl font-bold mb-5 text-blue-600 text-center">
    All Services
</h2>

            {

                services.map((service) => (

                    <ServiceCard

                        key={service._id}

                        service={service}

                        deleteService={deleteService}

                        editService={editService}

                    />

                ))

            }

        </div>

    );

}

export default ServiceList;