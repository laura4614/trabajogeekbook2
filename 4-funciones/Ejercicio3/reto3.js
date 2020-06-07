function totalprecio(num){
    const iva = (num*0.21);
    const total = num + iva;
    const result = `Precio sin Iva: ${num}, Iva: ${iva}, y Total: ${total}`;

    return result;
}

console.log(totalprecio(15));

