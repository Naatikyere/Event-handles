const List = document.querySelector('.list');
List.addEventListener('click',
(e)=>(
    alert(e.target.className)
    ))
    /* it is automated to just give you the name of
     the color clicked without
    having to name each of them seperately */


