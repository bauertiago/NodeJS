## Linguagem de programação

Maneira de dar instrução ao computador.
Como um lego, você irá utilizar peças para criar algoritmos, ou seja, para resolver problemas.
>   **Algoritmo**: Sequência de passos lógicos e finita para resolução de um problema.

## Peças de uma linguagem

- [x] Comentários
- Declaração de variáveis (const, let)
- Operadores (atribuição, concatenação, matemáticos, lógicos)
- Tipos de dados (String, number, boolean)
- Estrutura de dados (functions, object, array)
- controle de fluxo (if/else)
- Estrutura de repetição (for, while)

# Fases da resolução de um problema

Coletar os dados
processar os dados (manipular, alterar ...)
Apresentar os dados

## Escopo e variáveis:

- [x] Variáveis globais e locais
- [x] Constantes

## Tipos de dados:

- [x] Strings (textos): "" '' ``
- [x] Number: 2 1.5
- [x] Boolean

## Operadores

- [x] Operadores de atribuição de valor (=)
- [x] Operador de concatenação (+)

## Estruturas de dados:

### Arrays:

- [x] Uma lista que contém qualquer tipo de dado

### Objetos:

- [x] Atributos e métodos
- [x] Criação e manipulação de objetos
- [x] Acesso a propriedades de objetos

### Function
- [x] criar
- [x] executar
- [x] arrow function/ function

# Estrutura de repetição
- [x] While
    const start = () => {
        let count = 0
        while(count < 10){
        console.log(count)
        count++
        }
    }

    start()

# Condicionais
- [x] switch
    const start = () => {
        while(true){
            let opcao = "sair"
            switch(opcao) {
                case "cadastrar":
                    console.log("vamos cadastrar")
                    break
                case "listar":
                    console.log("vamos listar")
                    break
                case "sair":
                    return
            }
        }
    }
    start()

    