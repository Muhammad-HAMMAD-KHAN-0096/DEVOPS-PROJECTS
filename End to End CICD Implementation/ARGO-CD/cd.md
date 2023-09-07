# ARGOCD WILL BE USED FOR CD USING GITOPS PRACTICES
### Minikube cluster
In real life ec2 instance will be used here i m using minkube in my local machine .
<img width="916" alt="k8s-minikbe" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/b2f08657-5c61-4630-b63f-20b149cb3863">

- Argo is a K8s controller i will install using operater[manage lifecycle of k8s operator]
_we will use operrator hub_

https://operatorhub.io/operator/argocd-operator
```
$ curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.25.0/install.sh | bash -s v0.25.0
```
Install the operator by running the following command:
```
kubectl create -f https://operatorhub.io/install/argocd-operator.yaml
```
- This Operator will be installed in the "operators" namespace and will be usable from all namespaces in the cluster.
