function SearchBar({

    keyword,
    setKeyword,
    searchService,
    fetchServices

}) {

    return (

        <div className="bg-white shadow-lg rounded-xl p-6 mb-8">

            <h2 className="text-3xl font-bold text-blue-600 mb-5">
                Search Service
            </h2>



            <div className="flex flex-col md:flex-row gap-4">

                <input

                    type="text"

                    placeholder="Search service"

                    value={keyword}

                    onChange={(e) => setKeyword(e.target.value)}

                    className="flex-1 border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"

                />



                <button

                    onClick={searchService}

                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"

                >
                    Search
                </button>



                <button

                    onClick={fetchServices}

                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold"

                >
                    Reset
                </button>

            </div>

        </div>

    );

}

export default SearchBar;