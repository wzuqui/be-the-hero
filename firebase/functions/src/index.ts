import * as functions from "firebase-functions";

import * as cors from "cors";
import * as express from "express";
import SessionController from "./controllers/SessionController";
import OngController from "./controllers/OngController";
import ProfileController from "./controllers/ProfileController";
import IncidentController from "./controllers/IncidentController";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const app = express();

app.use(cors());
app.use(express.json());

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);
routes.delete("/ongs/:id", OngController.delete);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

app.use(routes);

export const api = functions.https.onRequest(app);
