This is a super quick and breif overview, but for Windows should work to get running

Prerequisite Installations
1.) Visual Studio Code https://code.visualstudio.com/
2.) Node JS https://nodejs.org/en/download/
3.) Github https://gitforwindows.org/
4.) Expo (Follow instructions below)

Installing and Initializing Expo
1.) " npm install expo-cli --global "
2.) [optional] you might run into issue about script execution policy, run " Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser " to let yourself run scripts

Steps
1.) Clone the repo " git clone <url> "
2.) Run " npm install " in the Manager folder (Note how node_modules folder is added)
3.) " expo start " to begin testing

MAC OS Requirements 
1.) Install Watchmen for expo cli to work
    'brew install Watchmen'
2.) Run 'npm install'
