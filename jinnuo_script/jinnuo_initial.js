var menu_length = 9;
/*var menu0 = {id:"0",name:"口水鸡", price:"14.99"};
var menu1 = {id:"1",name:"红烧牛肉面", price:"16.99"};
var menu2 = {id:"2",name:"麻辣牛肉", price:"15.99"};
var menu3 = {id:"3",name:"酸菜豆花牛", price:"22.99"};
var menu4 = {id:"4",name:"酸菜豆花鱼", price:"25.99"};
var menu5 = {id:"5",name:"辣子鸡", price:"20.99"};
var menu6 = {id:"6",name:"伤心凉粉", price:"7.99"};
var menu7 = {id:"7",name:"重庆小面", price:"8.99"};
var menu8 = {id:"8",name:"麻婆豆腐", price:"9.99"};*/

function menu(id, name, price){
    this.id = id;
    this.name = name;
    this.price = price;
}



var menu0 = new menu(0,"口水鸡", 14.99);
var menu1 = new menu(1,"红烧牛肉面", 16.99);
var menu2 = new menu(2,"麻辣牛肉", 16.99);
var menu3 = new menu(3,"酸菜豆花牛", 22.99);
var menu4 = new menu(4,"酸菜豆花鱼",25.99);
var menu5 = new menu(5,"辣子鸡", 20.99);
var menu6 = new menu(6,"伤心凉粉",7.99);
var menu7 = new menu(7,"重庆小面",8.99);
var menu8 = new menu(8,"麻婆豆腐",9.99);


/*var i
var menu_list =[];
for(i = 0; i <9 ; i++) {
    var name = "menu" + i;
    //name = 
    menu_list[i]=name;
}*/

var menu_list =[menu0,menu1,menu2,menu3,menu4,menu5,menu6,menu7,menu8];


var foodItems = [];

var images_path = "images/";
    var menu_mainname = "food" ;
    var menu_fullname ;
    var menu_id;
    var i ;
    var menu_num ;
    //var node =  document.document.getElementById("menu_list");
    for (i = 0; i <menu_list.length ; i++) {
         var menu = document.createElement("IMG");
        //elements[i].src.msFlex = "25%";  // IE10
        //food.style.flex = "25%";
        //elements[i].src.flex = images_path+iamges_name+i+".jpg";
        menu_num = i ;
        menu_fullname = images_path+menu_mainname+menu_num+".jpg";
        menu_id = menu_mainname+menu_num;
        menu.setAttribute("src", menu_fullname);
        menu.setAttribute("onclick","getimgid(this)" );
     
        menu.setAttribute("class", "img-thumbnail  menu_item");
        menu.setAttribute("id", menu_num);
        menu.setAttribute("onclick", "OpenDetail(this)");
        //food.setAttribute("data-toggle", "modal");
        //food.setAttribute("data-target", "#myModal");
        //food.setAttribute("width", "25%");
        //food.setAttribute("heigh", "100");
        document.getElementById("menu_list").appendChild(menu);
    }


/*$('#myModal').on('show.bs.modal', function (event) {
  var menu = $(event.relatedTarget); // Button that triggered the modal
  var menu_id = menu.id ;// Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
   //$("h4").find(".modal-title").text("test");
  //modal.find('.modal-title').text(menu_list[2])
  //modal.find('.modal-body input').val(recipient)
})*/