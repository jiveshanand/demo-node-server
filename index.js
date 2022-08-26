const express = require('express');
const app = express();
const product = require('./router/product');
const home = require('./router');
const cors = require('cors');

app.use(express.json({ extended: false }));
app.use(cors());

app.use('/product', product);
app.use('/home', home);

app.get('/', (req, res) => {
  res.json({ message: 'connection is established' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
