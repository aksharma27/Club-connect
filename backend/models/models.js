const mongoose = require('mongoose');

// Define schema for Student
const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    // Other attributes as needed
});

// Define schema for Club
const clubSchema = new mongoose.Schema({
    name: String,
    description: String,
    // Other attributes as needed
});

// Define schema for User
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: { type: String, enum: ['president', 'normal', 'visitor'] },
    // Other attributes as needed
});

// Define schema for Membership
const membershipSchema = new mongoose.Schema({
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    club_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Club' },
    role: { type: String, enum: ['president', 'normal_member'] },
    // Other attributes as needed
});

// Define models
const Student = mongoose.model('Student', studentSchema);
const Club = mongoose.model('Club', clubSchema);
const User = mongoose.model('User', userSchema);
const Membership = mongoose.model('Membership', membershipSchema);

module.exports = { Student, Club, User, Membership };
