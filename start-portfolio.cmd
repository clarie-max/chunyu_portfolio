@echo off
setlocal
cd /d "%~dp0"

REM Use a dedicated local address so this portfolio can run beside other projects.
set "PORT=4174"

start "Chunyu Portfolio Server" /min cmd /c "npm run dev"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4174/"

endlocal
