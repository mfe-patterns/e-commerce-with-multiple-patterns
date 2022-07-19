# Microfrontend Pattern : Reverse Composition
## Few word cloud used in the readme file
```
*mf : Micro-frontend
```

## Description
In this pattern, the application is divided into smaller *mf based on routes. You can decide on whether the sub-routes can be different *mf or can be within a single mf. There is a central server which redirects all the request coming to different *mf. Each *mf is hosted in a separate route. These can be developed, tested and deployed independently. 

In our application, we have cart, catalog and container as separate *mf. "route-handler" is the central server where all the requests are exposed and then the server redirects to different *mf.

## Running the application
```
npm run prepare-all
npm run start-all
```

This would run all the *mf and you can see the central server running on port 3000.