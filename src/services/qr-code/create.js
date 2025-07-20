import prompt from "prompt"
import schemaQRcodePrompt from "../../prompts-schema/schema-qrcode.js"
import handle from "./handle.js";


async function createQRcode() {
    prompt.get(schemaQRcodePrompt, handle)

    prompt.start();
}

export default createQRcode