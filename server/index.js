import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get('/api/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'Test User' }]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});