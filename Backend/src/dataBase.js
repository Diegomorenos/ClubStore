import mongoose from 'mongoose';

const atlas = 'mongodb+srv://Joquiro:Tatan.369@cluster0.bnl8c.mongodb.net/storeclub?retryWrites=true&w=majority';

mongoose.connect(atlas, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => {
        console.log('BD conectada')
    })
    .catch(err => {
        console.log('Error', err)
    })