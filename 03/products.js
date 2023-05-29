

async function list (opts = {}) {

    const { offset = 0, limit = 25 } = opts

    const data = await fs.readFile(productsFile)

    return JSON.parse(data).slice(offset, offset + limit)
    
}

