function ServiceCard({

    service,
    deleteService,
    editService

}) {

    return (

        <div className="bg-white shadow-md rounded-2xl p-6 mb-6 flex justify-between items-center hover:shadow-lg transition duration-300">

            {/* Left Content */}
            <div>

                <h3 className="text-2xl font-bold text-blue-600 mb-2">

                    {service.title}

                </h3>

                <p className="text-gray-600 text-base mb-4">

                    {service.description}

                </p>



                <div className="flex gap-3 flex-wrap">

                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium">

                        Status: {service.status}

                    </div>



                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">

                        Type: {service.type}

                    </div>

                </div>

            </div>



            {/* Right Buttons */}
            <div className="flex gap-3">

                <button

                    onClick={() => editService(service)}

                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-xl font-semibold shadow-sm transition duration-300"

                >
                    Edit
                </button>



                <button

                    onClick={() => deleteService(service._id)}

                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-semibold shadow-sm transition duration-300"

                >
                    Delete
                </button>

            </div>

        </div>

    );

}

export default ServiceCard;