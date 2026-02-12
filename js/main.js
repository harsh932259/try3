function filterProperties(){
  const val=document.getElementById("locationFilter").value;
  document.querySelectorAll(".card").forEach(c=>{
    if(val==="all"||c.dataset.location===val){
      c.style.display="block";
    }else{
      c.style.display="none";
    }
  });
}
