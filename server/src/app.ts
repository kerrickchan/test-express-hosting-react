import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the React build directory
app.use(express.static(path.join(process.env.PWD!, '..', 'public')));

// API endpoint example
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// All other GET requests not handled will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(process.env.PWD!,'..', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
