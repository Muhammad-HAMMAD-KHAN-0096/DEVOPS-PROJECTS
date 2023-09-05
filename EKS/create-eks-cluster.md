# Creating EKS-Cluster

## Create using Fargate

```
eksctl create cluster --name [cluster-name] --region us-east-1 --fargate
```

## Delete the cluster

```
eksctl delete cluster --name [cluster-name] --region us-east-1
```

## Fargate is a serverless compute engine that allows you to run containers without having to manage servers or infrastructure. It is integrated with Amazon EKS, so you can use it to run Kubernetes Pods on AWS.

With Fargate, you specify the amount of CPU and memory that your container needs, and Fargate takes care of the rest. You don't need to worry about provisioning or scaling EC2 instances, or managing Kubernetes nodes.



