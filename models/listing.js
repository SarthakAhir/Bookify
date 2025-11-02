const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
       
    },
    image: {
        type: String,
        default: "https://w0.peakpx.com/wallpaper/999/82/HD-wallpaper-burj-al-arab-hotel-in-dubai-at-night.jpg",
        set: (v) => v === "" ? "https://w0.peakpx.com/wallpaper/999/82/HD-wallpaper-burj-al-arab-hotel-in-dubai-at-night.jpg" : v   
     },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;