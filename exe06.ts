
async function data(url: string) {
    const response: Response = await fetch(url)
    const data = await response.json()
    return data
}

interface Empresa {
    nome: string,
    fundacao: number,
    pais: string
}

interface Produto {
    nome: string,
    preco: number,
    descricao: string,
    garantia: string,
    seguroAcidentes: boolean,
    empresaFabricante: Empresa;
    empresaMontadora: Empresa
}

function showInDom(data: Produto) {
    return document.body.innerHTML = `
    <div>
    <p>nome: ${data.nome}</p>
    <p>preco: ${data.preco}</p>
    <p>descricao: ${data.descricao}</p>
    <p>garantia: ${data.garantia}</p>
    <p>Possui seguro?: ${data.seguroAcidentes === true ? 'sim' : 'não'}</p>
    <p>Nome da fabricante: ${data.empresaFabricante.nome}</p>
    </div>
    ` 
}

data('https://api.origamid.dev/json/notebook.json').then(data => {
    showInDom(data)
})