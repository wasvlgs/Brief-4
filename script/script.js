






    // ================== Nav Bar ====================


    const openNavbar = document.getElementById("menuButton");
    const getNavbar  = document.getElementById("navbar");
    const closeNavbar = document.getElementById("closeNavbar");


    openNavbar.onclick = ()=>{
        getNavbar.style.width = "100%";
    }
    closeNavbar.onclick = ()=>{
        getNavbar.style.width = "0%";
    }
    var getLi = getNavbar.querySelectorAll("li");

    for(i = 0; i < getLi.length; i++){
        getLi[i].onclick = ()=>{
            getNavbar.style.width = "0%"
        }
    }



    // ====================== functions Service ===============



var listEdit = document.getElementById("listEdit");
    var ajouteList = document.getElementById("ajouteList");
    var AfficherList = document.getElementById("AfficherList");





var taches = {
    id: [],
    Title: [],
    Description: [],
    Date: [],
    DeadLine: [],
    Type: [],
    Statu: []
}





document.addEventListener("DOMContentLoaded",()=>{
    taches = JSON.parse(localStorage.getItem("data"));



    
    
   
    updateAll()
    ajouteTacheSection();
    addTache();
    AfficherLaTacheFunction();
    searchInput();
    dragItems();

    console.log(taches);


})



// =========================== update Storage ==========================


function updateStorage(){
    localStorage.setItem("data", JSON.stringify(taches));
}

// =========================== update AllSection ==========================


function updateAll(){
    updateTachesDone();
    updateTachesPending();
    updateTachesToDo();
    updateAllTachesList();
    updateStatique();
}



// =========================== update taches Done ==========================

function updateTachesDone(){
    var tachesList = document.getElementsByClassName("taches");
    tachesList[2].innerHTML = "";

    for(i = 0; i < taches.id.length; i++){
        if(taches.Statu[i] == "done"){
            var getBackground;
            if(taches.Type[i] == "P1"){
                getBackground = "#CBCBCB";
            }else if(taches.Type[i] == "P2"){
                getBackground = "#FFE876";
            }else{
                getBackground = "#98FF7B";
            }
            tachesList[2].innerHTML += `<div data-value="${i}" draggable="true" data-value="${taches.id[i]}" class="tache bg-[${getBackground}]" style="border-top:4px solid aqua">
                    <div onclick="AfficherLaTacheSection(${i})">
                        <span class="text-2xl font-bold pr-2">${taches.Type[i]}</span><h2 class="text-sm">${taches.Title[i]}</h2>
                    </div>
                    <div><div><button onclick="editButton(${i})"><img src="../img/icons/edit.svg" alt="edit"></button>
                    <button  onclick="deleteTache(${i})"><img
                                src="../img/icons/delete.svg" alt="Delete"></button></div><h2 class="text-black text-sm">${taches.DeadLine[i]}</h2></div>
                </div>`
        }
       
    }
}


// =========================== update taches Pending ==========================

function updateTachesPending(){
    var tachesList = document.getElementsByClassName("taches");
    tachesList[1].innerHTML = "";
    for(i = 0; i < taches.id.length; i++){
        if(taches.Statu[i] == "pending"){
            var getBackground;
            if(taches.Type[i] == "P1"){
                getBackground = "#CBCBCB";
            }else if(taches.Type[i] == "P2"){
                getBackground = "#FFE876";
            }else{
                getBackground = "#98FF7B";
            }
            tachesList[1].innerHTML += `<div data-value="${i}" draggable="true" data-value="${taches.id[i]}" class="tache bg-[${getBackground}]" style="border-top:4px solid purple">
                    <div onclick="AfficherLaTacheSection(${i})">
                        <span class="text-2xl font-bold pr-2">${taches.Type[i]}</span><h2 class="text-sm">${taches.Title[i]}</h2>
                    </div>
                    <div><div><button onclick="editButton(${i})"><img src="../img/icons/edit.svg" alt="edit"></button>
                    <button  onclick="deleteTache(${i})"><img
                                src="../img/icons/delete.svg" alt="Delete"></button></div><h2 class="text-black text-sm">${taches.DeadLine[i]}</h2></div>
                </div>`
        }
       
    }
    
}


// =========================== update taches To Do ==========================

