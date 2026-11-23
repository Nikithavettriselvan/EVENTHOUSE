
from pydantic import BaseModel, EmailStr, Field, model_validator, field_validator
from typing import Literal
Department = Literal[
    "Information Technology",
    "Computer Science",
    "Electronics & Communication",
    "Electrical & Electronics",
    "Mechanical",
    "Civil",
    "AI & Data Science",
    "Other",
]
class UserCreate(BaseModel):
    name: str = Field(min_length=2,max_length=128)
    email: EmailStr
    password: str = Field(min_length=8,max_length=128)
    role: Literal["student", "organizer"]
    department: Department
    register_number: str | None = None
    @field_validator("email")
    @classmethod
    def lowercase_email(cls, v):
        return v.lower()
    @model_validator(mode="after")
    def validate_register_number(self):
        if self.role == "student" and not self.register_number:
            raise ValueError("Register number is required for students")

        if self.role == "organizer" and self.register_number:
            raise ValueError("Organizers should not provide a register number")

        return self

class UserLogin(BaseModel):
    email: EmailStr
    password: str

    @field_validator("email")
    @classmethod
    def lowercase_email(cls, v):
        return v.lower()
