const sloths = require("./../controllers/sloths");
const path = require("path")
module.exports = (app) => {
    // app.get("/", cakes.index)
    app.get("/sloths", sloths.getAll)
    app.get("/sloths/:id",sloths.getOne)
    app.post("/sloths",sloths.create)
    // app.post("/sloths/:id",sloths.rate)
    app.put("/sloths/:id",sloths.update)
    app.delete("/sloths/:id",sloths.delete)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}