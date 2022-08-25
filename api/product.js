const express = require('express');
const router = express.Router();
const axios = require('axios');
const convert = require('xml-js');

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get('/', async (req, response) => {
  try {
    axios
      .get('https://www.nasdaq.com/feed/rssoutbound?category=Technology')
      .then((res) => {
        console.log(res.data);
        const convertedResponse = convert.xml2js(res.data);
        response.json(convertedResponse);
      })
      .catch((err) => {
        console.log('Some Error Occured', err);
      });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
