export const studentAgeCheck = (req, res, next) => {
    if(req.body.name === 'siddique' && req.body.age > 21){
        next()
    }else{
        res.status(400).json({ msg : 'this is bad request'})
    }
}