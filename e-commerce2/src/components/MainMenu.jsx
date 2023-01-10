import React from "react";
import SubMenu from "./SubMenu";
import { Navbar } from 'react-bootstrap'
import menus from "../data/menu";


export default function MainMenu(){
    const subMenus = menus.map(subMenu => {
        return (
            <SubMenu title={subMenu.title} position={subMenu.position} children={subMenu.children}/>
        )
    })
    return (
        <div className="category">
            <Navbar bg= "navbar2" expand="lg">
                {subMenus}
            </Navbar>
        </div>
    )
}