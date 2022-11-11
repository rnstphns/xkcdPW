const express = require('express')
const app = express()



app.all("*", (req, res, next) => {
    res.status(404);
    const route = req.url;
    next(new Error(`Route \'${route}\' not found`));
  });
  
app.use((err, req, res, next) => {
    res.json({ success: false, error: err.message });
 });
  
const PORT = 3000;
app.listen(PORT, () => console.log(`app listening on ${PORT}`));
app.on("exit", () => {
    //close connection
  });