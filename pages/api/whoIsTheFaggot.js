import {MongoClient} from 'mongodb';

const uri = "mongodb+srv://frendzona:maybebaby@cluster0.jgf7v.mongodb.net/users?retryWrites=true&w=majority";

export default (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true });
    let f = [];
    client.connect(err => {
        if (err) {
            res.statusCode = 500;
            console.log(err)
        }
        const collection = client.db("users").collection("names");
        // perform actions on the collection object
        collection.find().toArray().then(e=>{
            res.statusCode = 200;
            f = e[Math.round(Math.random()*e.length)];
            res.setHeader('Content-Type', 'application/json')
            res.json({ theFaggot: f })
        })
        client.close();
    });

}
