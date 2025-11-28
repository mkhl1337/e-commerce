// window.addEventListener('beforeunload', () => {
//     localStorage.removeItem('panier');
// });
const affProduits= ()=>{
return new Promise((res,rej)=>{
    setTimeout(()=>{

        const data  = fetch('https://fakestoreapi.com/products');

        data ? res(data) : rej('Erreur de chargement de donnees ou URL incorrect !');




    },1000)
})

};

const getProduits = async()=>{


    try{

        const dataProduits = await affProduits();

        const data = await dataProduits.json();
        const panier=[];
        
        data.forEach(element => {
            
            const divCard = document.createElement('div');
            divCard.className='card';
            divCard.innerHTML=`
            <img src='${element.image}'/>
                 <h4> ${element.title}</h4> 
                    <p> ${element.price} $ </p>
                         <button class='btn'> Ajouter au Panier </button>
                                 <button class='moinArticle'> -</button><span>1</span> <button class='plusArticle'> + </button>         
            `;
            document.querySelector('#product-list').appendChild(divCard);
           


        });
        document.querySelectorAll('.card').forEach(card=>{



          

        const plusArticle = card.querySelector('.plusArticle');
        plusArticle.addEventListener('click',()=>{

            const nbProd = parseInt(card.querySelector('span').textContent)

            card.querySelector('span').textContent=`${nbProd+1}`

        })

        const moinArticle = card.querySelector('.moinArticle');
        moinArticle.addEventListener('click',()=>{
            const nbProd = parseInt(card.querySelector('span').textContent)
          if (nbProd!==1) card.querySelector('span').textContent=`${nbProd-1}`;


        })
        const ajoutPanier = card.querySelector('.btn');
        ajoutPanier.addEventListener('click', ()=>{
            const nbProduitPanier= parseInt(card.querySelector('span').textContent);
            const cardProduit = {
                img : card.querySelector('img').src,
                titre : card.querySelector('h4').textContent,
                prix : card.querySelector('p').textContent


            }
            panier.push({product: cardProduit,quantite:nbProduitPanier});
            localStorage.setItem('panier',JSON.stringify(panier));
        })


        });
        

    }


    catch(error){

        console.log(error);
    }
}
getProduits();



// const testLocal = localStorage.getItem('panier');
// const testData = JSON.stringify(testLocal)
// testData ? console.log(testData) : console.error('maw 9olna mafamech');