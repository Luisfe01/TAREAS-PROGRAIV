var apppeliculas = new Vue({
    el:'#frm-peliculas',
    data:{
        pelicula:{
            idPelicula : 0,
            accion    : 'nuevo',
            titulo   : '',
            descripccion : '',
            sinopsis  : '',
            genero  : '',
            duracion  : '',
            msg       : ''
        }
    },
    methods:{
        guardarPeliculas(){
            fetch(`private/Modulos/peliculas/procesos.php?proceso=recibirDatos&pelicula=${JSON.stringify(this.pelicula)}`).then( resp=>resp.json() ).then(resp=>{
                this.pelicula.msg = resp.msg;
            });
        },
        limpiarPeliculas(){
            this.pelicula.idPelicula=0;
            this.pelicula.accion="nuevo";
            this.pelicula.titulo="";
            this.pelicula.descripcion="";
            this.pelicula.sinopsis="";
            this.pelicula.genero="";
            this.pelicula.duracion="";
            this.pelicula.msg="";
        }
    }
});