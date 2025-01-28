const validationParamId = ( req, res, next) => {
    if(isNan(req.params.id)) {
        return res.sendStatus(400);
    }
    next();
};

module.exports = validationParamId;