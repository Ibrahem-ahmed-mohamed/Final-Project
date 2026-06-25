import type { Core } from "@strapi/strapi";

// config/plugins.ts
export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        tls: {
          ciphers: 'SSLv3',
          rejectUnauthorized: false,
        },
      },
      settings: {
        defaultFrom: env('EMAIL_FROM'),
        defaultReplyTo: env('EMAIL_REPLY_TO'),
      },
    },
  },
});

// export default config;

// export default ({ env }) => ({

// });
