
const express = require(`express`);
const mongoose = require(`mongoose`);
const dotenv = require(`dotenv`);
const contactRoute = require(`./routes/contact`);
const articleRoute = require(`./routes/article`);
const userRoute = require(`./routes/user`);

const app = express();

     
require("dotenv").config();
// connect to database
const dbURI= `mongodb+srv://fides:fides123@mybrand.zytgh.mongodb.net/Mybrand?retryWrites=true&w=majority`;
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log(`connected to db`))
.catch((err) => console.log(err));

app.use(express.json());


// Route Mildwares
app.use(`/user`, userRoute);
app.use(`/articles`, articleRoute);
app.use(`/contact`, contactRoute);

app.use(`/*`, (req,res) =>{
    res.status(404).json({
        status: `fail`,
        message: `Page Not found`
    });
});

// app.listen(3000, () => console.log(`server running`))

const PORT = process.env.PORT || 3000
module.exports = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

