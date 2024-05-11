export const globalException = (res, req, status = 500, message) => {
    return res.status(status).json({
        message,
        path: req.path
    })
}