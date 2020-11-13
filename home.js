console.log("It works");

var txt =document.getElementById("text");

txt.addEventListener("keyup", (event)=>{
    if(event.keyCode === 13){
        console.log("check")
        event.preventDefault()

            send()

        
    }


})


function send(){
    if(txt.value != ""){
        
        sendershow(txt.value,1);
        fetchText();
        txt.value =""
    }


    

   


}
async function fetchText() {
    let response = await fetch('http://127.0.0.1:5000/');

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        // handle data
        //console.log(data)
        var obj = JSON.parse(data);
        //console.log(obj.greeting)
        sendershow(obj.greeting,2)
    }
}

function sendershow( txtval , id){
    var msgbody = document.getElementById('msgbody');

    var msg = document.createElement('div');
    var txt = document.createElement('p');
    if(id==1){

        msg.classList.add('sendtext')
    
    
        txt.innerText = txtval
        txt.classList.add('textstyle')

    }
    else if(id==2){

        msg.classList.add('rectext')
    
    
        txt.innerText = txtval
        txt.classList.add('rectextstyle')

    }

    msg.appendChild(txt);
    
    msgbody.appendChild(msg);

    msgbody.scrollTop = msgbody.scrollHeight
}


