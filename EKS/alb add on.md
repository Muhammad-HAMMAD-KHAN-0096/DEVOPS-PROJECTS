# Setting up alb add on.
## Download IAM policy

```
curl -O https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.5.4/docs/install/iam_policy.json
```

<img width="1000" alt="addd-------on" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/17561887-e2d8-4afc-8bfb-84788c41ac1b">

Create IAM Policy

```
aws iam create-policy \
    --policy-name AWSLoadBalancerControllerIAMPolicy \
    --policy-document file://iam_policy.json
```

Creating a Role and attaching it to service account of the pod.

```
eksctl create iamserviceaccount \
  --cluster=<your-cluster-name> \
  --namespace=kube-system \
  --name=aws-load-balancer-controller \
  --role-name AmazonEKSLoadBalancerControllerRole \
  --attach-policy-arn=arn:aws:iam::122583847978:policy/AWSLoadBalancerControllerIAMPolicy \
  --approve
```
<img width="1000" alt="rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/1bcff6fc-7494-4911-8ad5-690a2ef1629c">

## Deploy ALB controller

Helm chart will be used to create controller and will use above created svc account for running the POD.

Add helm repo

```
helm repo add eks https://aws.github.io/eks-charts
```

Update the repo

```
helm repo update eks
```

Install

```
helm install aws-load-balancer-controller eks/aws-load-balancer-controller \            
  -n kube-system \
  --set clusterName=cluster-one \
  --set serviceAccount.create=false \
  --set serviceAccount.name=aws-load-balancer-controller \
  --set region=<$region> \
  --set vpcId=<$your-vpc-id>
```

<img width="1000" alt="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/212401e4-5978-4968-9b87-0b04b89cf5f8">


Verify that the deployments are running.

```
kubectl get deployment -n kube-system aws-load-balancer-controller
```
<img width="1000" alt="Untitlediiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/d35ef17f-99f4-415c-b88c-9e5ba838466a">

_It can be seen also in load balancer section of ec2. This is created by load balancer controller.This address is the load balancer which is created by INGRESS controller watching INGRESS RESOURCE_

![lblblblblblb](https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/b528c78d-52c7-49cf-be27-1cc587bd7c5e)

<img width="1200" alt="lnx clioutput" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/22837838-8859-4e26-a599-b1991910345a">



