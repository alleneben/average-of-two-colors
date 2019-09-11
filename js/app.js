var app =document.querySelector('#app')

app.innerHTML=`
    <input id="unm" type="text" placeholder="Username"/>
    <input id="pwd" type="password" placeholder="Password"/> <br/>
    <button id="btn">Login</button>
`


// var unm = document.getElementById('unm').value\


var btn = document.getElementById('btn')

console.log(window.location);

btn.addEventListener('click',()=>{
    var unm = document.getElementById('unm').value
    var pwd = document.getElementById('pwd').value

    
    if (unm === 'allen' && pwd === 'allen') {
        app.innerHTML=`
            <nav>
                Welcome to your Dashboard
            </nav>
        `
        
    } else {
        app.innerHTML='Invalid username or password'
        
    }
    
    
})
