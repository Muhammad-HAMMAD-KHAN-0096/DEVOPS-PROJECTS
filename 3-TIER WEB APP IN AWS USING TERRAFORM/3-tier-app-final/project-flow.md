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

# <ins>INternet Gateway</ins>

<img width="1016" alt="igw" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/dc29e71c-927e-4556-acf0-a47277e01d77">

```
https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/3-TIER WEB APP IN AWS USING TERRAFORM/Application/App_Tier/SRC/index.js

The code configures the server to listen on a specified port or defaults to 3000 if none is provided. It establishes a connection to a MySQL database 
using environment variables for host, username, password, port, and database name, then selects the specified database. The application defines three essential routes: the root route ('/'), 
which returns a simple "hello world" message; the '/init' route, which initializes a 'users' table in the database and inserts sample data; and the '/users' route, which retrieves all records
from the 'users' table and responds with the results. Additionally, the code includes a custom 404 route for handling undefined routes. When the server starts, it listens on the specified port
and logs a message. This code provides a foundation for building a basic web application with MySQL database integration for user data management.
```
# <ins>DB O/P</ins>

<img width="1000" alt="db-out" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/3d7129d5-1ca9-429e-8eb7-0aeb2b3488de">



