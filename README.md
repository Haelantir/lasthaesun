# 무엇이든 물어보세요 — 시니어 전용 AI 채팅 (1차 MVP)

60~70대 이상 사용자가 가입 없이 바로 질문하고 답을 받을 수 있는 AI 채팅 서비스.

## 구조

- `src/` — React + Vite 프론트엔드 (홈 화면 / 채팅 화면)
- `server/` — Express 백엔드. `/api/chat`에서만 OpenAI를 호출한다 (API 키는 서버에만 존재)
- `shared/` — 프론트엔드와 백엔드가 함께 쓰는 타입/카테고리 정의
- `server/lib/router.ts`, `server/lib/safetyOverride.ts`, `server/lib/chatService.ts` — Router / Safety Override / Nano-Luna-Clarify 분기 로직

## 실행

```bash
cp .env.example .env   # OPENAI_API_KEY 채우기
npm install
npm run dev             # 프론트(5173) + 백엔드(8787) 동시 실행, /api는 백엔드로 프록시
```

프로덕션(단일 서버로 정적 파일 + API 함께 서빙):

```bash
npm run build
npm start
```

## 검증

```bash
npm run typecheck
npm run lint
npm test
npm run build
```
