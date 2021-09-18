//works as postman
//const url1 = "https://eurekaguessinggame.herokuapp.com/api/score"
const url1 = "http://localhost:180/api/score"
async function getScores(){
    //get request by default
    const data = await fetch(url1)
    const data1 = await data.json()
    return  data1

}
async function postScore(name,score){
    const data = await fetch (url1,{
        method: "POST",
        headers: {
            'Accept':'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({name,score})
    })
    const data2 = await data.json()
    return  data2

}