const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');
const loader = document.getElementById('loader');
const anime_title=document.getElementById('anime-title');


/* Show loader */
function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}

// hide loading
function complete(){
    if(!loader.hidden){
        quoteContainer.hidden=false;
        loader.hidden=true;
    }
}

/* Get quote from API */
// function getQuote(){
//     loading();
//    fetch('https://animechan.vercel.app/api/random/')
//         .this(response=>console.log(response));
//     complete();
// }
// async function getQuote(){
//     loading();
//     const proxyUrl= 'https://cors-anywhere.herokuapp.com/';
//     const apiUrl='https://animechan.vercel.app/api/random/';
//     try{
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         console.log(data.quote);
//         /* if author is blanck, add unknown */ 
   
//         if(data.quoteAuthor===''){
//             authorText.innerText="unkown"
//         }
//         else{
//             authorText.innerText = data.quoteAuthor;
//         }

//         /* reduce font size if long text */
//         if(data.quote.length > 120){
//             quoteText.classList.add('long-quote')
//         }else{
//             quoteText.classList.remove('long-quote');
//         }
//         quoteText.innerText= data.quote;
//         //Stop Loader and show Quote
//         complete(); 
//     }catch(error){
//         // getQuote();
//         console.log("whoops no quote",error);
//     }
// }


// tweet quote
function tweetQuote(){
    const quote= quoteText.innerText;
    const author=authorText.innerText;
    const twitterUrl= `https://twitter.com/intent/tweet?text=${quote}-${author}`;
    window.open(twiterUrl,'blank');
}
// Event listeners
newQuoteBtn.addEventListener('click',getQuote);
twitterBtn.addEventListener('click',tweetQuote);


async function getQuote(){
    loading();
    const responce= await fetch('https://animechan.vercel.app/api/random');
    const data= await responce.json();
    console.log("come on: ",data);
    quoteText.innerText=data.quote;
    anime_title.innerText=data.anime;
    if(data.quote.length > 120){
        quoteText.classList.add('long-quote');
        console.log("it is longer that shit ");
    }
    else{
        quoteText.classList.remove('long-quote');
    }
    console.log(data);
    complete();
}

// On Load
getQuote();
