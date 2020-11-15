function Style(){
    this.input = document.getElementById("input").value;
    this.inputForColor = document.querySelector(".input-div input")
    this.text = document.getElementById("text");

    this.showstyle =  function(){
        let matchEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/ 
        if(this.input.match(matchEmail)){
            this.text.textContent = "We will contact you soon";
            this.text.style.color = "black";
            this.inputForColor.style.borderColor = "black";
            this.text.style.marginRight = "300px"
        }else{
            this.text.textContent = "please provide a vilde Email address";
            this.text.style.color = "hsl(354, 100%, 66%)"
            this.inputForColor.style.borderColor = "red";
            this.text.style.marginRight = "200px"
        }
    }
}


function check(){
    var styleCreate = new Style()
    styleCreate.showstyle();
}