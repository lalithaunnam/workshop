fetch("data.json").then(res=>res.json())
.then(data=>

    display(data.profile)
) 

function display(iti){
    var cdeck=document.querySelector(".card-deck")
    console.log(cdeck )
    
    //
    for(var i in iti){
    var cd=document.createElement("div")
    cd.classList.add("card")
    console.log(cd)
    cdeck.appendChild(cd)
    // image area
    var im=document.createElement("img")
    im.src=iti[i].img;
    cd.appendChild(im)
    // name area
    var name=document.createElement("h1")
    name.textContent=iti[i].name;
    cd.appendChild(name)
    //Branch area
    var branch=document.createElement("h2")
    branch.textContent=iti[i].branch;
    cd.appendChild(branch)
    //yera area
    var yr=document.createElement("h3")
    yr.textContent=iti[i].year;
    cd.appendChild(yr)
    // button area
    var bt=document.createElement("a")
    bt.classList.add("btn-info")
    bt.href="https://www.google.co.in/";
    bt.textContent="view";
    cd.appendChild(bt)
}
}