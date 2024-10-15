// 3. Função para Calcular o Fatorial
function fatorial(n) {
    if (n < 0) return "Fatorial não definido para números negativos";
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
