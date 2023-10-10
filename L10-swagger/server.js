var express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJSDoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());


app.use("/books", require("./routes/books"));

const PORT = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Swagger with IBA FS 01 guys 😀",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "IBA Tech",
        url: "github.com/ali-greenheart",
        email: "alitest01@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js", "./jsdoc/*.js"],
};
const specs = swaggerJSDoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: true,
    customCssUrl:
      "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-monokai.css",

  })
);
app.listen(PORT);

console.debug("Server listening on port: " + PORT);
