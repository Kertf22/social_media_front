import Link from "next/link";
import { useState } from "react";
import {Container, NavComponent, SideBar, SideBarWrap, Info, UserName, UserIcon, List, ListComponent,Effect,LoggoutContainer, Loggout, ButtonShow } from './NavStyle'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgProfile  from "react-icons/cg";

export const Nav = ({ user,Disconnect}) =>{

    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sideBar);

    return(   
        <Container>
            <NavComponent>
                <ButtonShow onClick={showSideBar}>
                    <FaIcons.FaBars height={"32px"} width="48px"/>
                </ButtonShow>
            </NavComponent>
            <SideBar sideBar={sideBar}>
                <SideBarWrap>
                    <ButtonShow onClick={showSideBar} >
                        <AiIcons.AiOutlineClose height="32px" width="48px"/>
                    </ButtonShow>
                    <Info>
                        <UserIcon> 
                             <img src={user?.imgUrl} />  
                        </UserIcon>
                        <UserName>{user?.name}</UserName>
                    </Info>
                    <List>
                        <ListComponent >
                        <AiIcons.AiOutlineHome />
                            <Link href="/">
                            Lobby 
                            </Link>
   
                        </ListComponent>
                        <ListComponent >
                        <CgProfile.CgProfile    />
                        {
                        user ? <Link href={`/user/${user?._id}`}>
                                Profile
                        </Link> : <></>
                        }
   
                        </ListComponent>
                    </List>
                    <LoggoutContainer>
                        <Loggout onClick={ e => Disconnect()}>
                            <span >Desconectar</span>
                        </Loggout>
                    </LoggoutContainer>
                </SideBarWrap>
            </SideBar>

        </Container>
    )
}