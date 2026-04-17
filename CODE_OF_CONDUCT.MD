To run this project manually from your terminal, follow these step-by-step instructions. 

Since you are on Windows, you can open PowerShell or Command Prompt, ensure you are in the `Interior-design-Website-` folder, and run the following commands sequentially:

**Step 1: Navigate to the `flask_app` directory**
The main application files are located in this folder.
```powershell
cd flask_app
```

**Step 2: Create a Virtual Environment**
This isolates your Python dependencies so they don't affect other projects.
```powershell
python -m venv venv
```
*(Note: If `python` isn't recognized, try using `py` instead: `py -m venv venv`)*

**Step 3: Activate the Virtual Environment**
You need to activate the environment before installing dependencies. You should see `(venv)` appear at the start of your command prompt after running this.
```powershell
.\venv\Scripts\activate
```

**Step 4: Install Dependencies**
Install all required libraries (like Flask) as listed in the requirements file.
```powershell
pip install -r requirements.txt
```

**Step 5: Run the Application**
Start the Flask development server.
```powershell
python app.py
```

**Step 6: Open the Website**
Once the server is running, it will give you a local URL. Open your web browser and go to:
👉 **http://127.0.0.1:5000** (or `http://localhost:5000`)

To stop the server at any time, just press `Ctrl + C` in your terminal.
---