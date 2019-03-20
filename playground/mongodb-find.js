const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err) return console.log("unable to connect!");

	console.log("connected to db");

	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false

	// }, (err,result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo');
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// });

	db.collection('Todos').find({completed: true}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	},
	(err)=>{console.log("coudnt find")}
	);


	//client.close();
});