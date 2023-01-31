    const botaoTrailer = (document.querySelector(".botao-trailer"));
    console.log(botaoTrailer);

    const modal = document.querySelector(".modal")

    const video = document.getElementById("video")

    const botaoFecharModal = document.querySelector(".fechar-modal")

    botaoTrailer.addEventListener("click", () =>{
        
        modal.classList.add("aberto");
        video.setAttribute("src", "https://www.youtube.com/embed/2SNF4M_v7wc");

    });

    botaoFecharModal.addEventListener("click", () =>{
        
        modal.classList.remove("aberto");
        video.setAttribute("src", "");

    });




  
    



