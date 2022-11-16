require('dotenv').config();
const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const  axios  = require('axios')
const { Pais , Region} = require('../db');
const { route } = require('../app');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/regions", async (req, res) => {
    try {
        const region = []
        const country = []
        const countrys = []

        const json = (await axios("https://restcountries.com/v3.1/all")).data
        for (const key of json) {
            !region.includes(key.region) && region.push(key.region)
            !country.includes(key.name.common) && country.push(key.name.common)
        }
        country.map(async g=> await Pais.findOrCreate(
            {where:{
                name:g
            },
            include:{
                model: Region,
            }
        }))
        region.map(async x=> await Region.findOrCreate(
            {where:{
                name:x
            }
        }))

        res.status(200).send(countrys)
    } catch (error) {
        console.log(error);
    }
})
router.get("/regionsGet", async (req, res) =>{
    const regions = await Region.findAll({
        include:{
            model: Pais,
        }
    })
    console.log(regions);
    res.status(200).send(regions)
})
module.exports = router;
