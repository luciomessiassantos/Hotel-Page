/**
 * @typedef {Object} Hotel
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {string} category
 * @property {string} type
 * @property {string} chain
 * @property {string} country
 * @property {string} city
 * @property {string} address
 * @property {string} zip_code
 * @property {Pricing} pricing
 * @property {Rating} rating
 * @property {Availability} availability
 * @property {string[]} amenities
 * @property {RoomType[]} room_types
 * @property {Media} media
 * @property {string[]} nearby_attractions
 * @property {Policies} policies
 * @property {Services} services
 * @property {string[]} supported_languages
 * @property {boolean} customer_support_24h
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @typedef {Object} Pricing
 * @property {number} base_price
 * @property {string} currency
 * @property {number} discount_percentage
 * @property {number} final_price
 * @property {boolean} tax_included
 * @property {boolean} refundable
 */

/**
 * @typedef {Object} Rating
 * @property {number} average
 * @property {number} stars
 * @property {number} review_count
 */

/**
 * @typedef {Object} Availability
 * @property {number} available_rooms
 * @property {number} min_nights
 * @property {number} max_guests_per_room
 * @property {string} check_in_time
 * @property {string} check_out_time
 */

/**
 * @typedef {Object} RoomType
 * @property {string} type
 * @property {number} beds
 * @property {number} max_guests
 * @property {number} price_multiplier
 */

/**
 * @typedef {Object} Media
 * @property {string[]} images
 */

/**
 * @typedef {Object} Policies
 * @property {string} cancellation
 * @property {boolean} smoking
 * @property {boolean} pets_allowed
 * @property {string} child_policy
 */

/**
 * @typedef {Object} Services
 * @property {boolean} airport_shuttle
 * @property {boolean} breakfast_included
 * @property {boolean} laundry_service
 * @property {boolean} room_cleaning_daily
 */

