const BookTrip = require('../Models/BookTrip');
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

describe('Booking Testing', () => {
    it('BookTrip testing', () => {
        const booktrip = {
            'Destination':'Pokhara',
            'CheckInDate':'01-01-2022',
            'CheckOutDate':'08-01-2022',
            'Adult':"3",
            'Children':'1',
            'HotelsNearby':'Something',
            'CabFeePerDay':'1000',
        };

        return BookTrip.create(booktrip)
        .then((pro_ret) => {
            expect(pro_ret.Destination).toEqual('Pokhara');
        });
    });
})