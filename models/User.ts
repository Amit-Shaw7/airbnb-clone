import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    emailVerified: {
        type: Date
    },
    image: {
        type: String,
    },
    password : {
        type : String,
    },
    favoriteIds : [
        {
            type : mongoose.Schema.Types.ObjectId,
        }
    ],
    accounts : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Account"
        }
    ],
    listings : [ 
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Listing"
        }
    ],
    reservations : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Reservation"
        }
    ],
} , {timestamps : true});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;