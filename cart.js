

const dataLocal = JSON.parse(localStorage.getItem('panier'));


if ((dataLocal)||(!(document.querySelector('section').textContent===''))){



dataLocal.forEach(element => {

    const divCard = document.createElement('div');
            divCard.className='card';
            divCard.innerHTML=`
            <img src='${element.product.img}'/>
                 <h4> ${element.product.titre}</h4> 
                    <p> ${element.product.prix}  </p>
                       Quantite : <span>${element.quantite}</span> 
                         
            `;
            document.querySelector('.products').appendChild(divCard);
    
});


const divRecapCmd = document.createElement('div');
let totCmd =0;
let nbArt= 0;
        
const tousProduitsCmd = document.querySelectorAll('.products .card');

            tousProduitsCmd.forEach(e=>{

                const prixCalc = parseInt(e.querySelector('p').textContent);
                const qteC = parseInt(e.querySelector('span').textContent);
                nbArt+=qteC;
                totCmd+= prixCalc*qteC;




            })
            divRecapCmd.style = 'width: 100%; text-align: center; margin: 0 auto; padding: 20px; box-sizing: border-box;';

divRecapCmd.innerHTML=`<h2>📝📝📝Recaputilatif de votre commande : </h2> 

<br><br>

<h4>✅ Vous avez commande ${nbArt} produit(s). </h4>
<br><br>
<h5>💰💰💰 La totalite de votre commande est de : ${totCmd}$  </h5>`;


const btnCnf = document.createElement('button');
btnCnf.textContent='Commander';
btnCnf.style=' background-color: green;color: black;padding: 8px 16px; border: none; cursor: pointer;'
 btnCnf.addEventListener('mouseenter', () => btnCnf.style.backgroundColor = 'gray');
 btnCnf.addEventListener('mouseleave', () => btnCnf.style.backgroundColor = 'green');

const btnAnn = document.createElement('button');
btnAnn.textContent='Annuler';
 btnAnn.style='background-color: red;    color: white; padding: 8px 16px; border: none;cursor: pointer;'
 btnAnn.addEventListener('mouseenter', () => btnAnn.style.backgroundColor = 'darkred');
 btnAnn.addEventListener('mouseleave', () => btnAnn.style.backgroundColor = 'red');


divRecapCmd.appendChild(btnCnf);
divRecapCmd.appendChild(btnAnn);
 btnCnf.addEventListener('click', ()=>{


        const modal = document.createElement('div');
        const modalContent = document.createElement('div');
        const msg = document.createElement('p');
        const confirmBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');
        
        
        msg.textContent = "Vous souhaitez valider votre commande ?";
        confirmBtn.textContent = "Valider";
        cancelBtn.textContent = "Annuler";
        
        Object.assign(modal.style, {
            display: 'none', 
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '1000',
            display: 'flex'
        });
        
        Object.assign(modalContent.style, {
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            maxWidth: '400px',
            width: '90%',
            position: 'relative'
        });
        
        Object.assign(confirmBtn.style, {
            backgroundColor: 'yellow',
            color: 'black',
            padding: '8px 16px',
            border: 'none',
            margin: '5px',
            cursor: 'pointer'
        });
        confirmBtn.addEventListener('mouseenter', ()=> confirmBtn.style.backgroundColor='gold');
        confirmBtn.addEventListener('mouseleave', ()=> confirmBtn.style.backgroundColor='yellow');
        
        Object.assign(cancelBtn.style, {
            backgroundColor: 'red',
            color: 'white',
            padding: '8px 16px',
            border: 'none',
            margin: '5px',
            cursor: 'pointer'
        });
        cancelBtn.addEventListener('mouseenter', ()=> cancelBtn.style.backgroundColor='darkred');
        cancelBtn.addEventListener('mouseleave', ()=> cancelBtn.style.backgroundColor='red');
        
        modalContent.appendChild(msg);
        modalContent.appendChild(confirmBtn);
        modalContent.appendChild(cancelBtn);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        function showModal() {
            modal.style.display = 'flex';
        }
        function hideModal() {
            modal.style.display = 'none';
        }
        
        confirmBtn.addEventListener('click', () => {
            alert("Commande validée ! ✅ ");
            hideModal();
            document.querySelector('section').style='width: 100%; text-align: center; margin: 0 auto; padding: 20px; box-sizing: border-box;';
            document.querySelector('section').innerHTML=`<h1>Vous n'avez de produit dans votre panier !📙</h1>
            <h2> Vous souhaitez recommander ou revoir notre boutique cliquer <a href='index.html'> ICI </a> </h2>`;
            localStorage.removeItem('panier');
          
        });
        
        cancelBtn.addEventListener('click', hideModal);
        
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) hideModal();
        });
        

     
 })


 btnAnn.addEventListener('click', ()=>{



    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const msg = document.createElement('p');
    const confirmBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    
    
    msg.textContent = "🚨 Vous souhaitez annuler votre commande ? 🚨";
    confirmBtn.textContent = "Valider";
    cancelBtn.textContent = "Annuler";
    
    Object.assign(modal.style, {
        display: 'none', 
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000',
        display: 'flex'
    });
    
    Object.assign(modalContent.style, {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        maxWidth: '400px',
        width: '90%',
        position: 'relative'
    });
    
    Object.assign(confirmBtn.style, {
        backgroundColor: 'yellow',
        color: 'black',
        padding: '8px 16px',
        border: 'none',
        margin: '5px',
        cursor: 'pointer'
    });
    confirmBtn.addEventListener('mouseenter', ()=> confirmBtn.style.backgroundColor='gold');
    confirmBtn.addEventListener('mouseleave', ()=> confirmBtn.style.backgroundColor='yellow');
    
    Object.assign(cancelBtn.style, {
        backgroundColor: 'red',
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        margin: '5px',
        cursor: 'pointer'
    });
    cancelBtn.addEventListener('mouseenter', ()=> cancelBtn.style.backgroundColor='darkred');
    cancelBtn.addEventListener('mouseleave', ()=> cancelBtn.style.backgroundColor='red');
    
    modalContent.appendChild(msg);
    modalContent.appendChild(confirmBtn);
    modalContent.appendChild(cancelBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    function showModal() {
        modal.style.display = 'flex';
    }
    function hideModal() {
        modal.style.display = 'none';
    }
    
    confirmBtn.addEventListener('click', () => {
        alert("Commande annule ! ✅ ");
        hideModal();
        document.querySelector('section').style='width: 100%; text-align: center; margin: 0 auto; padding: 20px; box-sizing: border-box;';
        document.querySelector('section').innerHTML=`<h1>Vous n'avez de produit dans votre panier !📙</h1>
        <h2> Vous souhaitez recommander ou revoir notre boutique cliquer <a href='index.html'> ICI </a> </h2>`;
        localStorage.removeItem('panier');
      
    });
    
    cancelBtn.addEventListener('click', hideModal);
    
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });
    


















 })

document.querySelector('section').appendChild(divRecapCmd);









}


else{


const zeroProduit = `Vous n'avez de produit dans votre panier !📙`;
document.querySelector('#cart-items').textContent = zeroProduit;





}

console.log(document.querySelector('section').textContent)
