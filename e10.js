// 10. Função para Verificar Palíndromo
function ehPalindromo(s){
    s = s.toLowerCase().replace(/\s/g, ''); // Ignorar espaços e case
    return s === s.split('').reverse().join('');