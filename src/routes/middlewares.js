import jwt from 'jwt-simple';
import moment from 'moment';

export const checkToken = (req, res, next) => {

    if (!req.headers['user-token']) {
        return res.json({ error: 'user-token is missing' })
    }

    const userToken = req.headers['user-token']
    let payload = {}

    try {
        payload = jwt.decode(userToken, 'ALPHABETAGAMMA')
    } catch (err) {
        return res.json({ error: 'user-token is invalid' })
    }

    if (payload.expiredAt < moment().unix()) {
        return res.json({ error: 'user-token has expired' })
    }

    req.userId = payload.userId;

    next()
}
