
var elements = document.getElementsByTagName("img");

function loadimages() {
    var num_images = 5;
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
    for (i = 0; i < 5; i++) {
         var food = document.createElement("IMG");
        
        //elements[i].src.msFlex = "25%";  // IE10
        //food.style.flex = "25%";
        //elements[i].src.flex = images_path+iamges_name+i+".jpg";
        img_num = i +1;
        image_fullname = images_path+images_mainname+img_num+".jpg";
        food_id = images_mainname+img_num;
        food.setAttribute("src", image_fullname);
        food.setAttribute("class", "img-thumbnail  food_item");
        food.setAttribute("id", food_id);
        //food.setAttribute("onclick", "open_food_item()");
        food.setAttribute("data-toggle", "modal");
        food.setAttribute("data-target", "#myModal");
        //food.setAttribute("width", "25%");
        //food.setAttribute("heigh", "100");
        document.getElementById("menu_list").appendChild(food);
    }
}