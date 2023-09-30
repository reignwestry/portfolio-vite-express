// server setup.js
import express from "express";
import ViteExpress from "vite-express";

//PAGES
import App from './../src/App';
import PortfolioPage from './../src/pages/PortfolioPage';
import ServicesPage from './../src/pages/ServicesPage';
import AboutPage from './../src/pages/AboutPage';
import ContactPage from './../src/pages/ContactPage';
//? Hidden Page for new project form
import NewProject from './../src/pages/NewProject';
//# Hidden Page for Stripe processing
import PaymentPage from './../src/pages/PaymentPage';
import NotFound from './../src/pages/NotFound';

const port = 3000;

const app = express();

//# API ROUTES
app.get("/about", (_, res) => res.send(<AboutPage />)); 
app.get("/contact", (_, res) => res.send(<ContactPage />)); 
app.get("/message", (_, res) => res.send("Hello from express!"));
app.get("/payment", (_, res) => res.send(<PaymentPage />));
app.get("/portfolio", (_, res) => res.send(<PortfolioPage />)); 
app.get("/newproject", (_, res) => res.send(<NewProject />)); 
app.get("/services", (_, res) => res.send(<ServicesPage />)); 
app.get("/", (_, res) => res.send(<App />))
app.get("*", (_, res) => res.send(<NotFound />));

ViteExpress.listen(app, port, () =>
  console.log(`Express Server is listening on port ${port}...`)
);
