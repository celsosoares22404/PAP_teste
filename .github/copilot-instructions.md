# Instruções do workspace

## Projeto
- Frontend React com Vite em `frontend/`.
- Backend Flask em `backend/`.
- A API de desenvolvimento expõe `GET /api/health`; o proxy do Vite encaminha `/api` para `localhost:5000`.

## Estado do setup
- [x] Requisitos esclarecidos: React no frontend e Flask/Python no backend.
- [x] Estrutura base criada na raiz do workspace.
- [x] Interface inicial integrada com a API.
- [x] Documentação e `.gitignore` adicionados.
- [x] Backend validado pelo cliente de teste do Flask.
- [ ] Build do frontend: requer Node.js/npm, indisponíveis no ambiente atual.
- [x] Extensões adicionais: não necessárias para este setup.
- [ ] Arranque dos servidores: aguarda confirmação do utilizador.

## Comandos
- Backend: `python backend/app.py` (após instalar `backend/requirements.txt`).
- Frontend: `cd frontend`, `npm install`, `npm run dev`.
