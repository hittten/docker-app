#!/usr/bin/env bash
kubectl create deployment docker-app-deployment --image=hittten/docker-app:1.0.0
kubectl expose deployment docker-app-deployment --name=docker-app-service --type=NodePort --port=80
minikube service docker-app-service --url