function updateTachesToDo(){
    var tachesList = document.getElementsByClassName("taches");
    tachesList[0].innerHTML = "";

    for(i = 0; i < taches.id.length; i++){
        if(taches.Statu[i] == "todo"){
            var getBackground;
            if(taches.Type[i] == "P1"){
                getBackground = "#CBCBCB";
            }else if(taches.Type[i] == "P2"){
                getBackground = "#FFE876";
            }else{
                getBackground = "#98FF7B";
            }
            tachesList[0].innerHTML += `<div data-value="${i}" draggable="true" class="tache bg-[${getBackground}]" style="border-top:4px solid black">
                    <div onclick="AfficherLaTacheSection(${i})">
                       <span class="text-2xl font-bold pr-2">${taches.Type[i]}</span> <h2 class="text-sm">${taches.Title[i]}</h2>
                    </div>
                    <div><div><button onclick="editButton(${i})"><img src="../img/icons/edit.svg" alt="edit"></button>
                    <button onclick="deleteTache(${i})"><img
                                src="../img/icons/delete.svg" alt="Delete"></button></div><h2 class="text-black text-sm">${taches.DeadLine[i]}</h2></div>
                </div>`
        }
       
    }

}

// =========================== update all Border Top ==========================

function updateBorderTop(){
    var taches = document.getElementsByClassName("taches");

    var itemsTodo = taches[0].getElementsByClassName("tache");
    for(i = 0; i < itemsTodo.length; i++){
        itemsTodo[i].style.borderTop = "4px solid black";
    }
    var itemsTodo = taches[1].getElementsByClassName("tache");
    for(i = 0; i < itemsTodo.length; i++){
        itemsTodo[i].style.borderTop = "4px solid purple";
    }
    var itemsTodo = taches[2].getElementsByClassName("tache");
    for(i = 0; i < itemsTodo.length; i++){
        itemsTodo[i].style.borderTop = "4px solid aqua";
    }
}

// =========================== update all taches list ==========================

function updateAllTachesList(){
    document.querySelector("tbody").innerHTML = "";

    for(i = 0; i < taches.id.length; i++){
        document.querySelector("tbody").innerHTML += `<tr onclick="editButton(${i})" class="allTaches cursor-pointer w-full max-md:text-sm">
            <td class="allIdText">${taches.id[i]}</td>
            <td class="allTitleText">${taches.Title[i]}</td>
            <td class="max-xl:hidden">${taches.Description[i]}</td>
            <td  class="max-sm:hidden">${taches.Date[i]}</td>
            <td>${taches.DeadLine[i]}</td>
            <td>${taches.Type[i]}</td>
        </tr>`
    }

}


// =========================== Edit taches ==========================

    function editButton(index){
        
        listEdit.style.display = "flex";
        AfficherList.style.display = "none";
        ajouteList.style.display = "none";
        document.getElementById("editFunction").value = taches.id[index];
        
        document.getElementById("setTitle").value = taches.Title[index];
        document.getElementById("setDescription").value = taches.Description[index];
        document.getElementById("setType").value = taches.Type[index];
        document.getElementById("setDeadLine").value = taches.DeadLine[index];
    }



    var CloseEditBoutton = document.getElementById("CloseEditBoutton");

    CloseEditBoutton.addEventListener("click",()=>{
        listEdit.style.display = "none";
    })




    function editFunction(button){
        var setTitle = document.getElementById("setTitle").value;
        var setDescription = document.getElementById("setDescription").value;
        var setDeadLine = document.getElementById("setDeadLine").value;
        var setType = document.getElementById("setType").value;
        var getId = button.value;
        for(i = 0; i < taches.id.length; i++){
            if(taches.id[i] == getId){
                taches.Title[i] = setTitle;
                taches.Description[i] = setDescription;
                taches.DeadLine[i] = setDeadLine;
                taches.Type[i] = setType;
                listEdit.style.display = "none";
            }
        }

        updateAll();
        updateStorage();

    }


// =========================== Remove Tache ==========================

function deleteTache(index){
    taches.id.splice(index, 1);
    taches.Title.splice(index, 1);
    taches.Description.splice(index, 1);
    taches.Date.splice(index, 1);
    taches.DeadLine.splice(index, 1);
    taches.Type.splice(index, 1);
    taches.Statu.splice(index, 1);
    updateAll();
    updateStorage();
    updateStatique();
}


