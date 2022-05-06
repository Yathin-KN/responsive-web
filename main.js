let add=document.getElementById('add');
let sub=document.getElementById('delete');
let count=document.getElementById('count');
let integer=0;
add.addEventListener('click',()=>
{
    integer=integer+1;
    count.innerHTML=integer;
})
sub.addEventListener('click',()=>
{
    while(integer>0)
    {
        integer=integer-1;
        count.innerHTML=integer;
    }
    
})