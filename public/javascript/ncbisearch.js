
async function NCBIsearch(event){
    event.preventDefault();
    
    const searchtext=document.querySelector('input[name="ncbi-input"]').value.trim();
    if(searchtext) {
        document.location.replace(`/ncbisearch/${searchtext}`)
        
    }   
}

document.querySelector('.ncbi-form').addEventListener('submit', NCBIsearch);