CS 6314.001/002 - Assignment 3 - Top-Five Baby Names
Due Date: October 16, 2018, 11:59PM
Every 10 years, the Social Security Administration provides data about the 1000 most popular boy and girl names for children born in the US for each gender at http://www.ssa.gov/OACT/babynames/. 
Your task for this assignment is to display the baby names and their popularity rankings for a given year and gender. You will implement the project using AJAX technology, PHP and DBMS.
On your html page (babynames.html), you will have one division element for results, two drop-down lists (for year and gender) and one button. Once clicked on the button, you will call Ajax function, which will ultimately make a request for babynames.php on the server.
In babynames.php, you will connect to the database and fetch the top-five popular names for the selected year and gender.  The default option for the year and gender is “All years” and “Both”. 
The results will be passed to the client and will be used to dynamically change the contents of the division on the html page. Along with each baby name, you will also list the popularity ranking, gender and the year.
For database part, you will create a table with following schema:
Database name: HW3
BabyNames (name, year, ranking, gender) 
For gender values, use ‘m’ and ‘f’.
You can use data given on the following page to populate your table:
http://www.ssa.gov/OACT/babynames/top5names.html
It is sufficient to include data for the years between 2005 and 2015. You can alternatively use attached sql file to insert records into your table. 



Important reminder:  Make sure your database name (HW3), table name and attribute names match with given names. You also make sure to use default hostname, username and password for database connection (host: localhost, username: root, password: root). Otherwise you will lose points for not complying with the standards of the assignment.

