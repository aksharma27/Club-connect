const mongoose = require('mongoose');

// Define schema for Student
const studentSchema = new mongoose.Schema({
    name: {
        type : String, 
        required: true,
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    email: {
        type : String, 
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        
    },
    createdAt: {
        type: Date,
        default: Date.now,
        },
    // Other attributes as needed
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;



// Define schema for User

// Define schema for Membership
// const membershipSchema = new mongoose.Schema({
//     student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
//     club_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Club' },
//     role: { type: String, enum: ['president', 'normal_member'] },
//     // Other attributes as needed
// });

// Define models
// const Student = mongoose.model('Student', studentSchema);
// const Club = mongoose.model('Club', clubSchema);
// const User = mongoose.model('User', userSchema);
// const Membership = mongoose.model('Membership', membershipSchema);

// module.exports = { Student, Club, User, Membership };
