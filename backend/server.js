import express from 'express';

const app = express(); // This creates an instance of an Express application

/////// Routes ///////


app.get("/api/notes", (req,res) =>{
    res.send("you got 5 notes");
})

app.listen(5001,() => { // This starts the server and listens on port 5001
    console.log('Server is running on port 5001');
}
);