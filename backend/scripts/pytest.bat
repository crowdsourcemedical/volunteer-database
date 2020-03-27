CALL :NORMALIZEPATH "%~dp0..\"
SET "BACKEND_DIR=%RETVAL%"

docker run -ti --rm -v %BACKEND_DIR%:/app -e ENV_NAME=test css_backend pytest -v -s

pause

:: ========== FUNCTIONS =============
EXIT /B 
:NORMALIZEPATH
    SET RETVAL=%~dpfn1
    EXIT /B