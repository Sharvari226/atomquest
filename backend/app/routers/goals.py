from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from ..database import get_db
from ..schemas.goal import GoalCreate, GoalResponse
from ..crud.goal import create_goal, get_user_goals, get_all_users

router = APIRouter()

@router.post("/", response_model=GoalResponse)
async def create_new_goal(goal: GoalCreate, db: AsyncSession = Depends(get_db)):
    return await create_goal(db, goal)

@router.get("/user/{user_id}")
async def list_user_goals(user_id: str, db: AsyncSession = Depends(get_db)):
    return await get_user_goals(db, user_id)

@router.get("/users")
async def list_users(db: AsyncSession = Depends(get_db)):
    return await get_all_users(db)

@router.get("/test")
async def test_db(db: AsyncSession = Depends(get_db)):
    result = await db.execute("SELECT * FROM users LIMIT 3")
    users = result.fetchall()
    return {"users": users}