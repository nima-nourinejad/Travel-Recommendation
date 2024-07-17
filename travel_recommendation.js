let url = "travel_recommendation_api.json";
let sbar= document.getElementById("search");
let sbtn= document.getElementById("searchBtn1");
function search1(){
    if (!sbar.value) return;
    let val = sbar.value.toLowerCase();
    console.log(val);
    if (val ==='beach' || val === 'beaches') val ="beach";
    else if (val === 'country' || val === 'countries') val ="country";
    else if (val === 'temple' || val === 'temples') val ="temple";
    else val = ''
    console.log(val);
    if (!val) return;
    // fetch(url)
    // .then(response=>response.json())
    // .then(data=>{

    // })
}
sbtn.addEventListener('click', search1)
