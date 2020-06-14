import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import './layout.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Drawer } from '@material-ui/core'

const Header = () => {
    const [open, setOpen] = useState(false)

    const openHandler = () => {
        setOpen(!open)
    }

    return (
        <Nav>
            <Button onClick={openHandler}>
                <MenuIcon />
            </Button>
            <Text>Happy Birthday John</Text>
            <Drawer open={open} onClose={openHandler}>
                <h1>sdf</h1>
            </Drawer>
        </Nav>
    )
}

export default Header

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  background: #e01e37;
`

const Text = styled.div`
    font-family: 'Bellota', sans-serif;
    font-size: 20px;
    padding: 10px;
`