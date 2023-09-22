const homelist = (req,res)=>{
    res.render('index',{title:"homepage"});

};
const fertilizer = (req,res)=>{
    res.render('fertilizers',{title:"Fertilizers"});
};
const festiside = (req,res)=>{
    res.render('festisides',{title:"Festiside"});
};
const organic = (req,res)=>{
    res.render('organic',{title:"organicfertilizers"});
};
module.exports={
    homelist,
    fertilizer,
    festiside,
    organic,
};