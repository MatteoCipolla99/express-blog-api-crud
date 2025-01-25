const validationParamId = ( req, res, next) => {
    req.params.id = Number(req.params.id);
    if(isNan(req.params.id)) {
        return res.sendStatus(400);
    }
    next();
};

module.exports = validationParamId;