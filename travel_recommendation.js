let url = "travel_recommendation_api.json";
let sbar= document.getElementById("search");
let sbtn= document.getElementById("searchBtn");
function search(){
    if (!sbar.value){
        clear();
        return;
    }
    let val = sbar.value.toLowerCase();
    if (val ==='beach' || val === 'beaches') val ="beaches";
    else if (val === 'country' || val === 'countries') val ="countries";
    else if (val === 'temple' || val === 'temples') val ="temples";
    else val = ''
    if (!val){
        clear();
        return;
    }
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        let result = data[val];
        // let elem = document.createElement('div');
        let elem = document.getElementById('result');
        // let style = 'z-index: 1; grid-column: 5/10; grid-row: 2/9';
        // let id = 'result';
        let inh = '';
        if (val === "countries"){
            result.forEach(item=>{
                inh+=`<br>`
                inh+=`<h1>Country:${item["name"]}<h1>`
                let cities = item["cities"]
                cities.forEach(i=>{
                    // inh+=`<img src=${i["imageUrl"]} style="width: 400px; height:auto" >`;
                    inh+=`<img src=${i["imageUrl"]} style="max-width: 800px; height:auto">`;
                    inh+=`<h3>City:${i["name"]}<h3>`;
                    // inh+=`<p style="width: 400px;font-weight:100 ;font-size: medium;">Description:<span>${i["description"]}</span><p>`
                    inh+=`<h5>${i["description"]}</h5>`
                    inh+=`<button style="height:50px;width:150px; color: white; background-color: cadetblue; border-radius: 5px; border: none;">VISIT</button><br><br><br><br>`

                })
                inh+=`<br>`
            })
        }
        else{
            result.forEach(i=>{
                inh+=`<br>`
                // inh+=`<img src=${i["imageUrl"]} style="width: 400px; height:auto" >`;
                inh+=`<img src=${i["imageUrl"]} style="max-width: 800px; height:auto">`;
                inh+=`<h3>City:${i["name"]}<h3>`;
                // inh+=`<p style="width: 400px;font-weight:100 ;font-size: medium;">Description:<span>${i["description"]}</span><p>`
                inh+=`<h5>${i["description"]}</h5>`
                inh+=`<button style="height:50px;width:150px; color: white; background-color: cadetblue; border-radius: 5px; border: none;">VISIT</button><br><br><br><br>`

                })
        }
        // elem.setAttribute("style", style);
        // elem.setAttribute("id", id);
        elem.innerHTML = inh;
        elem.style.display = "block";
        // elem.style.display = "flex";
        // elem.style.flexDirection = "column"
        elem.style.alignSelf = "center"

        document.getElementById("not").style.display="none";
    })
}
function clear(){
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').style.display="none";
    document.getElementById("not").style.display="block";
    sbar.value=""
}
sbtn.addEventListener('click', search);
document.getElementById("resetBtn").addEventListener('click', clear);

