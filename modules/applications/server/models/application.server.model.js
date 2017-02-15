'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Application Schema
 */
var ApplicationSchema = new Schema({
  firstName: {
    type: String,
    default: '',
    trim: true
  },
  lastName: {
    type: String,
    default: '',
    trim: true
  },
  phoneNumber: {
    type: String,
    default: '',
    trim: true
  }, 
  email: {
    type: String,
    default: '',
    trim: true
  }, 
  birthday: {
    type: String,
    default: '',
    trim: true
  }, 
  gender: {
    type: String,
    default: '',
    trim: true
  }, 
  ssn: {
    type: String,
    default: '',
    trim: true
  }, 
  validId: {
    type: String,
    default: '',
    trim: true
  }, 
  validIdState: {
    type: String,
    default: '',
    trim: true
  },
  residents: [  
    {
      firstName: {
        type: String,
        default: '',
        trim: true
      },
      lastName: {
        type: String,
        default: '',
        trim: true
      },
      phoneNumber: {
        type: String,
        default: '',
        trim: true
      }, 
      email: {
        type: String,
        default: '',
        trim: true
      }, 
      birthday: {
        type: String,
        default: '',
        trim: true
      }, 
      gender: {
        type: String,
        default: '',
        trim: true
      }, 
      ssn: {
        type: String,
        default: '',
        trim: true
      }, 
      validId: {
        type: String,
        default: '',
        trim: true
      }, 
      validIdState: {
        type: String,
        default: '',
        trim: true
      },
      yourRelationship: {
        type: String,
        default: '',
        trim: true
      }
    } 
  ],
  minors: [
    {
      minorFirstName: {
        type: String,
        default: '',
        trim: true
      }, 
      minorLastName: {
        type: String,
        default: '',
        trim: true
      }, 
      minorAge: {
        type: String,
        default: '',
        trim: true
      },
      minorRelationship: {
        type: String,
        default: '',
        trim: true
      }
    }
  ],
  pets: [
    {
      petType: {
        type: String,
        default: '',
        trim: true
      }, 
      petBreed: {
        type: String,
        default: '',
        trim: true
      }, 
      petWeight: {
        type: String,
        default: '',
        trim: true
      }, 
      petAge: {
        type: String,
        default: '',
        trim: true
      }
    }
  ],

  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Application', ApplicationSchema);
