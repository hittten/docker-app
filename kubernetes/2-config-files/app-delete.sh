#!/usr/bin/env bash
kubectl delete services docker-app-service docker-api-service
kubectl delete deployment docker-app-deployment docker-api-deployment
kubectl delete pvc mongo-db
