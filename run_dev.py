import subprocess
import os
import sys
import threading
from threading import Thread

# Add the project root to the Python path
project_root = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, project_root)

def run_frontend():
    frontend_dir = os.path.join(project_root, "frontend")
    os.chdir(frontend_dir)
    print(f"Current directory for frontend: {os.getcwd()}")
    print("Installing frontend dependencies...")
    subprocess.run("npm install", shell=True, check=True)
    print("Starting frontend server...")
    subprocess.run("npm start", shell=True, check=True)

def run_backend():
    os.chdir(project_root)
    print(f"Current directory for backend: {os.getcwd()}")
    print("Starting backend server...")
    subprocess.run("uvicorn src.glxy7.glxy_api:app --reload", shell=True, check=True)

if __name__ == "__main__":
    try:
        frontend_thread = Thread(target=run_frontend)
        backend_thread = Thread(target=run_backend)

        frontend_thread.start()
        backend_thread.start()

        frontend_thread.join()
        backend_thread.join()
    except subprocess.CalledProcessError as e:
        print(f"Error occurred: {e}")
        print(f"Command output: {e.output}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
