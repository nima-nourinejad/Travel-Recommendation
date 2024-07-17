let url = "travel_recommendation_api.json";
fetch(url)
.then(response=>response.json())
.then(data=>{
    console.log(data);

})