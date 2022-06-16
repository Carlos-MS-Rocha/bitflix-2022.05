
        const button = document.querySelector("button");
        const close = document.querySelector(".close");
        const trailer = document.querySelector(".trailer");
        const video = document.querySelector("video");

        button.addEventListener('click', () =>{
            trailer.style.visibility = "visible";
            trailer.style.opacity = 1; 
        });

        close.addEventListener('click', ()=>{
            trailer.style.visibility = "hidden";
            trailer.style.opacity = 0;
        });



        
        const menulateral = document.querySelector('.menulateral');
        const menulistaul = document.querySelector(".btnmenulateral");
        menulistaul.addEventListener('click', () => {
          menulateral.classList.toggle('active');
          console.log('clicado');
        });