// =========================== add Tache ==========================


function addTache(){
    var addSubmit = document.getElementById("addSubmit");

    addSubmit.onclick = ()=>{
        var getid;
        if(taches.id.length > 0){
            getid = taches.id[taches.id.length -1] + 1;
        }else{
            getid = 1;
        }
        var today = new Date;
        var day = today.getDate();
        var month = today.getMonth() +1;
        var year = today.getFullYear();
        var getTitle = document.getElementById("getTitle").value;
        var getDesc = document.getElementById("getDesc").value;
        var getCount = document.getElementById("getCount").value;
        var DeadLine = document.getElementById("getDate").value;
        var getType = document.getElementById("getType").value;
        var index = taches.id.length;
        for(i = 0; i < getCount; i++){
            taches.id[index] = getid;
            taches.Title[index] = getTitle;
            taches.Description[index] = getDesc;
            taches.Date[index] = year+"-"+month+"-"+day;
            taches.DeadLine[index] = DeadLine;
            taches.Type[index] = getType;
            taches.Statu[index] = "todo";
            index++;
            getid++;
            ajouteList.style.display = "none";
        }
        document.getElementById("getTitle").value = "";
        document.getElementById("getDesc").value = "";
        document.getElementById("getDate").value = "";

        updateAll();
    updateStorage();
    updateStatique()

    }
    
}



// =========================== ajoute Tache Section ==========================



function ajouteTacheSection(){

    var ajouteBoutton = document.getElementById("ajouteBoutton");
    var CloseAjouteBoutton = document.getElementById("CloseAjouteBoutton");
    

    ajouteBoutton.onclick = (()=>{
        ajouteList.style.display = "flex";
        listEdit.style.display = "none";
        AfficherList.style.display = "none";

    })

    CloseAjouteBoutton.onclick = (()=>{
        ajouteList.style.display = "none";
    })


    

}







// =========================== Afficher La Tache Section ==========================

function AfficherLaTacheFunction(){



    CloseAfficherLaTache.onclick = (()=>{
        AfficherList.style.display = "none";
    })

}
function AfficherLaTacheSection(index){
    AfficherList.style.display = "block";
    ajouteList.style.display = "none";
    listEdit.style.display = "none";

    var titleText = document.getElementById("titleText");
    var DescText = document.getElementById("DescText");
    var DateText = document.getElementById("DateText");
    var TypeText = document.getElementById("TypeText");
    var StatuText = document.getElementById("StatuText");

    titleText.innerText = taches.Title[index];
    DescText.innerText = taches.Description[index];
    DateText.innerText = taches.Date[index]+" -> "+taches.DeadLine[index];
    TypeText.innerText = taches.Type[index];

    var getStatu;
    if(taches.Statu[index] == "done"){
        getStatu = "Done";
    }else if(taches.Statu[index] == "pending"){
        getStatu = "is Pending";
    }else{
        getStatu = "To Do"
    }

    StatuText.innerText = getStatu;

}



// =========================== Search de La tache ==========================



function searchInput(){
    var getSearch = document.getElementById("getSearch");

    getSearch.onkeyup = ()=>{
        var selectTaches = document.getElementsByClassName("allTaches");
        var getSearchValue = getSearch.value;
        for(i = 0; i < selectTaches.length; i++){
            var getTitle = selectTaches[i].getElementsByClassName("allTitleText")[0].innerText;
            if(getTitle.indexOf(getSearchValue) >= 0){
                selectTaches[i].style.display = "table-row";
            }else{
                selectTaches[i].style.display = "none";
            }
            
        }
    }
}

// =========================== Filter Les taches ==========================


// function filterTaches(){
//     var selectItems = document.getElementsByClassName("allTaches");
//     var arr = [];
//     for(i = 0; i < selectItems.length; i++){
//         arr[i] = selectItems[i].getElementsByClassName("allTitleText").innerText;
//     }
//     console.log(typeof(selectItems))
// }



// =========================== Update Statique ==========================


