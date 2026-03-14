const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true, 
    maxlength: 100 
  },
  description: { 
    type: String, 
    required: true, 
    maxlength: 500 
  },
  category: { 
    type: String, 
    enum: ['Electrical', 'Plumbing', 'Furniture', 'Cleaning', 'Other'], 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['Pending', 'In Progress', 'Resolved'], 
    default: 'Pending' 
  },
  studentId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  roomNumber: { 
    type: String, 
    required: true 
  },
  hostelBlock: { 
    type: String, 
    required: true 
  },
  statusHistory: [{
    status: String,
    changedAt: { type: Date, default: Date.now }
  }],
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

complaintSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  
  // Track status changes automatically
  if (this.isModified('status') || this.isNew) {
    this.statusHistory.push({
      status: this.status,
      changedAt: Date.now()
    });
  }
  
  next();
});

module.exports = mongoose.model('Complaint', complaintSchema);
