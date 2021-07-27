
const filmesDestaque = ['https://www.themoviedb.org/t/p/w600_and_h900_bestv2/66GUmWpTHgAjyp4aBSXy63PZTiC.jpg', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6vcDalR50RWa309vBH1NLmG2rjQ.jpg', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yOscLK7KzEPDdi1P8RmevGIjOSp.jpg', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg','https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg','https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uxWXW1YYQENSv7OzHB4Hds0bK3b.jpg','https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zFIjKtZrzhmc7HecdFXXjsLR2Ig.jpg','https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6mPNdmjdbVKPITv3LLCmQoKs9Zw.jpg','https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg']




const filmesDestaqueTrailer = ['https://www.youtube.com/watch?v=6sxCFZ8_d84', 'https://www.youtube.com/watch?v=e44op-RgkeA', 'https://www.youtube.com/watch?v=FNhwmpLiTSs', 'https://www.youtube.com/watch?v=A_apvQkWsVY', 'https://www.youtube.com/watch?v=bH39NhYRkcI', 'https://www.youtube.com/watch?v=ldheFivTH0s','https://www.youtube.com/watch?v=7JCK1AUZL1w','https://www.youtube.com/watch?v=PSZTFO-HSzw','https://www.youtube.com/watch?v=kAJ67wLr-1k','https://www.youtube.com/watch?v=RyRA75xnoBM','https://www.youtube.com/watch?v=jp2zIvFahos']




const nomeFilmesDestaque = ['Nomadland', 'The Marksman', 'Mortal Kombat', 'Stowaway', 'Nobody ', 'Godzilla vs. Kong','The Virtuoso','The Father','The Courier','Minari','Soul']










const trailerFilmes = []
const categoriaFilmesDestaque = []
const buscarField = document.querySelector('.buscar-field input')
document.write('<h2>Güncel Filmler</h2>')
document.write('<div class="filmesDestaque container">')

for (let i = 0; i < filmesDestaque.length; i++) {
  document.write(`<div class="${categoriaFilmesDestaque[i]} ${replaceSpecialChars(nomeFilmesDestaque[i])}"><img onclick="exibirTrailer('${filmesDestaqueTrailer[i]}')" class="filme" src="${filmesDestaque[i]}">`);
  document.write(`<p>${nomeFilmesDestaque[i]}</p>`);
  document.write(`<a href="" onclick="exibirtrailer(${trailerFilmes[i]})" >Assistir</a>
  
  </div>`)
}

function replaceSpecialChars(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/([^\w]+|\s+)/g, '') // Substitui espaço e outros caracteres por hífen
    .replace(/\-\-+/g, '-') // Substitui multiplos hífens por um único hífen
    .replace(/(^-+|-+$)/, '') // Remove hífens extras do final ou do inicio da string
    .toLowerCase();
}

function converterLink(link) {
  return link.replace('watch?v=', 'embed/')
}

function exibirTrailer(trailerLink) {
  document.querySelector('body').classList.add('trailer')
  document.querySelector('.iframe-field').innerHTML = (`
  
  <div class="iframe">
  <iframe class="iframe" width="1160" height="715" src="${converterLink(trailerLink)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  <button class="closeTrailer" onclick="closeTrailer()">X</button>

  </div>
  `)
} 

function closeTrailer() {
  document.querySelector('body').classList.remove('trailer')
  document.querySelector('.iframe-field').innerHTML = ''
}

function buscar() {
  console.log(replaceSpecialChars(buscarField.value))
  document.querySelectorAll('.filmesGerais > div').forEach((filme) => {
    filme.classList.add('remove')
  })
  document.querySelectorAll('.filmesDestaque > div').forEach((filme) => {
    filme.classList.add('remove')
  })
  document.querySelectorAll('h2').forEach((filme) => {
    filme.classList.add('remove')
  })
  document.querySelectorAll(`.${replaceSpecialChars(buscarField.value)}`).forEach((filme) => {
    filme.classList.remove('remove')
  })
}





// Popup Al
var modal = document.getElementById('myModal');

// Kipi açan düğmeyi al
var btn = document.getElementById("myBtn");

// Kipi kapatan <span> öğesini edinin
var span = document.getElementsByClassName("close")[0];

// Kullanıcı düğmeyi tıklattığında
btn.onclick = function() {
    modal.style.display = "block";
}

// Kullanıcı <span> (x) düğmesini tıkladığında, popup
span.onclick = function() {
    modal.style.display = "none"; 
}

// Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}