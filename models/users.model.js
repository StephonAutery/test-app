const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String
    },    
    race: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// define schema methods
usersSchema.methods = {
    checkPassword: function (inputPassword){
        return bcrypt.compareSync (inputPassword, this.password)
    },
    hashPassword: plainTextPassword=> {
        return bcrypt.hashSync(plainTexstPassword, 10)
    }
}

// define pre-hooks for the save method
usersSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('models/users.js ============= NO PASSWORD PROVIDED ===');
        next();
    } else {
        console.log('models/user.js hashPassword in pre save');
        next();
    }
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;