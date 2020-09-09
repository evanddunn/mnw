var express = require('express');
var router = express.Router();

const { Client } = require('pg')
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect().then(() => console.log('connected')).catch(err => console.error('connection error', err.stack));

// router.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//   next();
// });

router.get('/', (req, res) => 
  {
    getPosts()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  });

router.post('/', (req, res) => {
  createPost(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

// router.delete('/:id', (req, res) => {
//   deleteMerchant(req.params.id)
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// });

const getPosts = async () => {
  try {
    const res = await client.query('SELECT * FROM blog_posts;');
    client.end();
    return(res.rows);
  } catch (err) {
    console.log(err.stack);
  }
}

const createPost = (body) => {
  return new Promise(function(resolve, reject) {
    const { title, content } = body
    client.query('INSERT INTO blog_posts VALUES ($1, $2);', [title, content], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new merchant has been added added: ${results.rows[0]}`)
    })
  })
}

const deletePost = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    console.log(id);
    client.query('DELETE FROM merchants WHERE id = $1;', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Merchant deleted with ID: ${id}`)
    })
  })
}

// module.exports = {
//   getMerchants,
//   createMerchant,
//   deleteMerchant,
// }

module.exports = router;
