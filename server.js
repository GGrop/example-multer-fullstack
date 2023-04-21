const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.put('/api/user/:id', upload.single('shield'), (req, res) => {
  const { name, address } = req.body;
  const { id } = req.params;
  const shield = req.file;

  // Aquí podes procesar la información recibida
  console.log({ name, address, id, shield });

  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});