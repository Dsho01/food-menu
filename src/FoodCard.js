import {Card, CardContent, CardMedia, Typography, Button, CardActions} from '@mui/material';

function FoodCard({title, desc, imageLink, price}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageLink}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography gutterBottom variant="h6" component="div">
          ${price.toFixed(2)}
        </Typography>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default FoodCard;