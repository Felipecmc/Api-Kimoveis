import app from "./app";
import {AppDataSource} from "./data-source";

(async () => {

    await AppDataSource.initialize().then(() => {console.log("conectou no banco")})
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
    
    app.listen(3000, () => {
        console.log("Servidor executando")
    })    
})()