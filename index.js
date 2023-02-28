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
      
        if (d.target.tagName === 'IMG') {
            const  howMany = document.querySelectorAll('.list-hover li').length;
            if (howMany > 1) {
                var removeList = d.target.parentNode;
 removeList.parentNode.removeChild(removeList);
            }
        }
    
    })
    /******************Mouse Hover section */
document.querySelector('.getTheImage').addEventListener('mouseover',(e)=>{
    if(e.target.tagName === 'IMG'){
      var myElement=document.createElement('div'); //create a new element
        myElement.className ='preview'; // give the element a class name
        e.target.parentNode.appendChild(myElement); //add the element to an existin element in the dom 
    var myImg = document.createElement('img') //create the main image element
    myImg.src = e.target.src;
        myElement.appendChild(myImg);
        
        e.target.addEventListener('mouseout', function remover(d){
            var myNode = d.target.parentNode.querySelector('div.preview');// calling the selector from the 'd' function 
            myNode.parentNode.removeChild(myNode);
        e.target.removeEventListener('mouseout', remover)
         })

    }
})

/**************Mouse Click section */
document.querySelector('.getTheImageByClick').addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if(e.target.tagName === 'IMG'){
      var myElement=document.createElement('div'); //create a new element
        myElement.className ='preview'; // give the element a class name
        e.target.parentNode.appendChild(myElement); //add the element to an existin element in the dom 
    var myImg = document.createElement('img') //create the main image element
        myImg.src = e.target.src;
        
         myElement.style.left = e.offsetX + 20 + 'px'
            myElement.style.top = e.offsetY + 10 + 'px'
        
        myElement.appendChild(myImg);
        
        e.target.addEventListener('mouseout', function remover(d){
            var myNode = d.target.parentNode.querySelector('div.preview');// calling the selector from the 'd' function 
            myNode.parentNode.removeChild(myNode);
        e.target.removeEventListener('mouseout', remover)
        })
        
        e.target.addEventListener('mousemove', function (m) {
            myElement.style.left = m.offsetX + 20 + 'px'
            myElement.style.top = m.offsetY + 10 + 'px'
        })

    }
})