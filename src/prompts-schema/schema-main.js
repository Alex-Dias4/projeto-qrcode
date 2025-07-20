// import { message } from "prompt"; não sei pq coloquei isso

import chalk from "chalk";

const schemaMainPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold(
            "Escolha a ferramenta (1 - QR code ou (2 - PASSWORD)"
        ),
        pattern: /^[1-2]$/,
        message: chalk.red.italic(
            "Escolha inválida. Digite 1 ou 2."
        ),
        required: true
    }
]

export default schemaMainPrompt;