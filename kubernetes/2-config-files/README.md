# Kubernetes
## Learn
* Objects https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/
* Config files https://kubernetes.io/docs/tasks/manage-kubernetes-objects/
* APi reference https://kubernetes.io/docs/reference/#api-reference

## kubectl YAML practice
### Step 1
Open [app-deployment.yaml](/kubernetes/2-config-files/app-deployment.yaml) and familiarize with content. Then run
```bash
kubectl apply -f kubernetes/2-config-files/app-deployment.yaml
```

### Step 2
Open [app-service.yaml](/kubernetes/2-config-files/app-service.yaml) and familiarize with content. Then run
```bash
kubectl apply -f kubernetes/2-config-files/app-service.yaml
```
To see it run in new terminal `kubectl port-forward service/docker-app-service 80:80` or with can run `minikube tunnel`

### Step 3
Open [api-deployment.yaml](/kubernetes/2-config-files/api-deployment.yaml) and familiarize with content. Then run
```bash
kubectl apply -f kubernetes/2-config-files/api-deployment.yaml
```
See deployments in the dashboard. Is failing? Open http://localhost your app should be ok.

### Step 4
Open [api-volume.yaml](/kubernetes/2-config-files/api-volume.yaml) and familiarize with content. Then run
```bash
kubectl apply -f kubernetes/2-config-files/api-volume.yaml
```
See deployments in the dashboard. Now "docker-api-deployment" is ok automatically

### Step 5
Open [api-service.yaml](/kubernetes/2-config-files/api-service.yaml) and familiarize with content. Then run
```bash
kubectl apply -f kubernetes/2-config-files/api-service.yaml
```
Open http://localhost:3000/messages

### Step 6
Now let's update our app.
Edit file [app-deployment.yaml](/kubernetes/2-config-files/app-deployment.yaml) change in the container config "1.0.0" to "2.0.0"
Open Pods in dashboard and keep watching while you run:
```bash
kubectl apply -f kubernetes/2-config-files/app-deployment.yaml
```
Then open http://localhost and see the app updated!.

### Step 7
Open [app-delete.sh](/kubernetes/2-config-files/app-delete.sh) and familiarize with content. Then run
```bash
./kubernetes/2-config-files/app-delete.sh
```

### Step 8
Open [app.yaml](/kubernetes/2-config-files/app.yaml) and familiarize with content. Then run
```bash
kubectl apply -f kubernetes/2-config-files/app.yaml
```
