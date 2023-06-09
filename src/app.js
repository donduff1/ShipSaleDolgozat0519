//Decker Borisz 2023.05.19.
const doc={
    tbody: document.querySelector("#tbody")
}

    const state ={
    ships: [],
    host: "http://localhost:8000/"
}
window.addEventListener("load", ()=>{
    init()

})

function init(){
    getBikes()
}

function getBikes(){
    let endpoint = "ships"
    let url = state.host+endpoint
    fetch(url)
    .then(response => response.json())
    .then(result=> {
        console.log(result)
        state.ships = result
        render()
    })
}

function render(){
    var rows = ""
    state.ships.forEach( ship => {
        var row=`
        <tr>
            <td>${ship.name}</td>
            <td>${ship.length}</td>
            <td>${ship.price}</td>
            <td>${ship.person}</td>
            <td>${ship.trailer}</td>
        </tr>
        `
        console.log(ship.name)
        rows += row
        
    })
    doc.tbody.innerHTML=rows
}