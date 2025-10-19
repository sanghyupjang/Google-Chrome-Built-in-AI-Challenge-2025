# Running Methods

## Method 1: Live Server Extension

Install Live Server

Open VS Code
Press Ctrl+Shift+X (Extensions marketplace)
Search for "Live Server"

Launch the Application

Right-click on index.html
Select "Open with Live Server"
Or use shortcut: Alt+L Alt+O

## Method 2: Python HTTP Server

Open VS Code terminal (Ctrl+`` ) and run:

python -m http.server 8000

Access at: http://localhost:8000


<img width="1247" height="765" alt="Image" src="https://github.com/user-attachments/assets/e29e74ef-0b30-4c97-af60-61051e0fa5fc" />

<img width="1244" height="835" alt="Image" src="https://github.com/user-attachments/assets/a4dad0dc-1ae3-4541-95ca-2257113e8795" />


<img width="1263" height="867" alt="Image" src="https://github.com/user-attachments/assets/e6d572cd-bf91-49a9-9fbd-daa9ac9a2cde" />



















add option


Quick Setup Guide: Enable Chrome Built-in AI APIs
 Fast Track Solution
Step 1: Install Chrome Canary

Download: https://www.google.com/chrome/canary/
Must use Canary or Dev (stable Chrome won't work!)

Step 2: Enable Flags
Go to chrome://flags and enable:

#prompt-api-for-gemini-nano → Enabled
#summarization-api-for-gemini-nano → Enabled
#optimization-guide-on-device-model → Enabled BypassPerfRequirement
Click "Relaunch"

Step 3: Download AI Model

Open DevTools Console (F12)
Run:

javascriptawait ai.languageModel.create()

Go to chrome://components/
Find "Optimization Guide On Device Model" → Click "Check for update"
Wait 10-30 minutes (downloads ~1.5GB model)

Step 4: Verify It Works
javascriptconst session = await ai.languageModel.create();
await session.prompt("Hello!");
 Common Issues:
"ai is not defined" → Use Chrome Canary, not stable Chrome
Download stuck → Check free disk space (need 22GB+), restart Chrome
Still not working → Clear cache at chrome://settings/clearBrowserData
 Quick Check:
javascript(await ai.languageModel.capabilities()).available
// Should return "readily"
Need 22GB+ free space and stable internet for initial setup. First time takes 20-40 minutes!

TL;DR: Chrome Canary + Enable flags + Download model at chrome://components/ + Wait for download = Ready! 
