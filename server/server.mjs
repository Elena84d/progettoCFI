import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import axios from "axios";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5050;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "elena84d@gmail.com",
    pass: "rnkwiuvrcglibksv",
  },
  from: "elena84d@gmail.com",
});

app.post("/contatti", async (req, res) => {
  const nome = req.body.nome;
  const messaggio = req.body.messaggio;
  const email = req.body.email;
  const subject = req.body.subject;

  const mail = {
    to: "elena84d@gmail.com",
    subject: "Contatto dal sito",
    html: `
      <p>Hai ricevuto un messaggio dal modulo contatto:</p>
      <p>Nome: ${nome}</p>
      <p>Email: ${email}</p>
      <p>Oggetto: ${subject}</p>
      <p>Messaggio: ${messaggio}</p>
    `,
  };

  const conferma = {
    to: email,
    subject: "Conferma ricezione messaggio",
    html: `
      <p>Ciao, sono Elena. Ti confermo di aver ricevuto il tuo messaggio.</p>
      <p>Ti risponderò al più presto possibile.</p>
      <p>Ecco il riepilogo del tuo messaggio:</p>
      <p>Nome: ${nome}</p>
      <p>Email: ${email}</p>
      <p>Oggetto: ${subject}</p>
      <p>Messaggio: ${messaggio}</p>
    `,
  };

  try {
    const result = await transporter.sendMail(mail);
    const confermaResult = await transporter.sendMail(conferma);

    // Invia una risposta al client React
    res.status(200).send({
      successo: true,
      message: "Il tuo messaggio è stato inviato con successo. Riceverai una mail di conferma con il riepilogo del tuo messaggio",
    });
  } catch (error) {
    console.error("Errore durante l'invio delle email:", error);
    res.status(500).send({
      successo: false,
      message: "Si è verificato un errore durante l'invio del messaggio.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
