# Development Plan: Intelligent Public Transport Management System

## Objective
Develop an application that enables:
- Real-time tracking of public transport vehicles.
- Delay prediction based on historical and traffic data.
- Visualization of routes and passenger information.
- Route optimization.

---

## Technologies Used

| Component           | Technology                          |
|---------------------|--------------------------------------|
| **Back-end**        | Python (FastAPI) or Node.js         |
| **Database**        | PostgreSQL                          |
| **Front-end**       | React.js + Leaflet.js               |
| **Machine Learning**| Scikit-learn, PyTorch               |
| **DevOps**          | Docker, GitHub Actions/Azure DevOps |
| **Hosting**         | AWS EC2, Google Cloud Run           |

---

## Two-Month Plan

### Week 1: Planning and Setup
- **Objectives:**
  - Define the main features of the project.
  - Set up the development environment.
  - Choose technologies and tools.
- **Tasks:**
  - Draft a requirements document with the main features:
    - Real-time vehicle tracking (AVL).
    - Delay prediction using historical and traffic data.
    - Route visualization and passenger information.
    - Route optimization algorithm.
  - Set up a GitHub/GitLab repository for code management.
  - Install necessary tools:
    - Back-end: Python (FastAPI) or Node.js.
    - Front-end: React.js with Leaflet.js for mapping.
    - Database: PostgreSQL.
    - DevOps: Docker for containerization, CI/CD with GitHub Actions or Azure DevOps.
- **Deliverables:**
  - Clear requirements document.
  - Configured development environment.

---

### Week 2: Data Collection and Storage
- **Objectives:**
  - Collect data on public transport (schedules, traffic, location).
  - Set up a database to store this information.
- **Tasks:**
  - Integrate a public transport API, such as GTFS (General Transit Feed Specification).
  - Create a PostgreSQL database with the following tables:
    - `vehicles` (ID, position, speed).
    - `routes` (routes, stops).
    - `traffic` (real-time traffic conditions).
  - Write a Python/Node.js script to import data into the database.
- **Deliverables:**
  - Functional database with initial imported data.

---

### Week 3: Back-end – REST API
- **Objectives:**
  - Develop a REST API to provide data to users and the front-end.
- **Tasks:**
  - Create endpoints in FastAPI/Node.js:
    - `/vehicles`: Real-time vehicle data.
    - `/routes`: Information on available routes.
    - `/traffic`: Current traffic conditions.
  - Implement periodic data updates using scheduled tasks (e.g., Celery + Redis or Node-cron).
- **Deliverables:**
  - Functional REST API with documented endpoints.

---

### Week 4: Front-end – User Interface
- **Objectives:**
  - Develop an intuitive user interface to visualize transport information.
- **Tasks:**
  - Create an interactive map using Leaflet.js integrated into React.js:
    - Display real-time vehicle positions.
    - Visualize routes and stops.
  - Add a search bar to find specific routes or stops.
- **Deliverables:**
  - Functional user interface connected to the API.

---

### Week 5: Machine Learning – Delay Prediction
- **Objectives:**
  - Implement a simple ML model to predict delays based on historical and traffic data.
- **Tasks:**
  - Prepare a dataset from historical schedules and traffic conditions.
  - Train a supervised model (e.g., Random Forest or Gradient Boosting) to predict vehicle delays.
  - Integrate the model into the back-end via a `/predict-delay` endpoint.
- **Technologies Used:** 
  - Scikit-learn or PyTorch for machine learning.
- **Deliverables:** 
  - Deployed ML model accessible via the API.

---

### Week 6: Route Optimization Algorithm
- **Objectives:** 
  - Implement an optimization algorithm to suggest the fastest route for users.
- **Tasks:** 
  - Use an algorithm like Dijkstra or A* to calculate the optimal path between two points considering traffic conditions.
  - Add an `/optimal-route` endpoint in the API that returns the optimized route.
- **Deliverables:** 
  - Operational route optimization functionality.

---

### Week 7: DevOps – Continuous Deployment
- **Objectives:** 
  - Automate deployment and ensure continuous service availability.
- **Tasks:** 
  - Containerize the application using Docker (back-end + front-end).
  - Configure CI/CD with GitHub Actions or Azure DevOps:
    - Automated tests before each deployment.
    - Blue/Green or Canary deployment strategy.
    - Host on AWS EC2 or Google Cloud Run.
- **Deliverables:** 
  - Functional CI/CD pipeline.

---

### Week 8: Final Testing and Documentation
- **Objectives:** 
  - Test the entire system and write comprehensive documentation.
- **Tasks:** 
  - Perform unit tests on each component (API, front-end, ML).
  - Conduct integration tests between the front-end and back-end components.
  - Write user and technical documentation (README.md).
- **Deliverables:** 
  - Finalized project ready for presentation.

---

## Summary

This two-month plan will help you develop a complete system combining back-end, front-end, machine learning, and DevOps. Each step is designed to be achievable while allowing you to learn modern technologies. Feel free to adjust this plan based on your needs!
