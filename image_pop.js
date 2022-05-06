
let arr=["locket.png","grunge.png","band.png","band2.png"];
let imgtxtHeading=document.getElementById('image_info');
let txtInfo=document.getElementById('image_text');
let img=document.getElementById('gru');
let arrTxt=['locket fest','Grunge 3.0','Band collection','Rainbow tints'];
let arrImgInfo=[
    'There was tremendous excitement in the market on Akshaya Tritiya. After two years of the pandemic-induced disruption, business has bounced back this year. Customers made a lot of purchases while jewellery showrooms remained open till late hours due to heavy rush,”',
    'A deer for our dear. Bad pun, we know! But the amazing YOU thats always calm and gentle, with a loving heart that accepts everyone, deserves nothing but the best. This gorgeous Dear Heart Pendant is just the perfect complement for your unmatched vibe.',
    'The Rose Gold Heart Necklace is inspired by the immaculate idea of self-love, reminiscent of the tranquil waters allowing you to heal and feel bliss.',
    'Hey DIVA, we know you love your early mornings. We got you a partner to enjoy them with! Inspired by the glistening morning dew nestled on fresh leaves, this Falling Dew Necklace is guaranteed to refresh your mind, body and soul, just like the mornings you love.'];
let i=0;
let next=document.getElementById('next');
next.addEventListener('click',()=>
{
    if(i==3)
    {
        i=0;
    }
    else 
    {
        i++;
       show();
    }
})
let prev=document.getElementById('prev');
prev.addEventListener('click',()=>
{
    if(i==0)
    {
        i=3;
    }
    else 
    {
        i--;
       show();
    }
})
function show()
 {
    img.setAttribute('src',`${arr[i]}`);
    imgtxtHeading.innerHTML=arrTxt[i];
    txtInfo.innerHTML=arrImgInfo[i];
}





// setTimeout(() => {
//     img.setAttribute('src',"locket.png");
//     imgtxtHeading.innerHTML='hello';
//     txtInfo.innerHTML='louda';
// }, 5000);
// setTimeout(() => {
//     img.setAttribute('src',"grunge.png");
//     imgtxtHeading.innerHTML='hello2';
//     txtInfo.innerHTML='louda2';
// }, 5000);
