let div = document.createElement("div")
div.style.textAlign="center"
let input = document.createElement("input");
input.setAttribute("type","text")
input.setAttribute("id","cityInput")
input.setAttribute("placeholder","search by city ")
let btn = document.createElement("button")
btn.setAttribute("type","button")
btn.setAttribute("id","bycity")
btn.classList.add("btn","btn-primary");
btn.innerHTML="search"
btn.addEventListener("click",byCity)

let div1 = document.createElement("div");
div1.setAttribute("id","bre");

div.append(input,btn,div1);
document.body.append(div);

async function byCity(){
    const choice = document.getElementById('cityInput').value
    console.log(choice)
    const url = `https://api.openbrewerydb.org/breweries?by_city=${choice}`
    
    let res= await fetch(url);
    let res1=await res.json();
    console.log(res1);
    
  
          try {
            res1.forEach(brewery => {
                let div = document.createElement("div")
                div.innerHTML=
            ` 
            <div class="card text-white bg-dark mb-4" style="max-width:18rem; margin-left:41vw">
        
        <div class="card-body">
            <h56 class="card-title">Name:${brewery.name}</h6>
            <h6 class="card-title">Type:${brewery.brewery_type}</h6>
            <h6 class="card-title">Address:${brewery.address_2}</h6>
            <h6 class="card-title">Website:${brewery.website_url}</h6>
            <h6 class="card-title">Phone no:${brewery.phone}</h6>
            
        </div>
        </div>
        
        `
                document.getElementById('bre').append(div)
                console.log(brewery.name)
                console.log(brewery.brewery_type);
                console.log(brewery.address_2);
                console.log(brewery.website_url);
                console.log(brewery.phone);
              })
            
          } catch (error) {
            console.log(error)
            
          }
         
        
       
        }
  