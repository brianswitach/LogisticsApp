// improtamos la conexión a la db
import db from "../database/db.js";

// importamos sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define ('blogs', {
    title: { type : DataTypes.STRING }, 
    content: { type : DataTypes.STRING },
    codigo: { type : DataTypes.STRING },
    descripcion: { type : DataTypes.STRING },  
    rs: { type: DataTypes.STRING },
    direccion: { type: DataTypes.STRING },
    carga: { type: DataTypes.STRING },
    fecha_crono: { type: DataTypes.STRING },
    entrega: { type: DataTypes.STRING },
    detalle: { type: DataTypes.STRING },
    observaciones: { type: DataTypes.STRING },
    tipo: { type: DataTypes.STRING },
    fecha_remito: { type: DataTypes.STRING },
    zona: { type: DataTypes.STRING },
    autorizador: { type: DataTypes.STRING },
    estado: { type: DataTypes.STRING },
    fecha_entrega: { type: DataTypes.STRING },
    urgente: { type: DataTypes.STRING },
    cobro: { type: DataTypes.STRING },
    repetido: { type: DataTypes.STRING },
})
export default BlogModel