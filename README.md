# TMAgalhase

Base de projeto full-stack com frontend React/Vite e backend Flask.

## Pré-requisitos

- Node.js e npm
- Python 3.10 ou superior

## Backend

Na raiz do projeto, crie e active um ambiente virtual e instale as dependências:

```powershell
python -m venv backend/.venv
backend/.venv/Scripts/Activate.ps1
pip install -r backend/requirements.txt
python backend/app.py
```

A API fica disponível em `http://localhost:5000`. O endpoint `GET /api/health` devolve o estado do serviço.

## Frontend

Noutro terminal, execute:

```powershell
cd frontend
npm install
npm run dev
```

Abra o endereço indicado pelo Vite (normalmente `http://localhost:5173`). O proxy encaminha pedidos `/api` para o Flask em `http://localhost:5000`.

## Estrutura

- `frontend/`: aplicação React e configuração do Vite.
- `backend/`: aplicação Flask e dependências Python.
