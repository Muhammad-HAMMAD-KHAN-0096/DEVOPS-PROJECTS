# Creating EKS-Cluster


## Fargate is a serverless compute engine that allows you to run containers without having to manage servers or infrastructure. It is integrated with Amazon EKS, so you can use it to run Kubernetes Pods on AWS.

With Fargate, you specify the amount of CPU and memory that your container needs, and Fargate takes care of the rest. You don't need to worry about provisioning or scaling EC2 instances, or managing Kubernetes nodes.


## Create using Fargate

```
eksctl create cluster --name [cluster-name] --region us-east-1 --fargate
```
### This will create cluster service role,vpc,a public subnet and a private subnet.In the private subnet we will keep our application.
Once the cluster is created we can see all information about the clust in the console without using kubectl command in the cli.
- we can see info in overview section of the console.i.e API server endpoint, OpenID Connect provider URL, Cluster IAM role ARN etc.

![ov](https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/f27f793e-1e9e-4a0f-8512-a09b14d8af9f)
- **OpenID Connect provider URL
  For integrating identity providers.i.e octa,keycloak etc i.e login with fb,google.IAM identity provider-->for pods to talk to other svc like s3,cloudwatch**
- In resources section we can see all info about this cluster i.e., pods, Replica Sets,deployments etc.

<img width="1200" alt="Picture2" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/2d20978f-c487-40a9-98f4-bf969a2202e0">

- IN compute section it is showing what compute is being user i.e FARGATE or EC2.

![compute](https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/cf8c48e8-d377-42ca-b65d-2b0f7e5843b0)

- forgate profile section shows us the name spaces which our forgate profile is attached Pods can only be deployed to these two name spaces.

![fprfle](https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/8dc516d2-8adc-4138-9f70-8219a1e0cc85)

- Now we will download the kubeconfig file so we will be able to work without going to the console every time.

<img width="1200" alt="kube-conf" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/30b26949-7cd8-4fc4-800f-a3ace2f717af">






## Delete the cluster

```
eksctl delete cluster --name [cluster-name] --region us-east-1
```




