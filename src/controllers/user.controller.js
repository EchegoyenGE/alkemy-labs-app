import bcrypt from 'bcryptjs';
import { User } from '../database/index';
import moment from 'moment';
import jwt from 'jwt-simple';
import { validationResult } from 'express-validator';
import { SECRET } from '../config';

export const registerUser = async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10)
    try {
        const user = await User.create(req.body)
        res.json(user)
    } catch (err) {
        return res.json({ error: err.message })
    }
}

export const loginUser = async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } })

    if (user) {
        const samePass = bcrypt.compareSync(req.body.password, user.password)
        if (samePass) {
            res.json({
                success: createToken(user)
            })
        } else {
            res.json({ error: 'Wrong email or password' })
        }
    } else {
        res.json({ error: 'Wrong email or password' })
    }
}

const createToken = (user) => {
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(7, 'days').unix()
    }

    return {
        token: jwt.encode(payload, SECRET),
        username: user.username,
        name: user.name,
        userId: user.id
    }
}