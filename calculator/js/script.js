const TEXT = document.querySelector('.text');

function callculate(event){
    TEXT.value +=event;

}
function reset(){
    TEXT.value=''
}

function resalt(){
    try{
        TEXT.value=eval(TEXT.value)
    }
    catch(error){
        TEXT.value='ERROR'

    }
    
}
function cc(){
    TEXT.value = TEXT.value.slice(0,-1);
}

window.addEventListener('load',function(){
    TEXT.value=''
})