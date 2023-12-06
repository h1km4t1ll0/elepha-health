/**
 * A set of functions called "actions" for `password-reset`
 */
import { createTransport } from "nodemailer";

export default {
  passwordReset: async (ctx, next) => {
    try {
      console.log(ctx.request.body)
      const email = ctx.request.body.email;

      const code = Math.floor(1000 + Math.random() * 9000);

      const credentials = {
        email: process.env.EMAIL_SENDER_ADDRESS,
        service: process.env.EMAIL_SERVICE,
        password: process.env.EMAIL_PASSWORD,
      };

      let transporter;

      if (credentials.service == 'yandex') {
        transporter = createTransport({
          pool: true,
          host: "smtp.yandex.ru",
          port: 465,
          auth: {
            user: credentials.email,
            pass: credentials.password
          }
        });
      } else {
        transporter = createTransport({
          service: 'gmail',
          auth: {
            user: credentials.email,
            pass: credentials.password
          }
        });
      }


      const mailOptions = {
        from: 'noreply@elephahealth.com',
        to: email,
        subject: 'Сброс пароля',
        text: `Ваш код для сброса пароля в приложении CureSound: ${code}`
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      return {'code': code};
    } catch (err) {
      // ctx.body = err;
      return {'error': err};
    }
  }
};
