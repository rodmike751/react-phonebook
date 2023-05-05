1. Download and Install Laragon as well as nodejs on your local machine. 
2. Unpack the contents of the zip file into the www directory of your laragon intallation directory. Open laragon and start the servers.
3. Go to "react-phonebook-api" folder and edit ".env" file. Change the mysql "database,username,password" to that of your localhost
4. Open a terminal in the "react-phonebook-api" folder.
5. Run "php artisan migrate:fresh --seed" and  in the terminal
6. Now go to the "react-phonebook" folder
7. Open a terminal in the folder and run "npm install"
8. In the same terminal run "npm start".
9. Open "http://localhost:3000" to explore