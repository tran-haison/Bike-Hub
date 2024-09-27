const { generateToken, authenticateJWT } = require('./jwt-utils');

// The package for the web server
const express = require('express');

// Additional package for logging of HTTP requests/responses
const morgan = require('morgan');

// Package for hashing passwords
const bcrypt = require('bcrypt');

// Package for parsing cookies
const cookieParser = require('cookie-parser');

// Database
let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('database.db');

const app = express();
const port = 3000;

// Support access to file system path
const path = require('path');

// Configure EJS engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Include the logging for all requests
app.use(morgan('common'));

// Serve all the files under the `assets` directory
app.use(express.static('assets'));

// Middleware to parse the body of POST requests
app.use(express.urlencoded({ extended: false }));

// Middleware to parse cookies
app.use(cookieParser());

// Handler GET request for the root path
app.get('/', (req, res, next) => {
  res.render('index');
});

// Handler GET request for the /register path
app.get('/register', (req, res) => {
  res.render('register');
});

// Handler POST request for the /register path
app.post('/register', (req, res, next) => {
  const { username, password } = req.body;

  // Hash the password before storing
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) throw err;

    // Store the user in the database
    db.run(
      `INSERT INTO User (USER_USERNAME, USER_PASSWORD) VALUES (?, ?)`,
      [username, hashedPassword],
      (err) => {
        if (err) {
          return res.status(500).send('Error: Username may already exist.');
        }
        res.redirect('/login');
      });
  });
});

// Handler GET request for the /login path
app.get('/login', (req, res, next) => {
  res.render('login');
});

// Handler POST request for the /login path
app.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  // Find user in the database
  db.get(
    `SELECT * FROM User WHERE USER_USERNAME = ?`,
    [username],
    (err, user) => {
      if (err || !user) {
        return res.status(400).send('Invalid username or password');
      }

      // Compare the provided password with the stored hashed password
      bcrypt.compare(password, user.USER_PASSWORD, (err, result) => {
        if (result) {
          // Create JWT token
          const token = generateToken(user);

          // Store JWT in cookie
          res.cookie('token', token, { httpOnly: true, secure: false });
          res.redirect('/');
        } else {
          res.status(400).send('Invalid username or password');
        }
      });
    }
  );
});

// Handler GET request for the /logout path
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

// Handler GET request for the /profile path
app.get('/profile', authenticateJWT, (req, res, next) => {
  db.get(
    'SELECT * FROM User WHERE USER_USERNAME = ?',
    [req.user.USER_USERNAME],
    (err, user) => {
      if (err) {
        return console.error(err.message);
      } else {
        res.render('profile', { user: user });
      }
    }
  );
});

// Handler GET request for the /update-profile path
app.get('/update-profile', authenticateJWT, (req, res, next) => {
  db.get(
    'SELECT * FROM User WHERE USER_USERNAME = ?',
    [req.user.USER_USERNAME],
    (err, user) => {
      if (err) {
        return console.error(err.message);
      } else {
        res.render('update-profile', { user: user });
      }
    }
  );
});

// Handler POST request for the /update-profile path
app.post('/update-profile', authenticateJWT, (req, res, next) => {
  let fullname = req.body.fullname;
  let email = req.body.email;
  let phone = req.body.phone;
  let address = req.body.address;
  let dob = req.body.dob;

  // Insert data into table 
  db.run(
    `
      UPDATE User
      SET USER_FULLNAME = ?, USER_EMAIL = ?, USER_PHONE = ?, USER_ADDRESS = ?, USER_DOB = ?
      WHERE USER_USERNAME = ?
    `,
    [fullname, email, phone, address, dob, req.user.USER_USERNAME],
    (err) => {
      if (err) {
        return console.error(err.message);
      } else {
        res.redirect('profile');
      }
    }
  );
});

// Handler GET request for the /bikes path
app.get('/bikes', (req, res, next) => {
  const searchTerm = req.query.search;

  let sql = 'SELECT * FROM Bike';
  let params = [];

  if (searchTerm) {
    sql += ' WHERE BIKE_NAME LIKE ? OR BIKE_BRAND LIKE ? OR BIKE_TYPE LIKE ?';
    params = [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`];
  }

  db.all(sql, params, (err, rows) => {
    if (err) {
      return console.error(err.message);
    } else {
      res.render('bikes', {
        bikes: rows,
        searchTerm: searchTerm
      });
    }
  });
});

// Handler GET request for the /bike path
app.get('/bike', (req, res, next) => {
  const bikeId = parseInt(req.query.id);

  db.get(
    'SELECT * FROM Bike WHERE BIKE_ID = ?',
    [bikeId],
    (err, bike) => {
      if (err) {
        return console.error(err.message);
      } else {
        res.render('bike', {
          bike: bike
        });
      }
    }
  );
});

// Handler GET request for the /categories path
app.get('/categories', (req, res, next) => {
  db.all('SELECT * FROM Category', (err, rows) => {
    if (err) {
      return console.error(err.message);
    } else {
      res.render('categories', {
        categories: rows
      });
    }
  });
});

// Handler GET request for the /brands path
app.get('/brands', (req, res, next) => {
  db.all('SELECT * FROM Brand', (err, rows) => {
    if (err) {
      return console.error(err.message);
    } else {
      res.render('brands', {
        brands: rows
      });
    }
  });
});

// Handler GET request for the /contact-us path
app.get('/contact-us', (req, res, next) => {
  res.render('contact-us');
});

// Handler POST request for the /feedback-submitted path
app.post('/feedback-submitted', (req, res, next) => {
  let fullname = req.body.fullname;
  let email = req.body.email;
  let subject = req.body.subject;
  let message = req.body.message;

  // Insert data into table 
  db.run(`
        INSERT INTO Feedback (FEEDBACK_FULLNAME, FEEDBACK_EMAIL, FEEDBACK_SUBJECT, FEEDBACK_MESSAGE) 
        VALUES (?, ?, ?, ?)
  `, [fullname, email, subject, message]);

  res.render('feedback-submitted');
});

// Handler GET request for the /api/feedbacks path
app.get('/api/feedbacks', (req, res, next) => {
  db.all('SELECT * FROM Feedback', (err, rows) => {
    if (err) {
      return console.error(err.message);
    } else {
      res.json(rows);
    }
  });
});

// Handler GET request for the /api/users path
app.get('/api/users', (req, res, next) => {
  db.all('SELECT * FROM User', (err, rows) => {
    if (err) {
      return console.error(err.message);
    } else {
      res.json(rows);
    }
  });
});

// The second last handler with only (request, response) parameters
// handles when a resources can't be found in the static folder or have a matching
// handler (e.g., a 404 file not found)
app.use((req, res) => {
  res.render('404');
});

// The last route handler can be used to return your own error messages
// it is expecting an 'Error' object as the first parameter, which is generated
// internally from Express when an error is detected.
app.use((err, req, res, next) => {
  // we may use properties of the error object
  // here and next(err) appropriately, or if
  // we possibly recovered from the error, simply next().
  let errorStatus = err.status || 500;
  res.status(errorStatus);
  res.render('error', {
    error: err
  });
});

// Listen to requests at port 3000 on the localhost
app.listen(port, () => {
  // When the application starts, print to the console that our app is
  // running at http://localhost:3000. Print another message indicating
  // how to shut the server down.
  console.log(`Web server running at: http://localhost:${port}`);
  console.log(`Type Ctrl+C to shut down the web server`);
});