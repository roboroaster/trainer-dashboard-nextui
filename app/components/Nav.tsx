"use client";
import React from 'react';
import Link from 'next/link';
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
// import { ThemeSwitcher } from './ThemeSwitcher';


const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
        <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className='sm:hidden'
        />
        <NavbarBrand>
            <p className="font-['Oswald'] font-bold text-inherit text-2xl">
                F** Fitness
            </p>
        </NavbarBrand>
        </NavbarContent>

        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
            <NavbarItem>
                <Link color='foreground' href="#">
                    Home
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color='foreground' href="#">
                    Users
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color='foreground' href="#">
                    About
                </Link>
            </NavbarItem>
            
        </NavbarContent>
    </Navbar>
  )
}

export default Nav
