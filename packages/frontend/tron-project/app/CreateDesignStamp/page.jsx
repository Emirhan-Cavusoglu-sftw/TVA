import React from "react";

const CreateDesignStamp = () => {



  return (
    <div className="bg-gradient-to-r from-cyan-400 to-gray-700 min-h-screen px-4 pt-44">
      <div className="flex flex-col items-center">
        <form className="border-r-8 border-b-8 border-black w-full bg-gradient-to-r from-amber-600 to-amber-400 shadow-md rounded-lg px-8 pt-6 pb-8 mx-auto max-w-md">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-900 to-violet-500 bg-clip-text text-transparent mb-8 text-center">
            Upload Your NFT to the Marketplace
          </h2>
          <div className="mb-4">
            <label
              className="block text-white text-transparent text-sm mb-2"
              htmlFor="name"
            >
              NFT Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder=""
              // onChange={(e) =>
              //   updateFormParams({ ...formParams, name: e.target.value })
              // }
            />
          </div>
          <div className="mb-4">
            <label
              className="block bg-clip-text text-white text-transparent text-sm mb-2"
              htmlFor="description"
            >
              NFT Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder=""
              // onChange={(e) =>
              //   updateFormParams({ ...formParams, description: e.target.value })
              // }
            />
          </div>
          <div className="mb-4">
            <label
              className="block bg-clip-text text-white text-transparent text-sm mb-2"
              htmlFor="price"
            >
              Price (in ETH)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Min 0.01 ETH"
              step="0.01"
              // onChange={(e) =>
              //   updateFormParams({ ...formParams, price: e.target.value })
              // }
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-transparent text-sm mb-2"
              htmlFor="image"
            >
              Upload Image (&lt;1000 KB)
            </label>
            <div className="flex items-center justify-between bg-gray-200 border-2 border-gray-200 rounded-md py-2 px-4">
              <input type="file" />
            </div>
          </div>
          <div className="text-red-500 text-xs mb-4 text-center">butona bas</div>
          {/* {enableButton ? (
            <button
              className="w-full bg-gradient-to-r from-purple-900 to-violet-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
              onClick={createNFT}
            >
              Create NFT
            </button>
          ) : (
            <button
              disabled
              className="w-full bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-not-allowed mb-2"
            >
              Create NFT
            </button>
          )} */}
        </form>
      </div>
    </div>
  );
};

export default CreateDesignStamp;
