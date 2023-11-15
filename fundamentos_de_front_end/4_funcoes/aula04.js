function calcularDesconto(condicaoPagamento, precoEtiqueta) {
    if (condicaoPagamento === 1) {
        const precoReajustado = precoEtiqueta - (precoEtiqueta * 0.10)
        console.log(`O preço sera de R$ ${precoReajustado} reais`)
    }
    
    else if (condicaoPagamento === 2) {
        const precoReajustado = precoEtiqueta - (precoEtiqueta * 0.15)
        console.log(`O preço sera de R$ ${precoReajustado} reais`)
    }
    
    else if (condicaoPagamento === 3) {
        console.log(`O preço sera de R$ ${precoEtiqueta} reais`)
    }
    
    else {
        const precoReajustado = precoEtiqueta + (precoEtiqueta * 0.10)
        console.log(`O preço sera de R$ ${precoReajustado} reais`)
    }
}

calcularDesconto(1, 158)