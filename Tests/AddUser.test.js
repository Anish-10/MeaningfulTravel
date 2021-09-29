const User = require('../Models/User');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/meaningfultravel'

beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('User Testing', () => {
    it('Sign up testing', () => {
        const user = {
            'Fullname':'Anish Nepal',
            'Address':'Taudaha',
            'PhoneNumber':'9861248042',
            'Username':"anish10",
            'Password':'asd1010'
        };

        return User.create(user)
        .then((pro_ret) => {
            expect(pro_ret.Fullname).toEqual('Anish Nepal');
        });
    });
})