  var slider = document.getElementsByClassName('accordion-title');

  for (var i=0; i< slider.length; i++){

    slider[i].addEventListener('click', function(){
        
        if (!(this.classList.contains('active'))){
          for (var i=0; i< slider.length; i++){
            slider[i].classList.remove('active');
            slider[i].lastChild.classList.remove('new');
          }

            this.classList.add('active');
            this.lastChild.classList.toggle('new');
        } else if(this.classList.contains('active')){

            this.classList.remove('active');
            this.lastChild.classList.remove('new');
        }
    })
  };



function versionDrop() {
  var x = document.getElementById("versionSelect").value;
  if (x === "version2dot1") {
    document.getElementById(x).style.display = "block";
    document.getElementById("version2dot0").style.display = "none"; 
  } else {
    document.getElementById(x).style.display = "block";
    document.getElementById("version2dot1").style.display = "none";
  }
}

