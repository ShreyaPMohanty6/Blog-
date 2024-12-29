import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const posts=[];

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
   res.render("about.ejs");
});

app.get("/create", (req, res) => {
   res.render("create.ejs");
});

app.post("/submit", (req, res) => {
  const post = req.body["text"];
  posts.push(post);
  res.render("create.ejs", {text: post,
    allposts: posts
  });
});

app.listen(port, () => {
console.log(`Server running on port ${port}`);
 });
