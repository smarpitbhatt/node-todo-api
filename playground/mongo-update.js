const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

	if(err){return console.log('error while connecting')};

	console.log('connected to db');

	const db = client.db('TodoApp');

	// db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5c91ac1310c43835fededbc9')},{
	// 	$set: {
	// 		text: 'wash car updated',
	// 		completed: true
	// 	}
	// },{
	// 	returnOriginal: false
	// }).then((result)=>{
	// 	console.log(JSON.stringify(result,undefined,2));
	// });

	db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5c91daf210c43835fededbcd')},{
		$set: {
			name: 'santa'
		},
		$inc: {
			age: 1
		}
	},{
		returnOriginal: false
	}).then((result)=>{
		console.log(JSON.stringify(result,undefined,2));
	});

client.close();
});