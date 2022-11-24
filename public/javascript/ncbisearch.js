const ncbi= require('node-ncbi');


async function NCBIsearch(event){
    // event.preventDefault();
    //const searchtext=document.querySelector('input[name="ncbi-input"]').value.trim();
const pubmed = ncbi.pubmed;
await pubmed.search('actin')//searchtext)
    .then((results) => {
        console.log(results);
        // res.json(results);
        if (results.count==0){
            console.log("no results found");
        } else {
            console.log(results.count+" results found!");
            console.log(results.papers[1].raw);
            //searchresults(results);
        }
    });

}

NCBIsearch();