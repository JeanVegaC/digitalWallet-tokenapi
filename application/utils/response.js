export const response = (status, res, response) => {
    return res.status(status).json(response);
}