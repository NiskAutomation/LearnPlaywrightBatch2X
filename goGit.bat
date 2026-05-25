@echo off
setlocal

if "%~1"=="" (
    set MSG=auto update
) else (
    set MSG=%~1
)

git add .
if %errorlevel% neq 0 exit /b %errorlevel%

git commit -m "%MSG%"
if %errorlevel% neq 0 exit /b %errorlevel%

git push origin main
if %errorlevel% neq 0 exit /b %errorlevel%

echo Pushed successfully with message: %MSG%
endlocal
