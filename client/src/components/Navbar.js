import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"; {/*importar los links para navegacion*/}

export default function Navbar() {

    const navegate = useNavigate();

    return (
        <Box sx={{flexGrow: 1}}> {/*abarca el ancho de la pantalla por la der*/}
            <AppBar position="static" color="transparent">
                <Container> {/*para que este centrado*/}
                    <Toolbar>{/*ociones del menu*/}
                        <Typography variant="h6" sx={{flexGrow: 1}}>
                            <Link to='/' style={{textDecoration:'none', color: '#eee'}}>PERN Stack</Link>
                        </Typography>
                        <Button variant="contained" 
                                color="primary" 
                                onClick={ () => navegate('/tasks/new')}> 
                            New Task
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
