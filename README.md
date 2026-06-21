# Tic-Tac-Toe

A simple tic-tac-toe game built with Python and Flask and played in the browser.

## Features

- Two-player local tic-tac-toe
- Browser-based interface
- Auto win and draw detection
- Reset button for fast replay

## Run Locally

1. Install dependencies:

   ```bash
   python -m pip install -r requirements.txt
   ```

2. Start the app:

   ```bash
   python app.py
   ```

3. Open the browser at:

   ```
   http://127.0.0.1:5000/
   ```

## GitHub

Repository: https://github.com/Mr-Nauman/tictoc

## Deploy

This is a standard Flask app, so it can be deployed on platforms like Render, Railway, or PythonAnywhere.

Typical production setup:

1. Set the start command to run `python app.py` or, for production, a WSGI entry point.
2. Make sure `requirements.txt` is installed on the platform.
3. Add a `PORT`-aware server if your host requires it.