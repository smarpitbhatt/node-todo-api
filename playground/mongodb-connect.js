var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		return console.log('Unable to connect to mongonserver');
	}
	console.log('Connected to server monggo');

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
	db.collection('Users').insertOne({
		name : 'smarpit',
		age : 20
	},(err,result)=>{

		if(err){return console.log("Cant insert document!");}

		console.log(JSON.stringify(result.ops,undefined,2));

	});

	client.close();
});