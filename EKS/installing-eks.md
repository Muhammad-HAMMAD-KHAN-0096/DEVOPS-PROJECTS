# Install EKS

## Install using Fargate

```
eksctl create cluster --name [cluster-name] --region us-east-1 --fargate
```

## Delete the cluster

```
eksctl delete cluster --name [cluster-name] --region us-east-1
```
