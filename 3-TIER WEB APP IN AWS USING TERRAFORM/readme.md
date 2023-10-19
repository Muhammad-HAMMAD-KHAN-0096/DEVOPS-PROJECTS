# <ins>3 Tier Architecturein AWS using Terraform[IAC]</ins>

<img width="700" alt="3t" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/9fbe3e9c-f5f1-4edb-a8b9-06f4b39d3f82">

## <ins>AWS Components used</ins>
- 1 VPC
- 2 Public Subnets
- 2 Private Subnets
- 2 ASG(Auto Scaling Groups)
- 5 Security Groups
- 2 LB(1 public,1 private)
- 2 Public EC2 Instances(Presentation Tier)
- 2 Private EC2 Instances(Application Tier)
- 2 NAT Gateways(For private instances to access Internet)
- 1 RDS(Relational Database Service) Instance
- 2 Elastic IP addresses,1 for each NAT Gateway
