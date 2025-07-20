import chalk from "chalk";
// import { message } from "prompt";

const schemaQRcodePrompt =[
    {
        name: "link",
        description: chalk.yellow(
            "Digite o link para gerar o QR code:"
        ),
    },
    {
        name: "type",
        description: chalk.yellow(
            "Escolha entre o tipo de QR code (1 - NORMAL ou (2 - TERMINAL"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic(
            "Escolha apenas entre 1 e 2"
        ),
        required: true
    },
];

export default schemaQRcodePrompt;