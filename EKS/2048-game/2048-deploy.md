# 2048 application POD deploy using deployment.

## Create Fargate profile

```
eksctl create fargateprofile \
    --cluster cluster-one \
    --region us-east-1 \
    --name alb-sample-app \
    --namespace game-2048
```
<img width="1200" alt="fgprfcrt" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/0dfbe322-4f3d-4c90-b79b-690e3cc973c9">
