
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

	app.get('/api/todolists', function(req, res) {
		res.send('display all todolists of the logged in user');
	});

	app.post('/api/todolists', function(req, res) {
		res.send('create todo list');
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
