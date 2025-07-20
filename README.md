# 📟 Projeto QRCode via Terminal

Este é um projeto simples para gerar QR Codes diretamente pelo terminal, usando Node.js e bibliotecas específicas. Não é necessário navegador ou interface gráfica.

## 🛠️ Tecnologias utilizadas

- Node.js
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)
- [chalk](https://www.npmjs.com/package/chalk)
- [prompt](https://www.npmjs.com/package/prompt)

## 🚀 Funcionalidades

- Geração rápida de QR Code a partir de links diretamente no terminal.
- Saída visual do QR Code no console.

## 🔐 Configuração do arquivo `.env`

Antes de executar o projeto, é necessário criar um arquivo `.env` na raiz do repositório com as configurações desejadas para a geração de senha. Exemplo de conteúdo:

### 🧠 Explicando cada opção:

- `UPPERCASE_LETTERS=false`  
  👉 Define se a senha deve conter letras maiúsculas (A-Z). `true/false` ativa/desativa o uso de maiúsculas.

- `LOWERCASE_LETTERS=false`  
  👉 Define se a senha deve conter letras minúsculas (a-z). `true/false` ativa/desativa o uso de minúsculas.

- `NUMBERS=true`  
  👉 Permite o uso de números (0-9) na senha. `true/false` ativa/desativa os números.

- `SPECIAL_CHARACTERS=true`  
  👉 Permite o uso de caracteres especiais (!@#$%, etc). `true/false` inclui/remove esses símbolos na geração.

- `PASSWORD_LENGTH=8`  
  👉 Define o comprimento da senha. Neste exemplo, a senha terá **8 caracteres**.

📁 Crie este arquivo manualmente ou use o seguinte comando no terminal:

```bash
echo -e "UPPERCASE_LETTERS=false\nLOWERCASE_LETTERS=false\nNUMBERS=true\nSPECIAL_CHARACTERS=true\nPASSWORD_LENGTH=8" > .env

## ▶️ Como executar

```bash
# Clone o repositório
git clone https://github.com/Alex-Dias4/projeto-qrcode.git
cd projeto-qrcode

# Instale as dependências
npm install

# Execute o script principal (substitua "texto-aqui" pelo conteúdo desejado)
node index.js "texto-aqui"
