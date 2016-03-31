const TodoList = require('./models/TodoList');

const router = function(app) {
	app.get('/', function(req, res) {
	  res.sendFile('index.html');
	});

	app.get('/api', function(req, res) {
	  res.send('api server');
	});

	app.post('/api/signup', function(req, res) {
		res.send('sign up');
	});
	
	app.post('/api/signin', function(req, res) {
		res.send('sign in');
	});

	app.get('/api/todolists', function(req, res, next) {
		TodoList.find(function(err, todolists) {
			if (err) { return next(err); }
			res.json({
				success: true,
				data: todolists
			});
		});
	});

	app.post('/api/todolists', function(req, res) {
		const newList = new TodoList({
			name: 'Haushalt Liste'
		});

		newList.save(function(err, saveList) {
			if (err) { return next(err); }
			res.json(saveList);
		});
	});


	app.get('/api/todolists/:id', function(req, res) {
		res.send('display single todolist');
	});

	app.delete('/api/todolists/:id', function(req, res) {
		res.send('delete todo list');
	});

	app.put('/api/todolists/:id', function(req, res) {
		res.send('update todo list');
	});


};

module.exports = router;
