from backend import create_app

from fastapi.middleware.cors import CORSMiddleware


# uvicorn main:app --port 5050 --reload


app = create_app()

origins = [
    "http://localhost:5000",
    "http://localhost:5050"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
