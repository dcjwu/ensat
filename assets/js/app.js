window.onscroll=function showHeader(){let nav=document.getElementById('nav'),navHeight=document.getElementById('nav-inner').offsetHeight,scrollOffset=window.pageYOffset
    if(scrollOffset>(navHeight-10)){nav.classList.add('fixed')}else{nav.classList.remove('fixed')}}
let navHeight=document.getElementById('nav-inner').offsetHeight,about=document.getElementById('about'),products=document.getElementById('products'),find=document.getElementById('find'),delivery=document.getElementById('delivery'),firms=document.getElementById('firms'),contacts=document.getElementById('contacts')
$("#about-link").click(function(){about.scrollIntoView({behavior:'smooth',block:'center'})});$("#products-link").click(function(){products.scrollIntoView({behavior:'smooth',block:'center'})});$("#find-link").click(function(){find.scrollIntoView({behavior:'smooth',block:'center'})});$("#delivery-link").click(function(){delivery.scrollIntoView({behavior:'smooth',block:'center'})});$("#firms-link").click(function(){firms.scrollIntoView({behavior:'smooth',block:'center'})});$("#contacts-link").click(function(){contacts.scrollIntoView({behavior:'smooth',block:'center'})});$("#logo-link").click(function(){window.scrollTo({top:0,behavior:'smooth'})});const body=document.body
let find_mob=document.getElementById('find-mob'),contacts_mob=document.getElementById('contacts-mob')
$("#about-link-mob").click(function(){about.scrollIntoView({behavior:'smooth',block:'center'})
    closeSidebar()});$("#products-link-mob").click(function(){products.scrollIntoView({behavior:'smooth',block:'center'})
    closeSidebar()});$("#find-link-mob").click(function(){find_mob.scrollIntoView({behavior:'smooth',block:'center'})
    closeSidebar()});$("#delivery-link-mob").click(function(){delivery.scrollIntoView({behavior:'smooth',block:'center'})
    closeSidebar()});$("#firms-link-mob").click(function(){firms.scrollIntoView({behavior:'smooth',block:'center'})
    closeSidebar()});$("#contacts-link-mob").click(function(){contacts_mob.scrollIntoView({behavior:'smooth',block:'center'})
    closeSidebar()});const burger=document.getElementById('sidebarToggle')
burger.addEventListener('click',event=>{if(body.classList.contains('show-sidebar')){closeSidebar()}else{showSidebar()}})
function showSidebar(){body.classList.add('show-sidebar')}
function closeSidebar(){body.classList.remove('show-sidebar')}
$("[data-slider-products]").slick({dots:!0,arrows:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1})