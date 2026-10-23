@echo off
cd /d "%~dp0"
echo Stramo-nettsiden starter paa http://127.0.0.1:4321/
echo Trykk Ctrl+C for aa stoppe.
node preview.mjs
pause
