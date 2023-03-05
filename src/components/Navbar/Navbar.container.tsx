import {useMemo} from 'react'
import NavbarComponent from './Navbar.component';
import {useMediaQuery} from '@chakra-ui/react'


export function NavbarContainer(){
    const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

    const containerProps = {
        isSmallerThan768
    }

    const memoContainerProps = useMemo(
        ()=>{
            return containerProps;
        },
        [...Object.values(containerProps)]
    )

    return <NavbarComponent {...memoContainerProps}/>
}

export default NavbarContainer;