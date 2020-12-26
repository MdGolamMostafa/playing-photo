import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        textAlign: 'left',
        float :'left',
        marginLeft:'5%',
        marginTop:'2%'
    },
    });


const Picture = (props) => {
    const classes = useStyles();
    const {id} = props.picture;
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height = '222'
                    image={`https://loremflickr.com/600/400?random=${id}`}
                />
                    <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                            </Typography>
                    </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Picture;