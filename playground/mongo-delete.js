const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){return console.log("Error while connecting!");};

	console.log('connnected to db');

	const db =	client.db('TodoApp');

	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log(count);
	// });

	//delete many

	db.collection('Todos').deleteMany({text:}).then((result)=>{});
	//delete one


	//find one and delete 

	db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{});

	client.close();
});
