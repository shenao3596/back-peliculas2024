const mongoose= require('mongoose')

const mongoconn = async () => {
   try{
        await mongoose.connect(process.env.MONGO_URI, {
    
         })
        console.log('La conexion ha sido exitosa')
   } catch (e) {
        console.log('Error de conexion', e)
        throw new Error('Error de conexion')
   }
}

module.exports= {mongoconn}