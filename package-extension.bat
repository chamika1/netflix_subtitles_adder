@echo off
REM Package Netflix & Prime Video Subtitles Extension

echo ==========================================
echo Netflix & Prime Video Subtitles Extension
echo Package Creator
echo ==========================================
echo.

REM Check if icons exist
if not exist "extension\icon16.png" (
    echo [WARNING] icon16.png not found!
    echo Please generate icons using create-icons.html first.
    echo.
    pause
    exit /b 1
)

if not exist "extension\icon48.png" (
    echo [WARNING] icon48.png not found!
    echo Please generate icons using create-icons.html first.
    echo.
    pause
    exit /b 1
)

if not exist "extension\icon128.png" (
    echo [WARNING] icon128.png not found!
    echo Please generate icons using create-icons.html first.
    echo.
    pause
    exit /b 1
)

echo [OK] All icons found
echo.

REM Create zip file name with timestamp
set TIMESTAMP=%date:~-4%%date:~-10,2%%date:~-7,2%_%time:~0,2%%time:~3,2%
set TIMESTAMP=%TIMESTAMP: =0%
set ZIPNAME=netflix-prime-subtitles-v2.0.0.zip

echo Creating package: %ZIPNAME%
echo.

REM Delete old package if exists
if exist "%ZIPNAME%" (
    echo Removing old package...
    del "%ZIPNAME%"
)

REM Create zip using PowerShell (Windows 10+)
powershell -command "Compress-Archive -Path extension\manifest.json,extension\content.js,extension\popup.html,extension\popup.js,extension\styles.css,extension\subtitle-parser.js,extension\icon16.png,extension\icon48.png,extension\icon128.png,README.md -DestinationPath %ZIPNAME%"

if exist "%ZIPNAME%" (
    echo.
    echo ==========================================
    echo SUCCESS!
    echo ==========================================
    echo Package created: %ZIPNAME%
    echo.
    echo You can now:
    echo 1. Share this zip file
    echo 2. Upload to Chrome Web Store
    echo 3. Install on other computers
    echo.
) else (
    echo.
    echo [ERROR] Failed to create package
    echo Please check if PowerShell is available
    echo.
)

pause

