from pydantic import BaseModel
from typing import Optional, Dict
from datetime import datetime

class GoalBase(BaseModel):
    title: str
    description: Optional[str] = None
    content: Optional[Dict] = None
    thrust_area: Optional[str] = None
    uom: str = "NUMERIC"
    target: Optional[float] = 0.0
    weightage: int = 20
    employee_id: str

class GoalCreate(GoalBase):
    pass

class GoalResponse(GoalBase):
    id: str
    actual: float
    status: str
    locked: bool
    approved_at: Optional[datetime] = None
    created_at: datetime

    class Config:
        from_attributes = True