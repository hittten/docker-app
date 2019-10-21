# Kubernetes
## Learn
* Concepts https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/
* Basis https://kubernetes.io/docs/tutorials/kubernetes-basics/

## Installation
https://kubernetes.io/docs/setup/learning-environment/minikube/

## kubectl Cli practice
### Step 1
We need a local cluster to use kubernetes.

Run `minikube start` to start cluster Virtual Machine. You can use `minikube status` to check status before.

### Step 2
Open [kube_create.sh](/kube_create.sh) and familiarize with commands:
```bash
kubectl create deployment docker-app-deployment --image=hittten/docker-app:v2.0.0
kubectl expose deployment docker-app-deployment --name=docker-app-service --type=NodePort --port=80
minikube service docker-app-service --url
```
Run `./kube_create` and open de output url to se the app running. 

### Step 3
Play with 
```bash
kubectl get nodes
kubectl get pods
kubectl get deployments
kubectl get services
kubectl describe deployment docker-app-deployment
kubectl describe service docker-app-service
kubectl describe pod POD_ID
```

### Step 4
Let's do some deployment scale
```bash
kubectl scale deployments/docker-app-deployment --replicas=3
kubectl get pods
kubectl scale deployments/docker-app-deployment --replicas=2
kubectl get pods
```

### Step 5
Let's update our app
```bash
kubectl set image deployment/docker-app-deployment docker-app=hittten/docker-app:v2.1.0
kubectl get pods
```

### Step 6
Interact with containers
```bash
kubectl logs POD_ID
kubectl exec POD_ID ls
kubectl exec POD_ID cat index.html
kubectl exec -it POD_ID /bin/bash
minikube ssh
```

### Step 7
Open minikube dashboard
```bash
minikube dashboard
```

### Step 8
Open [kube_delete.sh](/kube_delete.sh) and familiarize with commands:
```bash
kubectl delete services docker-app-service
kubectl delete deployment docker-app-deployment
```
Run `./kube_delete` and see the dashboard
