const List = document.querySelector('.list');
List.addEventListener('click',
(e)=>(
    alert(e.target.className)
))
    /* it is automated to just give you the name of
     the color clicked without
    having to name each of them seperately */

/* Images Hovering 
************* 
   This section actually removes an item from the list*/

document.querySelector('.list-hover').addEventListener('click',
    function (d) {
        console.dir(d)
        if (d.target.tagName === 'IMG') {
            
 var removeList = d.target.parentNode;
 removeList.parentNode.removeChild(removeList);
        }
    
},false)
