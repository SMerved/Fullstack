import mongoose from 'mongoose';
import { Person, Address } from '../types';

const PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A object must have a name'],
    trim: true,
  },
  age: {
    type: Number,
    required: [true, 'A object must have an age'],
    trim: true,
  },
  city: {
    type: String,
    required: [true, 'A object must have a city'],
    trim: true,
  },
  addresses: {
    type: [{
      id: String,
      street: String,
      number: Number,
      people: Array
    }]
  }
});
const AddressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: [true, 'A object must have a street'],
    trim: true,
  },
  number: {
    type: Number,
    required: [true, 'A object must have a number'],
    trim: true,
  },
  people: {
    type: [{
      id: String,
      name: String,
      age: Number,
      city: String,
      addresses: Array
    }]
  }
});

export const PeopleModel = mongoose.model('People', PeopleSchema);
export const AddressModel = mongoose.model('Address', AddressSchema);