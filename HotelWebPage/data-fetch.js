
/// <reference path="./types/hotel.types.js" />



const getLocalJsonData = async () => {
    try {
        const response = await fetch("data/hotels.json");
        if (!response.ok) {
            throw new Error("Fetch local data error: " + response.status);
        }

        /**
         * 
         * @type {Hotel[]}
         */

        const data = await response.json();

        return data;
    } catch (err) {
        console.error(err);
    }
}

export default getLocalJsonData;