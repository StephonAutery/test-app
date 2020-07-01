const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    f_name: {
        type: String,
        required: true
    },
    l_name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    password: { 
        type: String,
        unique: false,
        required: false
    },
    username: { 
        type: String,
        unique: false,
        required: false
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