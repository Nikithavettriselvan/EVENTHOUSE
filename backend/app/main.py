from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from app.database import Base, engine
from app.models.user import User
from app.routers import auth,users

# Create FastAPI application
app = FastAPI()

# Create database tables
Base.metadata.create_all(bind=engine)

# Register authentication router
app.include_router(auth.router)
app.include_router(users.router)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Welcome to Event House API"}


@app.get("/test-db")
def test_database():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {"message": "PostgreSQL connected successfully!"}

    except Exception as e:
        return {"error": str(e)}