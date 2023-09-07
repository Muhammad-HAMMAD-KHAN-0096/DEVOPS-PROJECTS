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
- For installing argo controller create a yaml file as given below taken from official documentation
- https://argocd-operator.readthedocs.io/en/latest/usage/basics/
```
apiVersion: argoproj.io/v1alpha1
kind: ArgoCD
metadata:
  name: example-argocd
  labels:
    example: basic
spec: {}
```
## Result:

<img width="1000" alt="argo-workloads" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/02442b6d-5aed-4c06-9642-670d59af5a9e">

## For accessing argo dashboard change argo server service type from cluster ip to NodePort as shown below.

<img width="1100" alt="argo-browser" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/e6131dde-a7a9-4e8f-bbda-3867485c3d2e">

## For browser access.Floowing command will generate a link for us to access in our browser.

<img width="1000" alt="svc brwser access " src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/5c7c9aa4-66b7-411e-ba43-10bcb7d452ab">
- Username is admin and for password

<img width="1000" alt="ARGO-PASS" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/f6b9fec5-27aa-4ce8-b30a-e7ab185265a3">
- In Browser
<img width="1100" alt="argo-dashboard-you" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/0503c8d7-5319-492f-b3fd-82a528ce860b">

### After loggin in click Create application.
#### Name the Project ,enter values of following  Repository URL in SOURCE section, path of your deployment,Cluster URL and NAMSPACE ---->create.


<img width="1037" alt="final-spring" src="https://github.com/Muhammad-HAMMAD-KHAN-0096/DEVOPS-PROJECTS/assets/141496839/34413c87-ffdf-4235-9d71-33564996e2cd">

# Now when ever there is any drift in your deploment argocd will handle it.because here Git hub is considered as single source of truth.



