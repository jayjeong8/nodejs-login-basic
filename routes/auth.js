const express = require('express');
const mysql = require('mysql2');
const template = require('../lib/template.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jay1234', // 테스트용 mySQL 비밀번호
  database: 'nodelogin',
});

const router = express.Router();

router.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {
      if (error) throw error;

      if (results.length > 0) {
        // 조건에 맞는 등록된 계정이 있을 경우
        req.session.loggedin = true;
        req.session.username = username;

        res.redirect('/home');

      } else {
        // 조건에 맞는 계정이 없을 경우
        res.send(template.HTML('로그인 실패', '아이디 또는 비밀번호가 일치하지 않습니다.'));
      }

      res.end();
    });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;