function updateStatique(){
    var card = document.getElementsByClassName("card")
    var taches = document.getElementsByClassName("taches");
    var allTr = document.querySelectorAll("tr");
    var AllCounter = document.getElementById("AllCounter");
    var AllCounter2 = document.getElementById("AllCounter2");

    card[0].querySelector("label").innerText = taches[0].getElementsByClassName("tache").length;
    card[1].querySelector("label").innerText = taches[1].getElementsByClassName("tache").length;
    card[2].querySelector("label").innerText = taches[2].getElementsByClassName("tache").length;
    AllCounter.innerText = allTr.length - 1;
    AllCounter2.innerText = allTr.length - 1;
}


// =========================== Drag Items ==========================

// function dragItems(){
//     var item = null;

//     var card = document.getElementsByClassName("card")
//     var toDoTaches = document.getElementsByClassName("tache");

//     for(i = 0;i < toDoTaches.length; i++){
//         toDoTaches[i].addEventListener("dragstart",function(){
//             item = this;
//             console.log("drag start");

//             for (let j = 0; j < card.length; j++) {
//                 card[j].id = this.id;
//             }
//                 this.removeAttribute("id");
            
//             this.style.opacity = '0.3';

//         })
//         toDoTaches[i].addEventListener("dragend",function(){
//             console.log("drag end");
//             this.style.opacity = '1';
//             item = null;

//             for (let j = 0; j < card.length; j++) {
//                 delete card[j].dataset.value;
//             }
//         })
//     }

//     for(i = 0;i < card.length; i++){
//         card[i].addEventListener("dragover",function(e) {
//             e.preventDefault();
//             this.style.background = "rgb(203,203,203)";
//             this.style.opacity = "0.7";
//         })

//         card[i].addEventListener("dragleave",function() {
//             this.style.background = "white";
//             this.style.opacity = "1";
//         })

//         card[i].addEventListener("drop",function() {
//             this.querySelector(".taches").append(item);
//             this.style.background = "white";
//             this.style.opacity = "1";
//             var getTypeCard = this.id;
//             alert(getTypeCard);
//             alert(this.getAttribute("data-value"))
//             for(j = 0; j < taches.id.length; j++){
//                 if(taches.id[j] == this.getAttribute("data-value")){
//                     if(getTypeCard == "c1"){
//                         taches.Statu[j] = "todo";
                        
//                     }else if(getTypeCard == "c2"){
//                         taches.Statu[j] = "pending";
            
//                     }else{
//                         taches.Statu[j] = "done";
                        
//                     }
//                 }
//             }

            
//                         updateStatique();
//                         updateAll();
//                         updateStorage();
                        
            
//         })

//     }
    
 
// }



function dragItems(){
    var item = null;

    var card = document.getElementsByClassName("card")
    var toDoTaches = document.getElementsByClassName("tache");


    for(i = 0;i < toDoTaches.length; i++){
    // ================== drag start ITEM ====================

        toDoTaches[i].addEventListener("dragstart",function(){
            item = this;
            console.log("drag start");
            this.style.opacity = '0.3';

            var index = this.getAttribute("data-value");
            
            for(j = 0; j < card.length; j++){
                card[j].id = index;
            }


        })
    

    // ================== drag end ITEM ====================


        toDoTaches[i].addEventListener("dragend",function(){
                    console.log("drag end");
                    this.style.opacity = '1';
                    item = null;

                    for(j = 0; j < card.length; j++){
                        card[j].removeAttribute("id");
                    }

        })

    }



    for(i = 0;i < card.length; i++){

    // ================== drag over CARD ====================

        card[i].addEventListener("dragover",function(e) {
            e.preventDefault();
            this.style.background = "rgb(203,203,203)";
            this.style.opacity = "0.7";
        })

        card[i].addEventListener("dragleave",function() {
            this.style.background = "white";
            this.style.opacity = "1";
        })


        card[i].addEventListener("drop",function() {
            this.querySelector(".taches").append(item);
            this.style.background = "white";
            this.style.opacity = "1";
                        
            var getIndex = parseInt(this.id);
            var typeCard = this.getAttribute("data-value");
            if(typeCard == "c1"){
                taches.Statu[getIndex] = "todo";
            }else if(typeCard == "c2"){
                taches.Statu[getIndex] = "pending";
            }else{
                taches.Statu[getIndex] = "done";
            }
            updateStatique();
            updateStorage();
            updateBorderTop();
        })


    }

}







