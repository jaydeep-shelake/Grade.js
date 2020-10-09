const sub1 = document.getElementById('sub1');
const sub2 = document.getElementById('sub2');
const sub3 = document.getElementById('sub3');
const sub4 = document.getElementById('sub4');
const Studentname=document.getElementById('name');
const input = document.getElementsByTagName('input');
const circlechart = document.querySelector('.circlechart');
const h1 = document.getElementById('h1');

const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    const add= parseFloat(sub1.value)+parseFloat(sub2.value)+parseFloat(sub3.value)+parseFloat(sub4.value);
    const CGPA =(add*100)/400;
    const txt = document.querySelector('.txt');
    let class1;
    if(CGPA<=45){
        class1='fourth'
    }
    else if( CGPA<=55){
        class1='third'
    }
    else if(CGPA<=65){
        class1="second"
    }
    else if(CGPA>65){
        class1='first'
    }
    const name=Studentname.value;
txt.innerHTML=`<p>Semester 1<br> Name: ${name}<br> Percent: ${CGPA} with class: ${class1}</p>` 
  
if(CGPA>=35){
circlechart.innerHTML=`Pass`;
}
else{
circlechart.innerHTML='Fail';
}

    const progress = document.getElementsByClassName("pro")[0].setAttribute("data-percentage",CGPA);


    $(function(){

        $('.circlechart').circlechart();
        
        });
    
    
});

