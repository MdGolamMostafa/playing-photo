import React from 'react';
import {Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
            textAlign: 'left',
            float :'left',
            marginLeft:'5%',
            marginTop:'2%'
    },
  });
  
  

const Post = (props) => {
    const classes = useStyles();

    const{id,title,body} = props.post;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height = '222'
                    // image={`https://randomuser.me/api/portraits/thumb/men/${id}.jpg`}

                    image={`https://loremflickr.com/600/400?random=${id}`}
                    title={title}
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title.length > 30 ? title.substring(0, 30) + "..." : title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body.length > 80 ? body.substring(0, 80) + "..." : body}
                        </Typography>
                    </CardContent>

            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary">
                    Share
                </Button>
            
                    <Link  to={`/Post/${id}`}>
                        <Button  variant="contained" color="primary">
                            Details
                        </Button>
                    </Link>
            
            </CardActions>
        </Card>
    );
};

export default Post;