// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from 'mongodb';



export default async function handler(req, res) {

    if (req.method == "POST") {

        if (!validateUrl(req.body.url)) {
            return res.status(400).json({ status: false, messsage: 'invalid urls' })
        }
        const uri = "mongodb://localhost:27017/sortlink";

        try {
            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            const collection = client.db("sortlink").collection("sort");

            // findone 
            const data_url = await collection.findOne({ url: req.body.url })
            if (data_url) {
                return res.status(200).json({ status: true, message: 'find data', data: data_url })

            }


            // inser data 
            const insert_data = { url: req.body.url, sort: makeid(8) }
            await collection.insertOne(insert_data)
            return res.status(200).json({ status: true, message: 'Sucess create data', data: insert_data })

        } catch (e) {

            res.status(500).json({ status: false, messsage: `${e}` })

        }
    }
    res.status(400).json({ status: false, messsage: 'Enable method post' })
}


function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}


function validateUrl(url) {
    // Regular expression untuk validasi URL
    const regex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);

    // Memeriksa apakah URL valid
    if (regex.test(url)) {
        return true;
    } else {
        return false;
    }
}