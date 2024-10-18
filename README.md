# PZ Cheeseria
A MVP of the PZ Cheeseria POC that display a selection of cheese that could be purchased in-store. It also features a price calculator to show customers the total price of the cheese based on the weight.

## Potential Features
The features that could be added are to use the other endpoints and make it possible for administrators to add, edit or delete cheese entries. This would also require an account system.

# How to run
## Docker Compose
1. Clone this repository
```
https://github.com/vCel/patient-zero-cheese.git
```
2. In the project directory, open the terminal and enter this into the command line (This does require you to have Docker and Docker Compose installed):
```
docker compose up --build
```
3. Now the application should be running and the website could be accessed through:
- Website: `localhost` (Port 80)
- Backend: `localhost:3000`
- API Docs: `localhost:3000/api-docs`


## Dev Environment
### Frontend
1. Navigate to `cheese-web` directory from `patient-zero-cheese` in the terminal.
```
cd cheese-web
```
2. Install all dependencies
```
npm install
```
3. Run
```
npm run build
```
### Backend
1. Navigate to `cheese-api` directory from `patient-zero-cheese` in the terminal.
```
cd cheese-api
```
2. Install all dependencies
```
npm install
```
3. Run with `devStart` script
```
npm run devStart
```

# Technologies
- Vue.js
- Vue Router
- Node.js
- Express.js
- Docker
- Swagger

