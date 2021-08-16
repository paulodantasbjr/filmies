import {Schema, model, Document} from 'mongoose'

interface ListDoc extends Document {
  title: String,
  type: String,
  genre: String,
  content: Array < String >
}

const List = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  type: {
    type: String
  },
  genre: {
    type: String
  },
  content: {
    type: Array
  }
}, {timestamps: true})

export const ListModel = model < ListDoc > ("List", List)
