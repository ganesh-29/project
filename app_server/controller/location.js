const homelist = (req,res)=>{
    res.render('index',{title:"homepage"});

};
const locationinfo = (req,res)=>{
    res.render('location',{title:"location"});
};
const addreview = (req,res)=>{
    res.render('review',{title:"review"});
};
module.exports={
    homelist,
    locationinfo,
    addreview
};