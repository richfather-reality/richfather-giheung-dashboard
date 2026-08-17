const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// public 폴더 안의 파일을 그대로 서빙 (index.html이 기본 페이지)
app.use(express.static(path.join(__dirname, 'public')));

// 캐시 방지 (매일 갱신되는 대시보드라 브라우저 캐시로 옛날 버전이 보이는 걸 방지)
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: 포트 ${PORT}`);
});
