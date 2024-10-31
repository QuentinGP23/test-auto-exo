import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendEmail = async (subject: string, text: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'quentgeoffpit@yahoo.fr',
    subject,
    text
  });
};
