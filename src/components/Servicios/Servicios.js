import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardServicio from './CardServicios/CardServicios';
import './Servicios.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

export default function Servicios() {
  const classes = useStyles();
  const listaServicios= [ 
    {
      titulo:"Vetna de Repuestos",       
      descripcion:"Laborum eu id deserunt commodo magna ad consectetur anim et proident laboris cupidatat dolor labore.",
      src:require("../../images/servicios/servicio1.jpg")

    },
    {
      titulo:"Service de Mantenimeto",   
      descripcion:"Laborum ex laboris sint voluptate ad cillum enim ex ut officia enim et do. ",
      src:require('../../images/galeriaFotos/foto4.jpg')
    }, 
    {
      titulo:"Styling de automoviles ",  
      descripcion:"Laborum adipisicing enim cupidatat pariatur.",
      src:require('../../images/galeriaFotos/foto4.jpg')
    },
    {
      titulo:"Autos Antiguos",           
      descripcion:"Occaecat anim cillum ullamco sint fugiat commodo magna fugiat.",
      src:require('../../images/galeriaFotos/foto4.jpg')
    },
    {
      titulo:"Autos Antiguos",           
      descripcion:"Occaecat anim cillum ullamco sint fugiat commodo magna fugiat.",
      src:require('../../images/galeriaFotos/foto4.jpg')
    },
    {
      titulo:"Autos Antiguos",           
      descripcion:"Occaecat anim cillum ullamco sint fugiat commodo magna fugiat.",
      src:require('../../images/galeriaFotos/foto4.jpg')
    },
  ];

  const listaServiciosMap = listaServicios.map(servicio => (
    <Grid item xs={6} sm={4}><CardServicio  descripcion={servicio.descripcion}  titulo={servicio.titulo} src={servicio.src}/></Grid>
  ));

  return (
    <div className="Container" className={classes.root}>
      <Grid container spacing={3}> 
        {listaServiciosMap}      
    
      </Grid>
    </div>
  );
}

