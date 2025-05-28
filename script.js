console.log("helo");

const input = document.querySelector("#input");
const container = document.querySelector(".ul_item");
const add_btn = document.querySelector("#add");


add_btn.addEventListener("click", function(){
    let input_text = input.value;
 if(input_text ===""){
        alert("Enter The Proper Text");
        
    }
else{
    
    let listitem = document.createElement("li");
    listitem.textContent = input_text;
    container.appendChild(listitem);

    let cross = document.createElement("span");
    cross.textContent = "X";
    cross.className = "cross";
    listitem.appendChild(cross);
    input.value = "";
     savedata();
    
    cross.addEventListener("click", function(){
        container.removeChild(listitem);
         savedata();
    })
    
}
 
})

 function savedata(){
    localStorage.setItem("data", container.innerHTML );
 }
  
 function showdata() {
    container.innerHTML = localStorage.getItem("data");

    // Re-attach click events to all cross buttons
    let crosses = container.querySelectorAll(".cross");
    crosses.forEach(function (cross) {
        cross.addEventListener("click", function () {
            container.removeChild(cross.parentElement);
            savedata();
        });
    });
}

showdata();