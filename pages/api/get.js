// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient, ServerApiVersion } from 'mongodb';



export default async function handler(req, res) {

    if (req.method == "POST") {

        const uri = "mongodb://localhost:27017/sortlink"

        try {
            const client = new MongoClient(uri, {

                useNewUrlParser: true,
                useUnifiedTopology: true
            });


            const collection = client.db("sortlink").collection("sort");

            console.log(collection)
                // findone 
            const data_url = await collection.findOne({ sort: req.body.url })
            console.log(data_url)
            if (data_url) {
                return res.status(200).json({ status: true, message: 'find data', data: data_url })
            }

            return res.status(400).json({ status: false, message: 'data not found' })


        } catch (e) {

            res.status(500).json({ status: false, messsage: `${e}` })

        }
    }
    res.status(400).json({ status: false, messsage: 'Enable method post' })
}