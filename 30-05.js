/*
const btn = document.getElementById('btn')
function location1 (){
location.href = 'https://github.com/'
}
btn.addEventListener('click', location1)



/////////////

function mult(a,b){
    if( b ===1){
return a
    }else{
        return a * mult(a, b - 1)
    }
}

//////////

function sum(num){
    if(num < 10 ){
        return num
    }else{
      const b =  num.toString().split('')
        b.reduce((a,b)=>{
        a+ +b}, 0 )
        return b
    }
    
}
console.log(sum(99))
*/

/////////////////
/*
const movies =[
    {
        name:'terminator',
        description: "action",
        date:1996,
        img:'terminator',
        genre:'action'
    },
    {
        name:'titanic2',
        description: "some text",
        date:1994,
        img:'robocop',
        genre:"action"
    },
    {
        name:'home alone',
        description: "smth",
        date:1999,
        img:'alone',
        genre:"comedy"
    },
]
const render = (name,description,date,genre) =>{
return `   
 <div class="item">
        <button class ="btn">delete</button>
        <div class="name h">name:${name}</div>
        <div class="genre h">genre:${genre}</div>
        <div class="date h">date:${date}</div>
        <div class="desc h">description:${description}</div>
        
</div>
`;
};
const films = movies.map(item =>{
    return render(item.name, item.description, item.date, item.genre)
 }).join('')
 const contWithCard = document.querySelector('.container');
 contWithCard.innerHTML = films


 //////////////////////////////////


 const input1 = document.getElementById('search')
 const handleSearch =  (e)=>{
    const val = e.target.event
    const filterName = movies.filter(i => i.name.includes(val))
    const films = filterName
    .map((i)=>{
        render(i.name,i.description,i.date,i.genre)
    })
    contWithCard.innerHTML = films
 };
 input1.addEventListener('input', handleSearch)



*/
/////////////////////////

/*const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const btn = document.getElementById('btn')
const  firstInput = ()=>{
    if (input1.value === 'admin' && input2.value === '123'){
        const newWindow = document.getElementById('new')
        input1.hidden = true
        input2.hidden = true
        btn.hidden =true
        newWindow.innerHTML = 'welcome'
       
    }else {

    }
}
btn.addEventListener('click',firstInput)
input1.addEventListener('input', firstInput)
*/
///////////////////
/*
Promise.resolve().then(()=> {
    console.log(4)
}).catch(console.log(88))
.then(()=>{
    console.log(99)
})



setTimeout(()=>{
    console.log(4)
},1000)

while(''){
    console.log(5)
}
console.log(5)
*/


//////////замыкание