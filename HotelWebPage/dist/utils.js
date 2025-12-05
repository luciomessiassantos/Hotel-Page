/**
 * @param {Array.<{id: number, Title: string, Description: string, Booking_price: number, image_path: string}>} hotels
 * @param {number} id
 */

export default function findById(hotels, id) {
    return hotels.find((h) => h.id == id);
}
