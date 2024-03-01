
    const chk = document.getElementById('chk');
    const head = document.getElementById('heading');
    const body = document.getElementById('body');

    let flag = true;

    chk.addEventListener('click', () => {
        if(flag){
            //  document.body.classList.add('dark');
            head.classList.add("textcolor");
            body.classList.add("sunimg");
            body.classList.remove("moonimg");

            

        }else{
            // document.body.classList.remove('dark');
            head.classList.remove("textcolor");
            body.classList.add("moonimg");
            body.classList.remove("sunimg")

        }
        flag = !flag;
        
    });
    body.classList.add("sunimg");


// const chk = document.getElementById('chk');
// const head = document.getElementById('heading');
// const body = document.body;

// let flag = true;

// chk.addEventListener('click', () => {
//     if(flag){
//         head.classList.add("textcolor");
//         body.style.backgroundImage = "url(sunimg1.jpg)";
//     } else {
//         head.classList.remove("textcolor");
//         body.style.backgroundImage = "url(moonimg.jpg)";
//     }
//     flag = !flag;
// });


  


