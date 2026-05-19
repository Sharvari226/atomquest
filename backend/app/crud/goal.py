from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from ..models.models import Goal, User
from ..schemas.goal import GoalCreate

async def create_goal(db: AsyncSession, goal: GoalCreate):
    db_goal = Goal(**goal.dict())
    db.add(db_goal)
    await db.commit()
    await db.refresh(db_goal)
    return db_goal

async def get_user_goals(db: AsyncSession, user_id: str):
    result = await db.execute(
        select(Goal).where(Goal.employee_id == user_id)
    )
    return result.scalars().all()

async def get_all_users(db: AsyncSession):
    result = await db.execute(select(User))
    return result.scalars().all()