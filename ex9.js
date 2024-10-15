// 9. Função para Calcular a Média de um Array
function media(array) {
    if (array.length === 0) return 0;
    const soma = array.reduce((acc, num) => acc + num, 0);
    return soma / array.length;
}