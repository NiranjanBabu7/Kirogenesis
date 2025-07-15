from fastapi.testclient import TestClient
from backend.app import app

client = TestClient(app)

def test_get_users():
    response = client.get("/api/users")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_create_subscription():
    response = client.post("/api/billing")
    assert response.status_code == 200
    assert response.json()["status"] == "subscription created"
