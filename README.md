# AtomQuest

AtomQuest is an intelligent goal setting and performance tracking portal built for hackathons and real-world team workflows.

## Features
- Notion-style goal editor with checkboxes and rich content
- Goal drafting, approval, and locking workflow
- Quarterly check-ins with manager comments
- AI-powered goal suggestions
- Employee, manager, and admin dashboards

## Tech Stack
- Frontend: Next.js, Tailwind CSS, BlockNote
- Backend: FastAPI, SQLAlchemy, Pydantic
- Database: PostgreSQL / Supabase
- AI: LangChain + Groq

## Prerequisites
- Node.js
- Python 3.10+
- PostgreSQL or Supabase
- Groq API key

## Backend Setup
1. Go to the backend folder.
2. Create a `.env` file with:
   - `DATABASEURL`
   - `GROQAPIKEY`
3. Install dependencies:
   - `pip install -r requirements.txt`
4. Run the server:
   - `uvicorn app.main:app --reload --port 8000`

## Frontend Setup
1. Go to the frontend folder.
2. Install dependencies:
   - `npm install --legacy-peer-deps`
3. Start the app:
   - `npm run dev`

## Environment Variables
Example:
- `DATABASEURL=postgresql+asyncpg://...`
- `GROQAPIKEY=...`

## Database
The schema includes:
- `users`
- `goals`
- `checkins`

## API
- `GET /` — Health check
- `GET /api/goals/users` — List users
- `GET /api/goals/user/{id}` — List goals for a user
- `POST /api/goals` — Create a goal
- `POST /api/goals/smart-suggestions` — Generate AI goal suggestions

## Project Status
Backend, database schema, and initial frontend structure are in place.


## Deployment
- frontend : https://atomquest-cv5q-34npkgnb8-sharvaris-projects-3d6f9119.vercel.app/
- backend : https://atomquest-1-61f1.onrender.com

## License
Hackathon / internal project use.
