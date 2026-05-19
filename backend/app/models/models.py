from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .base import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(String, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    name = Column(String, nullable=False)
    role = Column(String, default="EMPLOYEE")
    manager_id = Column(String, ForeignKey("users.id"), nullable=True)
    department = Column(String, nullable=True)
    avatar = Column(String, nullable=True)
    created_at = Column(DateTime, server_default=func.now())

class Goal(Base):
    __tablename__ = "goals"
    
    id = Column(String, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    content = Column(JSON, nullable=True)
    thrust_area = Column(String, nullable=True)
    uom = Column(String, nullable=False)
    target = Column(Float, nullable=False)
    actual = Column(Float, default=0.0)
    weightage = Column(Integer, nullable=False)
    status = Column(String, default="DRAFT")
    is_shared = Column(Boolean, default=False)
    shared_from_id = Column(String, nullable=True)
    
    employee_id = Column(String, ForeignKey("users.id"), nullable=False)
    manager_id = Column(String, ForeignKey("users.id"), nullable=True)
    approved_at = Column(DateTime, nullable=True)
    locked = Column(Boolean, default=False)
    
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

class CheckIn(Base):
    __tablename__ = "checkins"
    
    id = Column(String, primary_key=True, index=True)
    goal_id = Column(String, ForeignKey("goals.id", ondelete="CASCADE"), nullable=False)
    quarter = Column(Integer, nullable=False)
    actual = Column(Float, nullable=True)
    status = Column(String, default="NOT_STARTED")
    comment = Column(String, nullable=True)
    manager_comment = Column(String, nullable=True)
    employee_id = Column(String, ForeignKey("users.id"), nullable=True)
    created_at = Column(DateTime, server_default=func.now())