# Deploying 2048 application POD using deployment.

## Create Fargate profile
- We want to deploy this app in a new name space i.e game-app-2048,for that we have to create a new forgate profile.

```
eksctl create fargateprofile \
    --cluster cluster-one \
    --region us-east-1 \
    --name alb-simple-app \
    --namespace game-app-2048
```
<img width="1200" alt="fgprfcrt" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/0dfbe322-4f3d-4c90-b79b-690e3cc973c9">

## Deploy the deployment, service and Ingress

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.5.4/docs/examples/2048/2048_full.yaml
```
<img width="1200" alt="dplygyyyy" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/c8b23e9e-b3cb-4cc6-98dd-b3f7f2c2404c">

## Looking at the created pods.

<img width="1000" alt="podsssssssssssssssssss" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/cf1f72b2-8c23-4227-ae28-7f7ec71283fd">

## Service status is shown below as per YAML file.Type is nodePort anyone with in the VPC or who has access to vpc can access using node ip and port but  it is not accessible to the outside world.

<img width="1100" alt="svcccccccccccccccccccccccccccccccc" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/59f56ace-5c97-4eaf-855c-3efa992e2711">

## Checking the created ingress.

<img width="800" alt="ingress" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/01e14c0b-1e7b-4dbf-a85e-f17d137aecca">

## As can be seen above the address slot is vacant this is the address which outsiders will use to access our application. This is because there is no ingress controller. This controller will read this ingress resource ingress-2048, and will create a load balancer for us and configure it.

