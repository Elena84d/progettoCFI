import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
 



const PORT = process.env.PORT || 5050;


// Configura il transporter una sola volta
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Usare 'false' se la connessione non è sicura
  auth: {
    user: "elena84d@gmail.com",
    pass: "rnkwiuvrcglibksv",
  },
  from: "elena84d@gmail.com",
});

// ...


app.post("/contatti", async (req, res) => {
  const nome = req.body.nome;
  const messaggio = req.body.messaggio;
  const email = req.body.email;
  const subject = req.body.subject;
  
  // Invia la mail a me
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
  
  // Invia la mail al cliente
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
  
transporter.sendMail(mail, conferma, (error, info) => {
  if (error) {
    console.error(error);
    res.status(500).send(error);
  } else {
    console.log(`Email inviata: ${info.response}`);
    res.status(200).send("Mail inviata");
  }
});
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});