import React from 'react'
import logo from './LOGO.png'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact'
import { NavLink, Outlet } from 'react-router-dom'
 
const Sidebar = () => {
  return (
    <div style={{
      display: 'flex', 
      height: '100vh', 
      overflow: 'scroll initial'
      }} >
       <CDBSidebar textColor="#fff" backgroundColor="black">
        <CDBSidebarHeader>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }} >
            <img 
              src={logo} 
              alt="Logo de la página" 
              style={{width: '100%'}}/>
          </a>
        </CDBSidebarHeader>
 
        <CDBSidebarContent className="sidebar-content" >
          <CDBSidebarMenu>
            <NavLink to='/administrator/userProfile' >
              <CDBSidebarMenuItem icon="user">Perfil</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to='/administrator/products' >
              <CDBSidebarMenuItem icon="table">Productos</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to='/administrator/orders' >
              <CDBSidebarMenuItem icon="chart-line">Pedidos</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to='/administrator/clients' >
              <CDBSidebarMenuItem icon="chart-line">Clientes</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        {/* <Outlet /> */}
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 5px',
              fontSize: '2em'
            }}
          >
            Heladería
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
}
 
export default Sidebar