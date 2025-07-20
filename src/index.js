import prompt from "prompt";

import schemaMainPrompt from "./prompts-schema/schema-main.js";
import createQrcode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
import chalk from "chalk";

async function main(){
    prompt.get(schemaMainPrompt, async (err, choose) =>{
        if(err) console.log(chalk.white.bgRed(err))
        if (choose.select == 1) await createQrcode();
        if (choose.select == 2) await createPassword();
        
    });

    prompt.start();
}
main()