let btn=document.querySelector('#reverse');
btn.addEventListener('click',countWord);
function countWord() 
{
    let text=document.querySelector('#string_text');
    let rev= text.value.split(" ")
    const count = {};

    rev.forEach(e => count[e] ? count[e]++ : count[e] = 1 );

    document.getElementById('reversed').innerHTML=`<h1>${JSON.stringify(count)}</h1>`;
}