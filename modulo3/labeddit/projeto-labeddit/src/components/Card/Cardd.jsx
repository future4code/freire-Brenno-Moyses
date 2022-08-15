
import Comentario from "../../assets/img/comentario.png"
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Baixo from '../../assets/img/Baixo.png'
import Cima from '../../assets/img/Cima.png'
import { StyledCard } from "./style";
import { Box } from "@mui/material";
import { goToPost } from "../../routes/coordinator";
import { useNavigate, useLocation } from "react-router-dom";
import { createVote } from "../../services/posts";
import { changeVote } from "../../services/posts";

const Cardd = (props) => {

    const {pathname} = useLocation()

    const navigate = useNavigate()

    

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
                    <Button onClick={()=> createVote(props.post.id)} size="small"><img src={Cima}></img></Button>
                    <p>{props.post.voteSum}</p>
                    <Button onClick={()=>changeVote(props.post.id)} size="small"><img src={Baixo}></img></Button>

                    {pathname === "/feed" ? (
                        <><Button onClick={() => goToPost(navigate, props.post.id)} size="small"><img src={Comentario}></img></Button><p>{props.post.commentCount}</p></>
                    ) : (
                        ""
                    )}
                </CardActions>
            </StyledCard>
        </Box>
            
    );
}

export default Cardd