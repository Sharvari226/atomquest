from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

# Import database and models
from .database import engine
from .models.base import Base
from .models.models import Goal  # Import models to register them

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup - create tables if they don't exist
    try:
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
    except Exception as e:
        # Tables might already exist, which is fine
        print(f"Note: {e}")
    yield
    # Shutdown
    await engine.dispose()

app = FastAPI(title="AtomQuest - Goal Portal", lifespan=lifespan)

# Improved CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001", "http://localhost:3002", "http://127.0.0.1:3000", "http://127.0.0.1:3001", "http://127.0.0.1:3002"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "AtomQuest API is running!"}

# Import routers
from .routers.goals import router as goals_router
app.include_router(goals_router, prefix="/api/goals", tags=["goals"])