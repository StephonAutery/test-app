const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    f_name: {
        type: String
    },
    l_name: {
        type: String
    },
    birthdate: {
        type: Date
    },
    race: {
        type: String
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
loginSchema.methods = {
    checkPassword: function (inputPassword){
        return bcrypt.compareSync (inputPassword, this.password)
    },
    hashPassword: plainTextPassword=> {
        return bcrypt.hashSync(plainTexstPassword, 10)
    }
}

// define pre-hooks for the save method
loginSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('models/users.js ============= NO PASSWORD PROVIDED ===');
        next();
    } else {
        console.log('models/users.js hashPassword in pre save');
        next();
    }
});

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;