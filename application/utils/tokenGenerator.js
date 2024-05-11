import jwt from 'jsonwebtoken';

const key = "JheanVega9453@";

export const tokenGenerator = (payload, expiresIn = '5m') => {
    const info = {
        user: payload.user,
        password: payload.password,
    };

    return {
        token: jwt.sign(info, key, { expiresIn }),
        expire: new Date(Date.now() + (parseInt(expiresIn) * 1000 * 60)).getTime() // Calcula el tiempo de expiración basado en el momento actual y la duración especificada en minutos
    };
};