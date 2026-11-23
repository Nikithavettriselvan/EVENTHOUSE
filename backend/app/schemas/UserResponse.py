from pydantic import BaseModel, ConfigDict, EmailStr
from typing import Literal


class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    role: Literal["student", "organizer"]
    department: str
    register_number: str | None = None

    model_config = ConfigDict(from_attributes=True)