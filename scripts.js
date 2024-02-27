var atax = document.getElementById('atax');
var stax = document.getElementById('stax');

var p = [0.00, 0.00, 0.00];


//La suppression d'éléments du panier
var prod = Array.from(document.getElementsByClassName('prod'));

function closing(a)
{
    p[a] = 0.00;
    prod[a].setAttribute("style", "display:none;");

    stax.innerHTML = String(((p[0] + p[1] + p[2])*(1.0)).toFixed(2));
    atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
}

var clos = Array.from(document.getElementsByClassName('close'));

for(let i in clos)
{
    clos[i].addEventListener("click", function(){closing(parseInt(i))});
}



//Pour les favoris
var elem = Array.from(document.getElementsByClassName('favor'));

for(let i in elem)
{
    elem[i].addEventListener("click", function(){favor(i);});
}


function favor(a)
{
    var value = elem[a].getAttribute('src');

    if(value == "media/heart.png")
    {
        elem[a].setAttribute('src', "media/liked.png");
    }

    else if (value == "media/liked.png")
    {
        elem[a].setAttribute('src', "media/heart.png");
    }
}



//Pour les checkbox

function checking(a)
{
    if(check[a].checked === false)
    {
        p[a] = 0.00;
        stax.innerHTML = String(((p[0] + p[1] + p[2])*(1.0)).toFixed(2));
        atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
    }

    else if(check[a].checked === true)
    {
        p[a] = Number(prit[a].innerHTML);
        stax.innerHTML = String(((p[0] + p[1] + p[2])*(1.0)).toFixed(2));
        atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
    }
}

var check = Array.from(document.getElementsByClassName("check"));

for(let i in check)
{
    check[i].addEventListener("click", function(){checking(i)})
}



//Le nombre de produits
var moins = Array.from(document.getElementsByClassName('minus'));
var pluss = Array.from(document.getElementsByClassName('plus'));
var prix = Array.from(document.getElementsByClassName('prix'));
var prit = Array.from(document.getElementsByClassName('prit'));


function minus(a)
{
    let number1 = Number(prix[a].innerHTML);

    if(number1 == 1)
    {
        number1 = 1;
    }
    if((number1 > 1))
    {
        number1--;
    }

    prix[a].innerHTML = String(number1);
    prit[a].innerHTML = String((number1*num[a]).toFixed(2));

    for(let i in check)
    {
        if(check[i].checked === true)
            p[i] = Number(prit[i].innerHTML);
    }

    stax.innerHTML = String(((p[0] + p[1] + p[2])*(1.0)).toFixed(2));
    atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
}


function plus(a)
{
    let number2 = Number(prix[a].innerHTML);

    if(number2 == 5)
    {
        number2 = 5;
    }
    if((number2 < 5))
    {
        number2++;
    }

    prix[a].innerHTML = String(number2);
    prit[a].innerHTML = String((number2*num[a]).toFixed(2));

    for(let i in check)
    {
        if(check[i].checked === true)
            p[i] = Number(prit[i].innerHTML);
    }

    stax.innerHTML = String(((p[0] + p[1] + p[2])*(1.0)).toFixed(2));
    atax.innerHTML = String(((Number(stax.innerHTML))*(1.1)).toFixed(2));
}


for(let i in moins)
{
    moins[i].addEventListener("click", function(){minus(i)});
}
for(let i in pluss)
{
    pluss[i].addEventListener("click", function(){plus(i)});
}



//Pour le paiement
var paid = document.getElementById('paiement');

paid.addEventListener('click', function(){verification()});

function verification()
{
    if(confirm("Voulez-vous effectuer le paiement?"))
    {
        alert("Paiement effectué! Merci de votre confiance.");
    }
}


