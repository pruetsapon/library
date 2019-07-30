const permission = (roles = []) => {

    if (typeof roles === 'number') {
        roles = [roles];
    }

    return (req, res, next) => {
        if (req.user && !roles.includes(req.user.role)) {
            return res.status(401).json({ message: 'Permission denied' });
        }
        next();
    };
}

module.exports = permission;