import React, {Component} from 'react';
import Card from            '@material-ui/core/Card';
import CardActionArea from  '@material-ui/core/CardActionArea';
import CardContent from     '@material-ui/core/CardContent';
import Typography from      '@material-ui/core/Typography';
import                      './CardServicios.css';


class CardServicio extends Component {
  render() {
    return (
      <Card className="card_item">
        <CardActionArea>
        <div className="imagen"><img src={this.props.src} alt="as"></img></div>
          
          
          <CardContent>
          
            <Typography gutterBottom variant="h5" component="h2">{this.props.titulo}                 </Typography>
            <Typography variant="body2" color="textSecondary" component="p">{this.props.descripcion}</Typography>
          </CardContent>
        
        </CardActionArea>
      </Card>
    );
  }
}

export default CardServicio;