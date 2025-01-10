import nodemailer from 'nodemailer';
import bycryptjs from 'bcryptjs';
import {client} from '@/sanity/lib/backendClient';
import {MailtrapTransport}  from 'mailtrap';

interface MailOptions {
  to: string;
  emailType: string;
  userID: string;
}

export const sendMail = async ({to, emailType, userID}: MailOptions) => {

    try{
        const hashtoken =  await bycryptjs.hash(userID, 10);
        if(emailType === 'varify'){
            const verifyTokenExpiry = Date.now() + 3600000; // 1 hour from now

            await client.patch(userID)
                .set({
                    verifyToken: hashtoken,
                    verifyTokenExpiry: verifyTokenExpiry
                })
                .commit();
            }else if (emailType === 'reset'){
                const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now

                await client.patch(userID)
                    .set({
                        resetToken: hashtoken,
                        resetTokenExpiry: resetTokenExpiry
                    })
                    .commit();
            }

            const transport = nodemailer.createTransport(
                MailtrapTransport({
                  token: process.env.MAILTRAP_TOKEN!,
                  testInboxId: 3382283,
                })
              );
            console.log('working 2');
            const sender = {
                address: "hello@example.com",
                name: "Mailtrap Test",
              };
          const mailOptions = {
            from: sender,
            to: to,
            subject: emailType=== `varify` ? "Varify your email" : "Reset your password", // Subject line
        html: emailType === 'varify' 
        ? `<p>Please click the following link to verify your email:</p>
             <a href="${process.env.DOMAIN}verify?token=${hashtoken}">Verify Email</a>`
        : `<p>Please click the following link to reset your password:</p>
             <a href="${process.env.DOMAIN}/reset?token=${hashtoken}">Reset Password</a>`,
          }
          const info = await transport.sendMail(mailOptions);
          return info;

    }catch(error){
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error(String(error));
        }
    }
}