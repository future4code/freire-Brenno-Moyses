import { CardContainer } from "./style";
import Comentario from "../../assets/img/comentario.png"
import { FunctoinalitiesContainer } from "./style";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Baixo from '../../assets/img/Baixo.png'
import Cima from '../../assets/img/Cima.png'
import { StyledCard } from "./style";
import { Box } from "@mui/material";



const Cardd = (props) => {
    return (
        <Box mt={2} key={props.post.id}>
            <StyledCard>
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                        width='300px'
                    >
                        Enviado por: {props.post.username}
                    </Typography>
                    <Typography variant="h5" component="div" width="300px">
                        {props.post.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><img src={Cima}></img></Button>
                    <p>{props.post.voteSum}</p>
                    <Button size="small"><img src={Baixo}></img></Button>
                    <Button size="small"><img src={Comentario}></img></Button><p>{props.post.commentCount}</p>
                </CardActions>
            </StyledCard>
        </Box>
            
    );
}

export default Cardd