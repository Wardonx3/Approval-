const express = require('express');
const app = express();

app.use(express.json());

app.post('/validate-key', (req, res) => {
  const key = req.body.key;
  // Key ko validate karein
  if (key === 'valid-key') {
    res.json({ status: 'success' });
  } else {
    res.json({ status: 'error' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
