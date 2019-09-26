var bike
fetch("./bikerentals.json")
    .then(res => res.json())
    .then(data => {
        var imgOne = data.products[0].image;
        bike = data.products;
        document.getElementById("img1").src = imgOne;
        document.getElementById("p1").innerHTML = bike[0].name;
        document.getElementById("price1").innerHTML = bike[0].price;

        document.getElementById("img2").src = bike[1].image;
        document.getElementById("p2").innerHTML = bike[1].name;
        document.getElementById("price2").innerHTML = bike[1].price;

        document.getElementById("img3").src = bike[2].image;
        document.getElementById("p3").innerHTML = bike[2].name;
        document.getElementById("price3").innerHTML = bike[2].price;

        document.getElementById("img4").src = bike[3].image;
        document.getElementById("p4").innerHTML = bike[3].name;
        document.getElementById("price4").innerHTML = bike[3].price;

        document.getElementById("img5").src = bike[4].image;
        document.getElementById("p5").innerHTML = bike[4].name;
        document.getElementById("price5").innerHTML = bike[4].price;

        document.getElementById("img6").src = bike[5].image;
        document.getElementById("p6").innerHTML = bike[5].name;
        document.getElementById("price6").innerHTML = bike[5].price;
        console.log(bike);
    });
var men, women, kids =0;

function myToggle(){
    men = document.getElementById("numberBike1").value;
    women = document.getElementById("numberBike2").value;
    kids = document.getElementById("numberBike3").value;
    if(men > 0 || women > 0 || kids > 0){
        document.getElementById("toggle").setAttribute("data-toggle","collapse")
    }else {
        // document.getElementById("toggle").setAttribute("data-toggle","collapse")
        alert("Enter the number of bikes you would like to rent. Please!");
    }
    
}

function change(){
    men = document.getElementById("numberBike1").value;
    women = document.getElementById("numberBike2").value;
    kids = document.getElementById("numberBike3").value;
    if(men == 0 && women == 0 && kids == 0){
        document.location.reload(true);
        alert("Please make sure the number of bikes are greater than zero.")
    }
    
}



function checkout(){

    let item =[];
    let inputs = document.getElementsByTagName("input");
    let table = document.getElementById("table");
    let Total = 0;
    table.innerHTML = "";
    for(var i = 0; i < inputs.length; i++){
        
        if(inputs[i].value > 0){
            item.push({
                // id : i,
                // name: bike[i].name,
                // product_type: bike[i].product_type,
                amount : inputs[i].value,
                price : bike[i].price,
            });
            Total += inputs[i].value * bike[i].price;
            var many = '<div class="col-md-4 col">';
            many += inputs[i].value;
            many += ' </div>';
            var name = '<div class="col-md-4 ml-auto col">';
            name += bike[i].name;
            name += '<br> <small> $' + bike[i].price +"</small>";
            name += ' </div>';
            
            table.innerHTML +='<div class="row">' + many + name + '</div> <hr>';
         //Add this number i as the id and get the quantity too into the obj item
        }

        
    }
    var total = '<div class="col-md-4 col">' + "Total" + '</div>';
    total += '<div class="col-md-4 ml-auto col">' + Total + '</div>';
   
    table.innerHTML += '<div class="row">' + total + '</div>';
    document.getElementById("checkout").setAttribute("data-target","#exampleModalCenter")
    // console.log(kids);
    // console.log(bike[2].price);
    // console.log("Total: " + bike[2].price* kids);
    
}
function thanks(){
    alert("Thenk for renting with us");
}


console.log(item);

