function shiva()
{
    document.getElementById("coin").style.display="none";
    document.getElementById("options").style.display="block";
    document.getElementById("io").style.display="block";
}

function shivam(clicked){
    var x = Math.floor(Math.random() * 5) + 1;
    var y=clicked;
    if(y==x)
    {
        document.getElementById("options").innerHTML="Congratulations You Win !!!!";
        document.getElementById(y).style.background="green";


        document.getElementById("a").disabled = true;
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
    }
    else{
        document.getElementById("options").innerHTML="Oops Better luck next time !!!!";
        document.getElementById(y).style.background="red";


        document.getElementById("a").disabled = true;
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        document.getElementById("e").disabled = true;
    }
}