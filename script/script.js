









var taches = {
    id: [1],
    Title: ["title"],
    Description: ["description"],
    Date: ["10/09/2000"],
    Type: ["P1"],
    Statu: ["Done"]
}








document.addEventListener("DOMContentLoaded",()=>{


    for(i = 0; i < taches.id.length; i++){
        document.querySelector("table").innerHTML += `<tr class="ButtonEditLaTache cursor-pointer">
            <td>${taches.id[i]}</td>
            <td>${taches.Title[i]}</td>
            <td>${taches.Description[i]}</td>
            <td>${taches.Date[i]}</td>
            <td>${taches.Type[i]}</td>
            <td>${taches.Statu[i]}</td>
        </tr>`
    }


    ajouteTacheSection();
    EditLaTacheSection();
    AfficherLaTacheSection();


})



function addTache(){
    var taches1 = document.getElementsByClassName("taches")[0];
    var taches2 = document.getElementsByClassName("taches")[1];
    var taches3 = document.getElementsByClassName("taches")[2];
}



function ajouteTacheSection(){

    var ajouteBoutton = document.getElementById("ajouteBoutton");
    var CloseAjouteBoutton = document.getElementById("CloseAjouteBoutton");
    var ajouteList = document.getElementById("ajouteList");

    ajouteBoutton.onclick = (()=>{
        ajouteList.style.display = "flex";
        EditList.style.display = "none";
        AfficherList.style.display = "none";

    })

    CloseAjouteBoutton.onclick = (()=>{
        ajouteList.style.display = "none";
    })

}


function EditLaTacheSection(){

    var ButtonEditLaTache = document.getElementsByClassName("ButtonEditLaTache");
    var CloseEditLaTache = document.getElementById("CloseEditLaTache");
    var EditList = document.getElementById("EditList");


    for(i = 0; i < ButtonEditLaTache.length;i++){
        var allEditAfficher = ButtonEditLaTache[i];
        allEditAfficher.onclick = (()=>{
            EditList.style.display = "flex";
            ajouteList.style.display = "none";
            AfficherList.style.display = "none";

        })
    }

    CloseEditLaTache.onclick = (()=>{
        EditList.style.display = "none";
    })

}




function AfficherLaTacheSection(){

    var ButtonAfficherLaTache = document.getElementsByClassName("ButtonAfficherLaTache");
    var CloseAfficherLaTache = document.getElementById("CloseAfficherLaTache");
    var AfficherList = document.getElementById("AfficherList");


    for(i = 0; i < ButtonAfficherLaTache.length;i++){
        var allButtonAfficher = ButtonAfficherLaTache[i];
        allButtonAfficher.onclick = (()=>{
            AfficherList.style.display = "block";
            ajouteList.style.display = "none";
            EditList.style.display = "none";

        })
    }

    CloseAfficherLaTache.onclick = (()=>{
        AfficherList.style.display = "none";
    })

}

