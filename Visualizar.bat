@echo off
cd /d "%~dp0"
if exist "%LocalAppData%\Programs\Python\Python313\python.exe" goto use_python313
where py >nul 2>nul
if not errorlevel 1 goto use_py
where python >nul 2>nul
if not errorlevel 1 goto use_python
echo Instale o Python 3 pelo site python.org e tente novamente.
pause
exit /b 1
:use_python313
"%LocalAppData%\Programs\Python\Python313\python.exe" preview_server.py
goto done
:use_py
py -3 preview_server.py
goto done
:use_python
python preview_server.py
:done
pause
