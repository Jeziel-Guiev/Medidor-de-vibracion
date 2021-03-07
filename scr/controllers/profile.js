'use strict'


async function dashboard(req,res){
    var locals={
        title:'Dashboard'
    }
   res.render('dashboard', locals);
}
module.exports={
    dashboard
}