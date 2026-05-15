function ServiceForm({

    title,
    setTitle,

    description,
    setDescription,

    status,
    setStatus,

    type,
    setType,

    image,
    setImage,

    addService,
    updateService,

    editId

}) {

    return (

        <div className="bg-white shadow-lg rounded-xl p-6 mb-8">

            <h2 className="text-3xl font-bold mb-5 text-blue-600">

                {
                    editId
                        ? 'Update Service'
                        : 'Add Service'
                }

            </h2>



            <div className="flex flex-col gap-4">

                <input
                    type="text"
                    placeholder="Enter title"

                    value={title}

                    onChange={(e) => setTitle(e.target.value)}

                    className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                />



                <input
                    type="text"
                    placeholder="Enter description"

                    value={description}

                    onChange={(e) => setDescription(e.target.value)}

                    className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                />



                <select

                    value={status}

                    onChange={(e) => setStatus(e.target.value)}

                    className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"

                >

                    <option value="">
                        Select Status
                    </option>

                    <option value="active">
                        Active
                    </option>

                    <option value="inactive">
                        Inactive
                    </option>

                </select>



                <select

                    value={type}

                    onChange={(e) => setType(e.target.value)}

                    className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"

                >

                    <option value="">
                        Select Type
                    </option>

                    <option value="digital">
                        Digital
                    </option>

                    <option value="physical">
                        Physical
                    </option>

                </select>



                {/* IMAGE INPUT */}

                <input

                    type="file"

                    onChange={(e) =>
                        setImage(e.target.files[0])
                    }

                    className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"

                />



                {

                    editId ? (

                        <button

                            onClick={updateService}

                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold"

                        >
                            Update Service
                        </button>

                    ) : (

                        <button

                            onClick={addService}

                            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"

                        >
                            Add Service
                        </button>

                    )

                }

            </div>

        </div>

    );

}

export default ServiceForm;