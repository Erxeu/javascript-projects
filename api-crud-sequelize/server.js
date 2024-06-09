const app = require("./src/app.js");

const PORT = [3000, 8080, 8040];


app.listen(PORT[1], () =>{
    console.log(`server database on PORT ${PORT[1]} ok!!`);
});