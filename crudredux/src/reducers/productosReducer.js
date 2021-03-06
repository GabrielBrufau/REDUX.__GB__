//
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTOS_EXITO,
    AGREGAR_PRODUCTOS_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOS,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR
    
} from '../types';



//cada reducer tiene su propio state
const initialState = {
    productos:[],
    error:null,
    loading:false,
    productoeliminar:null,
    productoeditar:null
}

export default function(state=initialState,action){
    switch(action.type){
        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return{
                ...state,
                loading:action.payload
            }
        case AGREGAR_PRODUCTOS_EXITO:
            return {
                ...state,
                loading:false,
                productos:[...state.productos,action.payload]
            }
        case PRODUCTO_ELIMINADO_ERROR:
        case DESCARGA_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTOS_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        
        case DESCARGA_PRODUCTOS_EXITOS:
            return{
                ...state,
                loading:false,
                error:null,
                productos:action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return{
                ...state,
                productoeliminar:action.payload
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return{
                ...state,
                productos: state.productos.filter(producto=>producto.id !==state.productoeliminar),
                productoeliminar:null
            }
        case OBTENER_PRODUCTO_EDITAR:
            return{
                ...state,
                productoeditar: action.payload
            }
        default:
            return state
    }
}