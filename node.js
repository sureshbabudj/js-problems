
const express = require('express');
const router = express.Router();
const app = express();



app.use('/', (req, res) =>{
    res.send({message: "POST new manoj"});
}); //to use the routes

module.exports = router;

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});