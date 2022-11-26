const router = require('express').Router();
const ncbi= require('node-ncbi');
const pubmed = ncbi.pubmed;
const withAuth = require('../../utils/auth');

router.get('/:searchtext',(req,res)=>{
    
    pubmed.search(req.params.searchtext)//searchtext)
    .then((results) => {
        console.log(results);
        res.json(results);
        
    });

})



module.exports = router;