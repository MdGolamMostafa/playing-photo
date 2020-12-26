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


const Album = (props) => {
    const classes = useStyles();
    const {id, title,userId} = props.album;
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height = '222'
                        image={`https://loremflickr.com/600/400?random=${id}`}
                        title={title}
                />
                    <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title.length > 30 ? title.substring(0, 30) + "..." : title}
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                            </Typography>
                    </CardContent>
            </CardActionArea>
                <CardActions>
                    <Link  to={`/album/userId/${id}`}>
                        <Button  variant="contained" color="primary">
                            see all
                        </Button>
                    </Link>
                </CardActions>
        </Card>
    );
};

export default Album;