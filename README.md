

```markdown
# Project Scope and Features: Intelligent Public Transport Tracking in Bordeaux

## **Data Sources and APIs**
1. **TBM (Transports Bordeaux Métropole)**:
   - **Static Data**: GTFS files for routes, stops, and schedules.
   - **Real-Time Data**: GTFS-RT for vehicle positions, delays, and alerts.
   - **Source**: [TBM GTFS Dataset](https://transport.data.gouv.fr/datasets/offres-de-services-bus-tram-et-scolaire-au-format-gtfs-gtfs-rt-siri-lite).

2. **SNCF (Trains)**:
   - **Data**: Real-time train schedules, positions, and delays.
   - **API**: SNCF Open Data API ([Documentation here](https://numerique.sncf.com/startup/api)).
   - Use case: Fetch real-time train data for Bordeaux Saint-Jean station.

3. **Bordeaux-Mérignac Airport**:
   - **Data**: Flight arrivals, departures, and delays.
   - **Source**: [Bordeaux Airport Flight Tracker](https://www.bordeaux.aeroport.fr/en/flights-destinations/arrivals-departures-day).

---

## **Core Features for MVP**
1. **Real-Time Tracking**:
   - Display real-time positions of buses, trams, trains, and planes on an interactive map using Leaflet.js.
   - Fetch data from TBM GTFS-RT API for buses/trams.
   - Use SNCF API for real-time train tracking.
   - Scrape or integrate Bordeaux Airport data for flight tracking.

2. **Delay Information**:
   - Show current delays for each transport mode using GTFS-RT (TBM), SNCF API, and airport data.

3. **Route Visualization**:
   - Display routes for buses, trams, trains, and flight paths on the map.
   - Allow users to search for specific routes or stops.

4. **Service Alerts**:
   - Provide alerts about disruptions or changes in service (e.g., canceled trips or route deviations).

---

## **Technology Stack**
1. **Back-End**:
   - Framework: Node.js with Express.js.
   - Responsibilities:
     - Fetch and process data from APIs (TBM GTFS-RT, SNCF API, Bordeaux Airport).
     - Provide RESTful endpoints for front-end consumption.
     - Handle real-time updates and caching using Redis (optional).

2. **Front-End**:
   - Framework: React.js with Leaflet.js for interactive maps.
   - Responsibilities:
     - Display real-time vehicle positions on a map.
     - Show route details, delays, and service alerts.

3. **Database**:
   - Options: PostgreSQL (relational), MongoDB (document-based), or Cassandra (distributed).
   - Suggested choice: PostgreSQL for structured data like schedules and routes.
     - Tables:
       1. `vehicles`: Store vehicle positions and statuses.
       2. `routes`: Store static route data from GTFS.
       3. `alerts`: Store service alerts from APIs.

4. **CI/CD Pipeline**:
   - Tools: Docker for containerization, Jenkins for automation, AWS EC2/S3 for hosting.
   - Responsibilities:
     - Automate testing and deployment of back-end and front-end services.

---

## **System Architecture**
```
+-------------------+       +-------------------+       +-------------------+
|                   |       |                   |       |                   |
|  TBM GTFS-RT API  |       | SNCF Real-Time    |       | Bordeaux Airport  |
|                   |       | API               |       | Flight Tracker    |
+-------------------+       +-------------------+       +-------------------+
         |                           |                           |
         v                           v                           v
+-----------------------------------------------------------------------+
|                                                                       |
|                              Data Layer                               |
|   - Data Ingestion: Fetch real-time data from APIs                    |
|   - Database: PostgreSQL/MongoDB/Cassandra for structured/unstructured|
|                                                                       |
+-----------------------------------------------------------------------+
         |                           ^                           ^
         v                           |                           |
+-----------------------------------------------------------------------+
|                                                                       |
|                             Back-End Layer                            |
|   - Node.js + Express.js: RESTful API                                 |
|   - Data Aggregation: Combine static GTFS and real-time data          |
|   - AI Integration: Call AI model for delay prediction               |
|                                                                       |
+-----------------------------------------------------------------------+
         |                                                           
         v                                                           
+-----------------------------------------------------------------------+
|                                                                       |
|                              AI/ML Layer                              |
|   - Model Training: Train ML models (e.g., Random Forest, LSTM)       |
|   - Prediction Service: Expose AI predictions via REST API            |
|   - Frameworks: Scikit-learn, TensorFlow, or PyTorch                  |
|                                                                       |
+-----------------------------------------------------------------------+
         |                                                           
         v                                                           
+-----------------------------------------------------------------------+
|                                                                       |
|                             Front-End Layer                           |
|   - React.js + Leaflet.js: Interactive map and UI                     |
|   - Real-Time Updates: Show vehicle positions, delays, and routes     |
|   - User Interaction: Search routes/stops and view predictions        |
|                                                                       |
+-----------------------------------------------------------------------+

```

---

## **Next Steps**
1. Finalize the architecture diagram based on this scope.
2. Start setting up the development environment as outlined in Week 1's plan:
   - Install Node.js and create a basic Express.js server.
   - Initialize React.js with Leaflet.js for the front-end.
   - Set up PostgreSQL locally or use a cloud-hosted database like AWS RDS.


```