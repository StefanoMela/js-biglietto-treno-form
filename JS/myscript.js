
const userNameInput = document.getElementById("userNameInput");
const userFamilyNameInput = document.getElementById("userFamilyNameInput");
const totalKmInput = document.getElementById("totalKmInput");
const userAgeInput = document.getElementById("userAgeInput");
const underOverInput = document.getElementById("underOverInput");
const sendButton = document.getElementById("mainButtonInput");
let discount = 0;


sendButton.addEventListener("click", function() {
    
    const userName = userNameInput.value;
    document.getElementById("userNameStamp").innerHTML = userName;

    const familyName = userFamilyNameInput.value;
    document.getElementById("userFamilyNameStamp").innerHTML = familyName;

    const userAge = parseInt(userAgeInput.value);
    
    const kmPrice = parseFloat(totalKmInput.value) * .21;

    document.getElementById("ticketPrice").innerHTML = kmPrice + "€";                                                                              
        
    if (userAge < 18) {
        
        discount = (kmPrice * 20) / 100;
        
    } else if (userAge >= 65) {
        
        discount = (kmPrice * 40) / 100;
        
    }
        const totalDiscountPrice = (kmPrice - discount).toFixed(2);
        document.getElementById("discount").innerHTML = discount.toFixed(2) + "€";
        document.getElementById("offPrice").innerHTML = totalDiscountPrice + "€";

        userNameInput.value = "";
        userFamilyNameInput.value = "";
        userAgeInput.value = "";
        totalKmInput.value = "";
})




// document.getElementById("userNameStamp").innerHTML = userName;

    // const userFamilyName = userFamilyNameInput.value;
    // const totalKM = totalKmInput.value;
    // const underOver = underOverInput.value;
    
    // userNameStamp.innerHTML = userName;


// const totalKm = parseFloat(prompt("Inserisci la distanza da percorre in Km"));
// const userAge = parseInt(prompt("Inserisci la tua età", "18"));


// // CALCOLI

// const kmPrice = totalKm * .21;

// let discount = 0

// // CHECK INPUT UTENTE

// if (isNaN(totalKm) || isNaN(userAge)) {

//     alert("devi inserire un numero!")

// } else {

//     if (userAge < 18) {

//          discount = (kmPrice * 20) / 100;
//          document.getElementById("discount").innerHTML = ("Hai diritto al 20% di sconto, cioè " + (kmPrice * 20) / 100)

//      } else if (userAge >= 65) {

//          discount = (kmPrice * 40) / 100;
//          document.getElementById("discount").innerHTML = ("Hai diritto al 40% di sconto, cioè " + (kmPrice * 40) / 100)

//      }
//  }

//  const totalPrice = (kmPrice - discount).toFixed(2);

//  document.getElementById("ticketPrice").innerHTML = ("Il prezzo totale del tuo biglietto è " + totalPrice + "€")