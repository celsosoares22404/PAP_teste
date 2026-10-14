from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})


@app.get("/api/health")
def health():
    return jsonify(status="ok", service="backend")


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
