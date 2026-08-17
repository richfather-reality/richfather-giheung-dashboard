# 부자아저씨 가난한아빠 - 대시보드 (Railway 배포)

CRM과 동일한 방식(GitHub → Railway 자동 배포)으로 매물현황 대시보드를 서빙합니다.

## 최초 설정 (한 번만)

1. **GitHub 새 리포지토리 생성**
   예: `richfather-giheung-dashboard` (기흥역세권용), `richfather-mangpo-dashboard` (망포지구용)
   → 망포지구는 별도 리포지토리를 하나 더 만들어서 똑같은 구조로 셋업하시면 돼요.

2. **이 폴더(railway-static) 전체를 리포지토리에 업로드**
   - `server.js`, `package.json`, `.gitignore`
   - `public/index.html` ← 오늘자 대시보드 HTML (지금은 8/17자로 채워져 있음)
   - `public/character.jpg` ← 캐릭터 이미지

3. **Railway에서 새 프로젝트 생성**
   - "Deploy from GitHub repo" 선택 → 방금 만든 리포지토리 연결
   - Railway가 `package.json`을 자동 인식해서 `npm install` → `npm start`로 실행합니다
   - 별도 설정 없이 자동으로 도메인이 생성됩니다 (Settings → Networking → Generate Domain)

## 앞으로 매일 업데이트하는 방법

1. Claude에게 오늘자 매물 데이터를 보내서 새 HTML을 받습니다
2. 받은 HTML 파일을 **`public/index.html`로 이름을 바꿔서** GitHub 리포지토리에 덮어쓰기 업로드
   (GitHub 웹에서 `public/index.html` 파일 열기 → 연필 아이콘(Edit) → 전체 내용 교체 → Commit)
3. GitHub에 새 커밋이 올라가면 Railway가 자동으로 감지해서 재배포합니다 (CRM과 똑같음)
4. 카카오톡 공유 시 미리보기 이미지가 갱신 안 되면 `developers.kakao.com/tool/clear/og` 에서 캐시 초기화

## 참고
- `character.jpg`는 이미지 자체가 안 바뀌는 한 다시 안 올리셔도 됩니다 (최초 1회만)
- Netlify에 하던 것처럼 og:image, og:url 태그는 이미 HTML 안에 그대로 들어있어서 별도 수정 필요 없습니다. 다만 도메인이 Railway 도메인으로 바뀌니, HTML 안의 og:url / og:image 값도 Railway 도메인 기준으로 맞춰드릴게요 (요청하시면 반영).
