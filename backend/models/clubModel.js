// Define schema for Club
const clubSchema = new mongoose.Schema({
    name: {
        type : String, 
        required : true,
        unique : true
    },
    description: {
        type : String, 
        required : true
    },
    president : {
        type : String,
        required : true
    },
    contact : {
        type : Number, 
        required : true
    },
    email : {
        type : String, 
        required : true, 
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    // Other attributes as needed
});

const Club = mongoose.model('Club', clubSchema);
module.exports = Club;