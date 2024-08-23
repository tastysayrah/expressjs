//CHECKPOINT

 const express = require('express');
 const app = express();
 const port = 3000;

const workingHoursMiddleware = require('./middleware/workinghours');

// Set EJS as the templating engine
 app.set('view engine', 'ejs');
 // Set the directory for the views
 app.set('views', './views');


 // Serve static files (like CSS) from the 'public' directory
 app.set(express.static('public'));

 

// Apply the working hours middleware to all routes
app.use(workingHoursMiddleware);

 // Define the routes
 app.get('/', (req, res) => {
   res.render('home', { title: 'Home' });
 });

 app.get('/services', (req, res) => {
   res.render('services', { title: 'Our Services' });
 });

 app.get('/contact', (req, res) => {
  res.render('contacts', { title: 'Contact Us' });
});

 // Start the server
 app.listen(3000, () => {
   console.log('Server running on http://localhost:3000');
 });