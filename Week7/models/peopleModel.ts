import mongoose from 'mongoose';

const peopleSchema = new mongoose.Schema({
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
  }
});

const PeopleModel = mongoose.model('People', peopleSchema);

export default PeopleModel;