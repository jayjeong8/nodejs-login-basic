const express = require('express');
const template = require('../lib/template.js');

const router = express.Router()

router.get('/', (req, res) => {
  if (req.session.loggedin) {
    // 로그인 후 /home에 진입했을 때
    res.send(template.HTML('로그인 성공', `${req.session.username}님 안녕하세요!`, '<div><a href="/auth/logout">Logout</a></div>'));
  } else {
    // 로그인하지않고 /home에 진입했을 때
    res.send(template.HTML('로그인 필요', '로그인이 필요한 페이지입니다.'));
  }
  res.end();
});

module.exports = router;