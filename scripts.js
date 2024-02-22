

//La suppression d'éléments du panier
var prod1 = document.getElementById('produit1');
var prod2 = document.getElementById('produit2');
var prod3 = document.getElementById('produit3');

var close1 = document.getElementById('close1');
var close2 = document.getElementById('close2');
var close3 = document.getElementById('close3');

close1.addEventListener("click", function(){
    p1 = 0.00;
    prod1.setAttribute("style", "display:none;");
    stax.innerHTML = String(((p1 + p2 + p3)*(1.0)).toFixed(2));
    
    atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
});
close2.addEventListener("click", function(){
    p2 = 0.00;
    prod2.setAttribute("style", "display:none;");
    stax.innerHTML = String(((p1 + p2 + p3)*(1.0)).toFixed(2));
    
    atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
});
close3.addEventListener("click", function(){
    p3 = 0.00;
    prod3.setAttribute("style", "display:none;");
    stax.innerHTML = String(((p1 + p2 + p3)*(1.0)).toFixed(2));
    
    atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
});




//Le nombre de produits
var minus1 = document.getElementById('minus1');
var minus2 = document.getElementById('minus2');
var minus3 = document.getElementById('minus3');

var plus1 = document.getElementById('plus1');
var plus2 = document.getElementById('plus2');
var plus3 = document.getElementById('plus3');

var prix1 = document.getElementById('prix1');
var prix2 = document.getElementById('prix2');
var prix3 = document.getElementById('prix3');

var prit1 = document.getElementById('prit1');
var prit2 = document.getElementById('prit2');
var prit3 = document.getElementById('prit3');

minus1.addEventListener("click", function(){minus(prix1, prit1, num1);});
minus2.addEventListener("click", function(){minus(prix2, prit2, num2);});
minus3.addEventListener("click", function(){minus(prix3, prit3, num3);});

plus1.addEventListener("click", function(){plus(prix1, prit1, num1);});
plus2.addEventListener("click", function(){plus(prix2, prit2, num2);});
plus3.addEventListener("click", function(){plus(prix3, prit3, num3);});

function minus(prix, prit, num)
{
    var number1 = Number(prix.innerHTML);

    if(number1 == 1)
    {
        number1 = 1;
    }
    if((number1 > 1))
    {
        number1--;
    }

    prix.innerHTML = String(number1);
    prit.innerHTML = String((number1*num).toFixed(2));

    if(check1.checked === true)
        p1 = Number(prit1.innerHTML);
    if(check2.checked === true)
        p2 = Number(prit2.innerHTML);
    if(check3.checked === true)
        p3 = Number(prit3.innerHTML);

    stax.innerHTML = String(((p1 + p2 + p3)*(1.0)).toFixed(2));

    atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));

}


function plus(prix, prit, num)
{
    var number2 = Number(prix.innerHTML);

    if(number2 == 5)
    {
        number2 = 5;
    }
    if((number2 < 5))
    {
        number2++;
    }

    prix.innerHTML = String(number2);
    prit.innerHTML = String((number2*num).toFixed(2));

    if(check1.checked === true)
        p1 = Number(prit1.innerHTML);
    if(check2.checked === true)
        p2 = Number(prit2.innerHTML);
    if(check3.checked === true)
        p3 = Number(prit3.innerHTML);

    stax.innerHTML = String(((p1 + p2 + p3)*(1.0)).toFixed(2));

    atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
}


//Pour les checkbox
var p1 = 0.00;
var p2 = 0.00;
var p3 = 0.00;

var atax = document.getElementById('atax');
var stax = document.getElementById('stax');

var check1 = document.getElementById('check1');
var check2 = document.getElementById('check2');
var check3 = document.getElementById('check3');

check1.addEventListener('click', function(){
    if(check1.checked === false)
    {
        p1 = 0.00;
    
        stax.innerHTML = String(((p1 + p2 + p3)*(1.0)).toFixed(2));
    
        atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
    }

    else if(check1.checked === true)
    {
        p1 = Number(prit1.innerHTML);

        stax.innerHTML = String(((p1 + p2 + p3)*(1.0)).toFixed(2));
    
        atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
    }

});

check2.addEventListener('click', function(){
    if(check2.checked === false)
    {
        p2 = 0.00;
    
        stax.innerHTML = String(((p1 + p2 + p3)*(1.0)).toFixed(2));
    
        atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
    }

    else if(check2.checked === true)
    {
        p2 = Number(prit2.innerHTML);

        stax.innerHTML = String(((p1 + p2 + p3)*(1.0)).toFixed(2));
    
        atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
    }
});

check3.addEventListener('click', function(){
    if(check3.checked === false)
    {
        p3 = 0.00;
    
        stax.innerHTML = String(((p1 + p2 + p3)*(1.0)).toFixed(2));
    
        atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
    }

    else if(check3.checked === true)
    {
        p3 = Number(prit3.innerHTML);

        stax.innerHTML = String(((p1 + p2 + p3)*(1.0)).toFixed(2));
    
        atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
    }
});



//Pour le paiement
var paid = document.getElementById('paiement');

paid.addEventListener('click', function(){verification();});

function verification()
{
    var conf = confirm("Voulez-vous effectuer le paiement?")

    if(conf === true)
    {
        alert("Paiement effectué! Merci de votre confiance.");
    }
}

