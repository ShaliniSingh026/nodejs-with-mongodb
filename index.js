//After loading the mongodb
//import { MongoClient } from 'mongodb'
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
//For knowing the connection URL to MonoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
// Database name 'demo'
const database = 'demo'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(database)
    // Inserting a single document
 db.collection('user_detail').insertOne({
    name: 'Jenny',
    email: 'std056@gmail.com',
    gender: 'Female',
    age: 21,
    phn_no: "9457888875"
    });
    //Inserting multiple documents
    db.collection('user_detail').insertMany([
        {
            name: 'Nick',
            email: 'nickdafo077@gmail.com',
            gender:'Male',
            age: 27,
            phn_no: "9876785546"   
        },
        {
            name: 'Song jung',
            email: 'jungdd345@gmail.com',
            gender: 'Male',
            age: 34,
            phn_no:"9407834564"
        
        },
        {
            name: 'Binny',
            email: 'ccd887@gmail.com',
            gender: 'Female',
            age: 30,
            phn_no: "7905679945"
        }
        
    
    ], (error, result) => {
        if (error) {
            return console.log('unable to insert')
        }

        //console.log(result.ops)

    })

    /*db.collection('user_detail').findOne({ name:"Nick" }, (error, user_detail) => {
         console.log(user_detail)
        });*/

        db.collection('user_detail').find({ name:'Binny' }).toArray((error, user_detail) => {
            console.log(user_detail)
        });

        const doWorkPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve([7, 4, 1])
            }, 2000)
           })
           doWorkPromise.then((result) => {
            console.log('Success!', result)
           }).catch((error) => {
            console.log('Error!', error)
        });
// Updating single document
            db.collection('user_detail').updateOne({
                name:"Binny"
               }, {
                $set: {
                age: 22
                }
               }).then((result) => {
                console.log(result)
               }).catch((error) => {
                console.log(error)
               })

            //updating multiple documents
            /*db.collection('user_detail').updateMany({
                name: 'Nick'
                }, {
                $set: {
                age: 27
                }
                }).then((result) => {
                console.log(result.modifiedCount)
                }).catch((error) => {
                console.log(error) 
                });*/

            //Deleting single document
               db.collection('user_detail').deleteOne({
                age:30
               }).then((result) => {
                console.log(result)
               }).catch((error) => {
                console.log(error)
               })

               /*//Deleting multiple documents
               db.collection('user_details').deleteMany({
                age: 30
               }).then((result) => {
                console.log(result)
               }).catch((error) => {
                console.log(error)
               })*/

            });

