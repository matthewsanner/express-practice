const express= require("express");
const app= express();

//this applies to all requests received, no matter the type
/*app.use((req, res) => {
    console.log("Request received")
    res.send('<h1>We received a request</h1>')
})*/

app.listen(3000, () => {
    console.log("Listening on port 3000");
})

app.get("/r/:subreddit", (req, res) => {
    const subreddit = req.params.subreddit;
    //or can use
    //const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
})

app.get("/r/:subreddit/:postId", (req, res) => {
    const {subreddit, postId} = req.params;
    //OR const subreddit= req.params.subreddit;
    //AND const postId= req.params.postId;
    res.send(`<h1>Viewing post ID: ${postId} on the ${subreddit} subreddit</h1>`);
})

app.get("/cats", (req, res) => {
    res.send("MEOW!");
})

app.post("/cats", (req, res) => {
    res.send("POST REQUEST TO CATS");
})

app.get("/dogs", (req, res) => {
    res.send("WOOF!");
})

app.get("/", (req, res) => {
    res.send("This is the home page!!! HOME!!");
})

app.get('/search', (req, res) => {
    const {q} = req.query;
    if(!q){
        res.send('Nothing found if nothing searched')
    }
    else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
})

//these match everything so need to be at the end
app.get("*", (req, res) => {
    res.send("I don't know what to do with that");
})

app.post("*", (req, res) => {
    res.send("I don't know what to do with that");
})