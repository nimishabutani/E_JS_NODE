import express, { Application, Request, Response, response } from "express";
import dotenv from "dotenv";
import { DBUtil } from "./util/DButil";
import { error } from "console";
import ejs from "ejs";
import { request } from "http";
import mustacheExpress from "mustache-express";
// ejs
// mustache
// Handlebars


const app: Application = express();


// app.set("view engine", "ejs");
app.engine("mustache",mustacheExpress());
app.set("view engine","mustache");

dotenv.config({
    path: "./.env"
})

const port: string | undefined = process.env.EXPRESS_PORT;
const hostname: string | undefined = process.env.EXPRESS_HOSTNAME;


//index
// app.get("/", (request: Request, response: Response) => {
//     let model = { x: 1000, y: 30 };
//     response.render("index", model);
// });

// //login
// app.get("/login", (request: Request, response: Response) => {
//     let model = { username: "skill", password: "qode" };
//     response.render("login", model);
// });

//student
app.get("/student", (request: Request, response: Response) => {
    let model = { 
        studentId: "S01", 
        studentName: "nimisha",
    studentMarks:40,
subject:[
    {name:"maths",marks:"54"},
    {name:"science",marks:"67"},
    {name:"english",marks:"98"},
],
 };
    response.render("student", model);
});


if (port) {
    app.listen(Number(port), () => {
        console.log("server stared ...........");
    })
}
