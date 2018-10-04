var elements = document.getElementsByTagName("img");
var modal = document.getElementById('myModal');

var foodItem_list = document.getElementById("foodItem_list");



function loadimages() {
    var num_images = menu_list.length;
    var images_path = "images/";
    var images_name = "food";
    var i ;
    var img_num ;
    for (i = 0; i < 10; i++) {
        //elements[i].src.msFlex = "25%";  // IE10
        //elements[i].style.flex = "25%";
        //elements[i].src.flex = images_path+iamges_name+i+".jpg";
        img_num = i +1;
        elements[i].src = images_path+images_name+img_num+".jpg";
    }
}



var num_images = 6;
function createimages() {
   
   // var num_images = 5;
    var images_path = "images/";
    var images_mainname = "food" ;
    var image_fullname ;
    var food_id;
    var i ;
    var img_num ;
    //var node =  document.document.getElementById("menu_list");
    for (i = 0; i < 4; i++) {
         var food = document.createElement("IMG");
        
        //elements[i].src.msFlex = "25%";  // IE10
        //food.style.flex = "25%";
        //elements[i].src.flex = images_path+iamges_name+i+".jpg";
        img_num = i +1;
        image_fullname = images_path+images_mainname+img_num+".jpg";
        food_id = images_mainname+img_num;
        food.setAttribute("src", image_fullname);
        food.setAttribute("onclick","getimgid(this)" );
     
        food.setAttribute("class", "img-thumbnail  menu_item");
        food.setAttribute("id", food_id);
        food.setAttribute("onclick", "OpenDetail()");
        //food.setAttribute("data-toggle", "modal");
        //food.setAttribute("data-target", "#myModal");
        //food.setAttribute("width", "25%");
        //food.setAttribute("heigh", "100");
        document.getElementById("menu_list").appendChild(food);
    }
}

function closeModal(){
    var modal = document.getElementById('myModal');

    modal.style.display = "none";
}

function OpenDetail(elt){
    var modal = document.getElementById('myModal');
    var menu_id = elt.id;
    var title =  document.getElementById('modal_title');
    var nume_id = document.getElementById('menu_id');
    var menu_price = document.getElementById('menu_price');
    modal.style.display = "block";
    menu_price.innerHTML="$" +  menu_list[menu_id].price;
    title.innerHTML= menu_list[menu_id].name;
    nume_id.innerHTML=menu_list[menu_id].id;
    //captionText.innerHTML = this.alt;
}

function FoodListOpenDetail(elt){
    var modal = document.getElementById('myModal');
    var menu_id = elt.id;
    var title =  document.getElementById('modal_title');
    var nume_id = document.getElementById('menu_id');
    var menu_price = document.getElementById('menu_price');
    modal.style.display = "block";
    menu_price.innerHTML="$" +  menu_list[menu_id].price;
    title.innerHTML= menu_list[menu_id].name;
    nume_id.innerHTML=menu_list[menu_id].id;
    //captionText.innerHTML = this.alt;
}


function addFoodItem(elt){
    var food_id = document.getElementById("menu_id").textContent;
    //var food = new food(food_id,"test");
    foodItems.push(food_id);
    var foodItem_list = document.getElementById("foodItem_list");
    var num_foodTtems = foodItems.length;   
    
    //for (i = 0; i < num_foodTtems; i++) {
        //var candidate = document.getElementById("candidate");
        var foodItem = document.createElement("li");
        //foodItem.setAttribute('id',i);
        foodItem.appendChild(document.createTextNode(menu_list[foodItems[num_foodTtems-1]].name));         
        foodItem.setAttribute("class", "food_item");
        foodItem_list.appendChild(foodItem);
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close"; 
        span.appendChild(txt);
        foodItem.appendChild(span);
   
    var modal = document.getElementById('myModal');
    
    modal.style.display = "none";
}

function deleteFoodItem(elt){
    var food_id = document.getElementById("menu_id").textContent;
    foodItems.push(food_id);
    var foodItem_list = document.getElementById("foodItem_list");
    var num_foodTtems = foodItems.length;   
    
    //for (i = 0; i < num_foodTtems; i++) {
        //var candidate = document.getElementById("candidate");
        var foodItem = document.createElement("li");
        //foodItem.setAttribute('id',i);
        foodItem.appendChild(document.createTextNode(menu_list[foodItems[num_foodTtems-1]].name));         
        foodItem.setAttribute("class", "food_item");
        foodItem_list.appendChild(foodItem);
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close"; 
        span.appendChild(txt);
        foodItem.appendChild(span);
   
    var modal = document.getElementById('myModal');
    
    modal.style.display = "none";
}


