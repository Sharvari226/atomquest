import enum

class Role(str, enum.Enum):
    EMPLOYEE = "EMPLOYEE"
    MANAGER = "MANAGER"
    ADMIN = "ADMIN"

class UoM(str, enum.Enum):
    NUMERIC = "NUMERIC"
    PERCENTAGE = "PERCENTAGE"
    TIMELINE = "TIMELINE"
    ZERO = "ZERO"

class GoalStatus(str, enum.Enum):
    DRAFT = "DRAFT"
    SUBMITTED = "SUBMITTED"
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"

class CheckInStatus(str, enum.Enum):
    NOT_STARTED = "NOT_STARTED"
    ON_TRACK = "ON_TRACK"
    COMPLETED = "COMPLETED"