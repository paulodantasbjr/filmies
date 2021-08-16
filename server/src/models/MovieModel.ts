import {Schema, model, Document} from 'mongoose'

interface MovieDoc extends Document {
  title: String,
  desc: String,
  img: String,
  imgTitle: String,
  thumbnail: String,
  trailer: String,
  video: String,
  year: String,
  limit: Number,
  genre: String,
  isSeries: Boolean
}

const Movie = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true

  },
  imgTitle: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  trailer: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  limit: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  isSeries: {
    type: Boolean,
    default: false
  }

}, {timestamps: true})


export const MovieModel = model < MovieDoc > ("Movie", Movie)
