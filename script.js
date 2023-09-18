 
var myul=document.getElementById('myUL')
var li =document.createElement('li')
var span = document.createElement("span");
function submit()
{
    var element = document.getElementById('text').value
     var myul=document.getElementById('myUL')
        var li =document.createElement('li')
        var te=document.getElementById('text').value
        var nod=document.createTextNode(te)
    if(element === "")
    {
        alert("You should write something !! ");
    }
    else
    {
        li.append(nod);
        myul.append(li);
    }
    document.getElementById('text').value="";
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.id = "close";
    span.append(txt) ;
    li.append(span);

    }

  
  myul.addEventListener("click",function(e)
  {
   if(e.target.tagName==="LI" )
   {
    e.target.classList.toggle("checked");
   }
   else if(e.target.tagName=="SPAN")
   {
   e.target.parentElement.remove();
   }
  },false);
  