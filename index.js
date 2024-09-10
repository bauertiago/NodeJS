// hellow world
console.log("hello world!");

//variáveis
let mensagem = "Hello World!";
console.log(mensagem);

// arrays
let metas = ["Tiago", "alô"]
console.log(metas[1] + ", " + metas[0] + "!");

// objetos
let meta = {
    value: 'ler um livro por mês',
    checked: false,
    log: (info) => {
        console.log(info)
    }
}

meta.value = 'não é mais ler um livro'//manipulação
meta.log(meta.value)

// *function // arrow function*
//function criarMeta() {}
//const criarMeta = () => {}