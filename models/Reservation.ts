import mongoose from "mongoose";
const ReservationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing"
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    totalPrice: {
        type: Number
    }
}, { timestamps: true });

const Reservation = mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema);
export default Reservation;