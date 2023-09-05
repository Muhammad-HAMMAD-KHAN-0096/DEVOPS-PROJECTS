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
