# <ins>Project Flow</ins>

#### <ins>Presentation layer will talk  to Presentation layer .Presentation layer will talk to Business/Application logic layer and It will talk to data layer</ins> 
First of all we have AWS Cloud, inside this we have VPC in which we will deploy our resources.Here we have two availability zones.We have 2 public and two private subnets.two LBs will be deployed using IAC.One lB for UI and one LB for backend, after this we have our DB.
First of all setup 2 ECR repos(for application and presentation tier) using ecr.sh script.
# <ins>ECR REPOS</ins>
<img width="1024" alt="ecr-repo" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/6f8027c4-0dc0-4ed5-89bb-a73d65799dd5">

# <ins>VPC</ins>
<img width="1001" alt="vpc" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/18108f49-d612-45f9-b970-0bd0906f68da">

# <ins>2 Public Subnets & 2 Private Subnets</ins>
<img width="1019" alt="subnets" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/3e925ede-afbe-4394-b9d5-ed2d486fc55d">

# <ins>Route Table</ins>
<img width="1026" alt="route-table" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/a024dca9-2983-4425-b3e3-98cbb20bf3ee">

# <ins>ASG(Auto Scaling Groups)</ins>
<img width="1020" alt="asg" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/41abf135-3cd3-4588-85d5-96f3948f2ecf">

# <ins>Security Groups</ins>

<img width="1040" alt="securitygroup" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/11f72813-0f89-4a13-b041-440a97262fb6">

# <ins>LB(1 public,1 private)</ins>

<img width="990" alt="2LB" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/27d4f4c7-c10d-4902-aeb8-d8a17839fbfb">

# <ins>Public EC2 Instances(Presentation Tier) & 2 Private EC2 Instances(Application Tier)</ins>

<img width="1012" alt="instances" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/5f7439ad-41e1-471e-93c8-dbd1883186db">

# <ins>NAT Gateways(For private instances to access Internet)</ins>

<img width="1029" alt="ngw" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/86cc324a-49a0-4710-9463-4e09af0a14da">

# <ins>Elastic IP addresses,1 for each NAT Gateway</ins>

<img width="1039" alt="Elasticips" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/71757e45-6045-43d0-a728-df0bcde76948">
# <ins>LB1 in Action </ins>
<img width="1020" alt="lbinaction1" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/ee87d6cb-0255-4dfc-8d67-1570187f01ad">

# <ins>LB2 in Action</ins>

<img width="1020" alt="lbnactn2" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/4cbde059-b847-4d02-b17e-b4d841ac57b8">

# <ins>Internet Gateway</ins>

<img width="1016" alt="igw" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/dc29e71c-927e-4556-acf0-a47277e01d77">


## when i hit /init the UI will hit the backend LB i.e Application LB. and Application Load balancer is hitting the DB as shown in the code from App Tier .
```
https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/3-TIER WEB APP IN AWS USING TERRAFORM/Application//presentation-tier/src/index.js
```
##### Presentation-tier Code
```
// Define a route for the '/init' URL.
app.get('/init', async (req, res) => {
  // Make an asynchronous HTTP request to the URL specified by APPLICATION_LOAD_BALANCER.
  fetch(`http://${APPLICATION_LOAD_BALANCER}/init`).then(async (response) => {
    // When the response is received, parse it as JSON and send it as a response to the client.
    const data = await response.json();
    res.send(data);
  });
});
```
##### App Tier Code that hits the DB
```
https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/3-TIER WEB APP IN AWS USING TERRAFORM/Application/App_Tier/SRC/index.js
import express from 'express'; // Import the Express web framework.
import mysql from 'mysql'; // Import the MySQL driver for Node.js.

// Setting the port for the server to listen on
const PORT = process.env.PORT || 3000; // Use the specified port in environment variables or default to 3000.

// Creating a connection to the MySQL database
const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME, // MySQL host from environment variables.
  user: process.env.RDS_USERNAME, // MySQL username from environment variables.
  password: process.env.RDS_PASSWORD, // MySQL password from environment variables.
  port: process.env.RDS_PORT, // MySQL port from environment variables.
  db_name: process.env.RDS_DB_NAME, // MySQL database name from environment variables.
});
connection.connect(); // Establish a connection to the MySQL server.

// Selecting the database specified in the environment variables
connection.query(`use ${process.env.RDS_DB_NAME};`); // Select the specified database.

// Creating an Express application
let app = express(); // Create an instance of the Express application.

// Handling a GET request to the root route
app.get('/', async (req, res) => {
  res.send({ message: 'hello world' }); // Respond with a JSON message: "hello world".
});

// Handling a GET request to the /init route
app.get('/init', async (req, res) => {
  // Creating a 'users' table if it doesn't exist
  connection.query('CREATE TABLE IF NOT EXISTS users (id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY, lastname VARCHAR(40), firstname VARCHAR(40), email VARCHAR(30));');
  
  // Inserting some initial data into the 'users' table
  connection.query('INSERT INTO users (lastname, firstname, email) VALUES ( "Tony", "Sam", "tonysam@whatever.com"), ( "Doe", "John", "john.doe@whatever.com" );');
  
  res.send({ message: "init step done" }); // Respond with a JSON message indicating the initialization is complete.
});
```
The code configures the server to listen on a specified port or defaults to 3000 if none is provided. It establishes a connection to a MySQL database 
using environment variables for host, username, password, port, and database name, then selects the specified database. The application defines three essential routes: the root route ('/'), 
which returns a simple "hello world" message; the '/init' route, which initializes a 'users' table in the database and inserts sample data; and the '/users' route, which retrieves all records
from the 'users' table and responds with the results. Additionally, the code includes a custom 404 route for handling undefined routes. When the server starts, it listens on the specified port
and logs a message. This code provides a foundation for building a basic web application with MySQL database integration for user data management.
# <ins>DB O/P</ins>

<img width="1000" alt="db-out" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/3d7129d5-1ca9-429e-8eb7-0aeb2b3488de">



