document.querySelector(".checkbox").addEventListener("click", myFunction);

function myFunction() {
  var c=document.querySelector(".checkbox");
  if(c.checked == true){
    var prices=document.querySelectorAll(".box-price");
    prices[0].innerHTML="&dollar;19.99";
    prices[1].innerHTML="&dollar;24.99";
    prices[2].innerHTML="&dollar;39.99";
  }
  else{
    var prices=document.querySelectorAll(".box-price");
    prices[0].innerHTML="&dollar;199.99";
    prices[1].innerHTML="&dollar;249.99";
    prices[2].innerHTML="&dollar;399.99";
  }
}