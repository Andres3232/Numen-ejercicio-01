


 const sumarConParametros = ( req, res ) => {

     const { num1,num2 } = req.params;
     
    const resultado = Number(num1) + Number(num2);

     res.status(200).json({
        suma: resultado
     })

 }
 const sumarConQueryParams = ( req, res ) => {

    const { num1,num2 } = req.query;
    console.log(num1);
    
    
   const resultado = Number(num1) + Number(num2);

    res.status(200).json({
       suma: resultado
    })

}

const operacionPost = ( req, res ) => {
    

    res.status(200).json({
        msg: 'POST operacion',

    })

}

const operacionPut = ( req, res ) => {


    res.status(200).json({
        msg: 'PUT operacion',
        id
    })
   
    
}


const operacionDelete = ( req, res ) => {


    res.status(200).json({
        msg: 'DELETE operacion',
        id
    })

}


module.exports = {
    sumarConParametros,
    sumarConQueryParams,
    operacionPost,
    operacionPut,
    operacionDelete

}