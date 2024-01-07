import rateLimit from 'express-rate-limit';

const allowList: string[] = ['192.168.0.56', '192.168.0.94']

const apiRateLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 60,
    handler: (req, res, next, optionsUsed) => {
        res
            .status(optionsUsed.statusCode)
            .set('Retry-After', String(optionsUsed.windowMs))
            .send({message: "Retry later in " + optionsUsed.windowMs / 1000 + " seconds!"});
    },
    skip: (req, res) => {
        const a = req.ip;
        return allowList.includes(req.ip || '')
    }
});

export default apiRateLimiter;
