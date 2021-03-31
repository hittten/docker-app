# Openshift
- Online https://www.openshift.com/
- Open Source https://www.okd.io/

## Learn
- Concepts https://www.okd.io/#v3
- Documentation https://docs.okd.io/
- playground https://learn.openshift.com/ 

## Installation
You can find server client binaries here https://www.okd.io/download.html

### Server
- Docker Containers https://docs.okd.io/latest/getting_started/administrators.html#running-in-a-docker-container
- minishift https://www.okd.io/minishift/

### Client
https://www.okd.io/download.html#oc-platforms

## Practice
### Step 1
Start your Server or connect to one with `oc login [URL] -u [USER] -p [PASSWORD]`. And run
```bash
oc get pods
oc get nodes
oc login -u system:admin
oc get nodes
```
find the console message: "The server is accessible via web console at: https://xxx.xxx.xx.x:8443/console" and open the url

### Step 2
Try to deploy image from dashboard. 
- Visit your project "My Project"
- Find up-right "Add to project" dropdown menu -> "deploy image"
- Select "Image name" radio button, write "nginx" and hit enter.
- You will see a warning like "Image nginx runs as the root user which might not be permitted by your cluster administrator."
- Continue anyway click deploy button and look what happen. Familiarize with the error.

Note: By default openshift server don't let you run containers with root user.
The best practice is build our Dockerfile with non-root user execution.
For this practice as administrators we can disable this policy see https://docs.openshift.com/enterprise/3.2/admin_guide/manage_scc.html#enable-images-to-run-with-user-in-the-dockerfile 
to learn about this and run:
```bash
oc adm policy add-scc-to-group anyuid system:authenticated
```

### Step 3
Try to apply our kubernetes config
```bash
oc apply -f kubernetes/2-config-files/app-deployment.yaml
```
kubectl commands works too.
```bash
kubectl delete deployment docker-app-deployment
```

### Step 4
Try to deploy api `hittten/docker-app:2.0.0` image from dashboard.
- Create a route for docker-app `docker-app-route` expose 80 port
- Visit route url

### Step 4
Try to deploy `hittten/docker-express-api:2.0.0` image from dashboard.
- Create a route for docker-app `docker-api-route` expose 3000 port
- Visit route url with `/messages`, Error? You need a mongodb with a volume remember?
- Visit "Browse Catalog" into dashboard. find "MongoDB" and Create one with 1Gbi:
  * Database Service Name: mongodb
  * MongoDB Connection Username: admin
  * MongoDB Connection Password: admin
  * MongoDB Database Name: admin
  * MongoDB Admin Password: admin

Now you need to change env vars for docker-express-api deployment:
- Visit Applications > Deployments > docker-express-api > Environment
  * dbHost:mongodb:27017
  * dbUser:admin
  * dbPass:admin
  
Hit save, wait a moment and visit route url with `/messages`. Now is ok.
