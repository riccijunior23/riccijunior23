@echo off
cd /d "%~dp0"
where py >nul 2>nul
if not errorlevel 1 goto use_py
where python >nul 2>nul
if not errorlevel 1 goto use_python
echo Instale o Python 3 pelo site python.org e tente novamente.
pause
exit /b 1
:use_py
py -3 preview_server.py
goto done
:use_python
python preview_server.py
:done
pause
