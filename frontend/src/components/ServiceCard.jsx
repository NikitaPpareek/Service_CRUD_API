function ServiceCard({

    service,
    deleteService,
    editService

}) {

    return (

        <div className="bg-white shadow-md rounded-2xl p-6 mb-6 hover:shadow-lg transition duration-300">

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                {/* LEFT SECTION */}
                <div className="flex gap-6 items-center">

                    {/* IMAGE */}

                    {

                        service.image ? (

                            <img

                                src={`http://localhost:3000/${service.image}`}

                                alt={service.title}

                                className="w-40 h-40 object-cover rounded-xl border"

                            />

                        ) : (

                            <div className="w-40 h-40 rounded-xl border flex items-center justify-center bg-gray-100 text-gray-400 font-semibold">

                                No Image

                            </div>

                        )

                    }



                    {/* CONTENT */}

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

                </div>



                {/* RIGHT BUTTONS */}

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

        </div>

    );

}

export default ServiceCard;