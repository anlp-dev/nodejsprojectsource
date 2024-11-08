const exphbs = require("express-handlebars");

const hbs = exphbs.create();

const viewEngine = (app) => {
  app.engine("handlebars", hbs.engine);
  app.set("view engine", "handlebars");
  app.set("views", path.join(__dirname, "views"));
};

module.exports = { viewEngine };
