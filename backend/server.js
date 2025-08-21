const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor do backend está rodando!');
});

// Rota para o formulário de contato
app.post('/api/contato', async (req, res) => {
  const { nome, email, mensagem } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.SMTP_USER,
      subject: `Nova mensagem de contato de ${nome}`,
      text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    return res.status(500).json({ error: 'Erro ao enviar o e-mail. Tente novamente mais tarde.' });
  }
});

const port = 3001; 
app.listen(port, () => {
  console.log(`Servidor do backend rodando na porta ${port}`);
});