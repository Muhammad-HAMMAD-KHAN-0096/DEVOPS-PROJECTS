# End to End project on EKS
## 2048 game deployed on EKS using fargate
For introduction of EKS please see **AWS-EKS.md**
# Steps:
- Install Tools and configure for the job as shown in the _Installations and required configs.md_
- For creating cluster refer to _create-eks-cluster.md_
- Create Fargate profile as shown in  _2048-deploy.md_  inside **2048-game** folder.
- Deploy the deployment, service and Ingress as shown in  _2048-deploy.md_  inside **2048-game** folder.Commented .yaml file is also present in this folder.
- The alb controller(pod) need to access load balancer therefore we need IAMOIDC provider._IAM-OIDS.md_ inside **configure IAM OIDC provider**
- Set up alb add on  first create policy and service account as shown in  _alb add on.md_
- Deploy ALB controller using HELM as shown in  _alb add on.md_
- At last we will verify that LB is created and there are two replicas(ALB RESOURCES) that will be in two availability zones as shown in  _alb add on.md_.
- Check in AWS EC2 dashboard LB is created.
# Final 2048 APP
<img width="1200" alt="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/b56625b1-d9bf-463d-b966-9d10e69ed273">
