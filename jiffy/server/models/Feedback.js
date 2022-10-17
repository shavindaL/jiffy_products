const mongoose = require('mongoose') 

const FeedbackSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    }
  })