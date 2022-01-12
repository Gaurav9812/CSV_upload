# CSV_upload
So this is a site where u can upload a csv file .see the data in it where u are given the functionalities to sort ,search on any column and no. of records u wan to see.

#how to set on your local system
so to set in ur local machine u have to clone this repo and run command npm i to install all the dependencies and u r all set .run command npm start to run .
and on any brower type localhost:8000 to see the website.



#There are no ways to solve a problem
Initially i have devleoped it using using disk storage(multer) where i was upploading file in my local storage but due to some aws account issue i have to think of doing it other 
way then i used memory storage of MULTER to convert that file in buffer and then converting that file in array according to no. of lines using PAPAPARSE.
