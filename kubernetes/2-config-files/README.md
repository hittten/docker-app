# Kubernetes
## Learn
* Objects https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/
* Config files https://kubernetes.io/docs/tasks/manage-kubernetes-objects/
* APi reference https://kubernetes.io/docs/reference/#api-reference

## kubectl YAML practice
### Step 1
Open [app-deployment.yaml](/app-deployment.yaml) and familiarize with content. Then run
```bash
kubectl apply -f app-deployment.yaml
```

### Step 2
Open [app-service.yaml](/app-service.yaml) and familiarize with content. Then run
```bash
kubectl apply -f app-service.yaml
```
Open http://192.168.99.100:30000

### Step 3
Open [api-deployment.yaml](/api-deployment.yaml) and familiarize with content. Then run
```bash
kubectl apply -f api-deployment.yaml
```
See deployments in dashboard. Is failing? Open http://192.168.99.100:30000 your app should be ok.

### Step 4
Open [api-volume.yaml](/api-volume.yaml) and familiarize with content. Then run
```bash
kubectl apply -f api-volume.yaml
```
See deployments in dashboard. Now "docker-api-deployment" is ok automatically

### Step 5
Open [api-service.yaml](/api-service.yaml) and familiarize with content. Then run
```bash
kubectl apply -f api-service.yaml
```
Open http://192.168.99.100:30001/hello and http://192.168.99.100:30001/messages

### Step 6
Now let's update our app.
Edit file [app-deployment.yaml](/app-deployment.yaml) change in the container config "v2.0.0" to "v3.0.0"
Open Pods in dashboard and keep watching while you run:
```bash
kubectl apply -f app-deployment.yaml
```
Then open http://192.168.99.100:30000 and see the app updated! Look the container id next to "docker-app is running!" text.

### Step 7
Open [app-delete.sh](/app-delete.sh) and familiarize with content. Then run
```bash
./app-delete.sh
```

### Step 8
Open [app.yaml](/app-yaml) and familiarize with content. Then run
```bash
kubectl apply -f app.yaml
```
