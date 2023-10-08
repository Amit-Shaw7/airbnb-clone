import mongoose from "mongoose";
const ListingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageSrc: {
        type: String,
    },
    category: {
        type: String,
    },
    roomCount: {
        type: Number,
    },
    bathroomCount: {
        type: Number,
    },
    guestCount: {
        type: Number,
    },
    locationValue: {
        type: String,
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    price : {
        type : Number
    },
    reservations : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Reservation"
        }
    ],
}, { timestamps: true });

const Listing = mongoose.models.Listing || mongoose.model("Listing", ListingSchema);
export default Listing;