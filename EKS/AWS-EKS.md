## AWS EKS

Amazon Elastic Kubernetes Service (EKS) is a managed Kubernetes service that makes it easy to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane or nodes. Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications.

## EKS offers a number of benefits, including:

* Managed control plane: EKS takes care of managing the Kubernetes control plane, so you don't have to. This includes tasks such as provisioning and scaling control plane nodes, as well as managing the Kubernetes API server and etcd database.
* High availability: EKS ensures that your Kubernetes cluster is always available by running the control plane across multiple Availability Zones.
* Automatic updates and patching: EKS automatically updates and patches the Kubernetes control plane and nodes, so you don't have to worry about it.
* Integrated monitoring and logging: EKS integrates with Amazon CloudWatch to provide monitoring and logging for your Kubernetes cluster.
* Support for open source tools: EKS supports a wide range of open source Kubernetes tools, so you can use the tools that you're familiar with.
### It is ideal for someone who wants to use K8S orchestration capabilities without worrying about the underlying nfrastructure.

## Here are some of the features of EKS:

* Scalability: EKS can scale your Kubernetes cluster up or down automatically based on demand.
* Security: EKS provides a number of security features, such as role-based access control (RBAC) and encryption.
* Compliance: EKS is compliant with a number of industry standards, such as PCI DSS and HIPAA.
* Cost: EKS is a pay-as-you-go service, so you only pay for the resources that you use.
### On AWS there are two ways in which K8s can be installed
- Setting up on EC2 using KOPS or KUBEADM
- With EKS (No need to worry about underlying infra structure)
