function Calcular(){
    let v_porcentaje=parseFloat(document.getElementById("porcentaje").value);
    let costounitario=parseFloat(document.getElementById("valor").value)
       let por=v_porcentaje/100;
           let resu=por*costounitario;
        let precioVenta=costounitario+resu


    document.getElementById("PrecioVentas").innerHTML+=precioVenta;
    
     }