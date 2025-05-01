import helmet from "helmet";

export const helmetConfig = helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: [
                "'self'",
                "'unsafe-inline'",
                "https://fonts.googleapis.com/",
            ],

            fontSrc: [
                "'self'",
                "data:",
                "https://fonts.gstatic.com/",
            ],
            scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],

            connectSrc: [
                "'self'",
                "https://fonts.googleapis.com/",
                "https://fonts.gstatic.com/",
            ],

            frameSrc: ["'self'"],
            objectSrc: ["'none'"],
            upgradeInsecureRequests: [],
        },
    },
});
