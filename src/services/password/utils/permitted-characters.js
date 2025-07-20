// extract method
async function permittedCharacters(params) {
    let permitted = []

    if(process.env.UPPERCASE_LETTERS === "true")
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ") //... significa que eu vou espalhar (não substituir)
    
    if (process.env.LOWERCASE_LETTERS === "true")
        permitted.push(..."abcdefghijklmnopqrstuvwxyz")

    if (process.env.NUMBERS === "true")
        permitted.push(..."0123456789")
    
    if (process.env.SPECIAL_CHARACTERS === "true")
        permitted.push(..."!@#$%^*()_.?/~")
    
    return permitted;
}

export default permittedCharacters;