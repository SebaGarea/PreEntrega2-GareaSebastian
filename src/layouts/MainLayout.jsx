
import { Box } from "@chakra-ui/react"
import {NavBar} from "../components/NavBar";




export const MainLayout = ({children}) => { //children es una palabra reservada


    return (
    <Box>
        <NavBar />
        {children}
        {/* <footer> Este es mi footer </footer> */}
    </Box>
    )
}


