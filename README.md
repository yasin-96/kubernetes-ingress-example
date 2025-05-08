This is a Kubernetes Ingress example consisting of a frontend service and a backend service.

1. Build Docker image from backend
2. Build Docker image from frontend
3. Create backend deployment with just built backend image(backend-deployment.yaml)
4. Create frontend deployment with just built frontend image(frontend-deployment.yaml)
5. Create backend Service(backend-service.yaml)
6. Create frontend Service(frontend-service.yaml)
7. Install Nginx Ingress Controller
8. Create Ingress resource(ingress.yaml)
9. Now open the frontend in the browser: myappfrontend.com send request via textfield and button enter to backend
10. Check log of both backend pods your entered message should be in the console. 
