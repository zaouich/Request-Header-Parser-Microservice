var browser = require('browser-detect');
const getInfos = (req,res,next)=>{

    console.log(req.ip)
    res.status(200).json({
        ipaddress:req.ip,
        language :req.headers["accept-language"],
        software:req.get('User-Agent'),
    })
}
module.exports = getInfos


