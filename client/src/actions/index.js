import axios from 'axios'
export function dataApi (){
    return async function(dispatch){
        try {
            const json = await axios("http://localhost:3001/regionsGet")
            const pais = []
            const region = []
            for (const it of json.data) {
                region.push(it.name)
                pais.push(it.pais)
            }
            return dispatch({
                type: "GET_REGIONS",
                regions: region,
                country: pais
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export function countryGet (){
    return async function(dispatch){
        try {
            const json = await axios("http://localhost:3001/regionsGet")
            console.log(json.data[1].country);
            return dispatch({
                type: "GET_COUNTRY",
                payload: json.data[0].country
            })
        } catch (error) {
            console.log(error);
        }
    }
}