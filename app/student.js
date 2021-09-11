// With help of mongoose we interact with database. Surely, we can do it directly but it cause lot of headache. 
// Import Mongoose
const mongoose = require('mongoose');

// Our Motive is to create Schema and mongoose helping in creating schemas.
const Schema = mongoose.Schema;

// Structure of Student Schema
const StudentSchema = new Schema({
    name: String //Properties Of Student
});


// Here we put student data in mongo database
const Student = mongoose.model('student', StudentSchema);


// export
module.exports = Student;