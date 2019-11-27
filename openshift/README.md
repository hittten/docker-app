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
- with minishift: 
```bash
minishift start
```

- with developer server:

Before continue you have to know which "#" number you are.
```bash
oc login hitten.sytes.net:8443 -u user# -p user#
```

then run 
```bash
oc get pods
oc get nodes
```

### Step 2
If you are using minishift find the console message: "The server is accessible via web console at: https://x.x.x.x:8443/console" and open the url.
Otherwise visit https://hitten.sytes.net:8443/console and login with "user#".

Create a new project with "Create Project" button up-right and name it "bootcamp#".

Let's try to deploy an image from dashboard. 
- Visit your project "Bootcamp". You can see it in the right panel.
- Find up-right "Add to project" dropdown menu -> "deploy image"
- Select "Image name" radio button, write "nginx" and hit enter.
- You will see a warning like "Image nginx runs as the root user which might not be permitted by your cluster administrator."
- Continue anyway click deploy button and look what happen. 

Now, if you are using minishift you will see an error. Note: By default openshift server don't let you run containers with root user.
The best practice is build our Dockerfile with non-root user execution.
For this practice as administrators we can disable this policy see https://docs.openshift.com/enterprise/3.2/admin_guide/manage_scc.html#enable-images-to-run-with-user-in-the-dockerfile 
to learn about this and run:
```bash
oc adm policy add-scc-to-group anyuid system:authenticated
```
and try again

### Step 3
From left panel:
- Visit Application -> Pods. Click on it and remove with button action
- Visit Application -> Services. Click on it and remove with button action
- Visit Application -> Deployments. Click on it and remove with button action
- Visit Builds -> Builds. Click on it and remove with button action

### Step 4
Try to apply our kubernetes config from CLI
```bash
oc apply -f kubernetes/2-config-files/app-deployment.yaml
```
kubectl commands works too.
```bash
kubectl delete deployment docker-app-deployment
```

### Step 5
Try to deploy api `hittten/docker-app:v3.0.0` image from dashboard.
- Visit Applicationo -> Services. open the service and click on "Create route".
- Create a route for docker-app `docker-app-route` expose 80 port
- Visit route url.

### Step 6
Try to deploy `hittten/docker-api` image from dashboard.
- Create a route for docker-app `docker-app-route` expose 80 port
- Visit route url with `/hello`, You will see "Hello API from node Express!"
- Visit route url with `/messages`, Error? You need a mongodb with a volume remember?
- Visit "Browse Catalog" into dashboard. find "MongoDB" and Create one with 1Gbi:
  * Database Service Name: mongodb
  * MongoDB Connection Username: admin
  * MongoDB Connection Password: admin
  * MongoDB Database Name: admin
  * MongoDB Admin Password: admin

Now you need to change env vars for docker-api deployment:
- Visit "Applications > Deployments > docker-api > Environment
  * DB_HOST:mongodb:27017
  * DB_USER:admin
  * DB_PASS:admin
  
Hit save, wait a moment and visit route url with `/messages`. Now is ok.
