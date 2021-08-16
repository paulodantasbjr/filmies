import {Schema, model, Document} from "mongoose";

interface UserDoc extends Document {
  name: String,
  username: String,
  email: String,
  password: String,
  profilePic?: String,
  isAdmin?: Boolean
}

const User = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25
  },
  username: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profilePic: {
    type: String,
    defaut: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

export const UserModel = model < UserDoc > ("User", User);
