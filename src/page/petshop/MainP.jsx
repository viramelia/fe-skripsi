import React, {useState} from 'react'
import {Nav, Navbar, Form, FormControl, Button, NavDropdown, Image} from 'react-bootstrap'
import {BrowserRouter as Router, Link, Switch, Route, useHistory} from 'react-router-dom'

import BerandaC from '../BerandaC'
import ProfilP from './ProfilP'
import EditProfil from './EditProfil'
import TransaksiP from './TransaksiP'
import TransaksiL from './TransaksikL'
import TransaksioffP from './TransaksioffP'
import TransaksioffL from './TransaksioffL'
import About from '../About'
import DaftarPesanan from './DaftarPesanan'
import AntrianL from './AntrianL'
import MyChartLayanan from '../customer/MyChartLayanan'
import ProdukDetail from '../ProdukDetail'
import LayananDetail from '../LayananDetail'
import Produk from './Produk'
import Layanan from './Layanan'
import ProdukLainnya from '../ProdukLainnya'
import LayananLainnya from '../LayananLainnya'
import DetailPetshop from '../DetailPetshop'

function MainP() {
  const history = useHistory()
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () =>{
    setSidebar(true)
  }  
  const closeSidebar = () =>{
    setSidebar(false)
  }  

  const handleLogout = () =>{
    history.push('/')
  }

  return (
    <Router>
      <div id="mySidenav" className={sidebar? "sidenav open-sidenav": "sidenav" }>
        <h3 className="text-white text-center">Transaksi Offline</h3>
        <Link to="/petshop/offline-produk">Produk</Link>
        <Link to="/petshop/offline-layanan">Layanan</Link>
      </div>
      <div id="main" className={sidebar ? "push-main-page":"main-page"}>
        <Navbar className="navbar" expand="lg"  >
          {
            sidebar ?
            <span onClick={closeSidebar} className="close-sidebar">
              <div className="wrap-close">
                <div className="close-strip">
                  <div className="second-close-strip">
                  </div>
                </div>
              </div>
            </span>:
            <div className="sidebar-open" onClick={openSidebar}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          }
          <Navbar.Brand>
            <img className="navbar-logo" src={require('../../assets/LOGO PNG.png').default} alt="logo"/> 
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/petshop">
              Home
            </Nav.Link>
            <NavDropdown title="Daftar Pesanan" id="basic-nav-dropdown">
              <NavDropdown.Item href="/petshop/daftarpesanan">Produk</NavDropdown.Item>
              <NavDropdown.Item href="/petshop/antrian-layanan">Layanan</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Riwayat Transaksi" id="basic-nav-dropdown">
              <NavDropdown.Item href="/petshop/transaksi">Produk</NavDropdown.Item>
              <NavDropdown.Item href="/petshop/transaksi-layanan">Layanan</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Form className="d-flex mr-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button style={{backgroundColor:'#7435AB'}} variant="primary" >Search</Button>
            </Form>
          <Image className="img-profil" src={require('../../assets/petshop.png').default} roundedCircle />
          <NavDropdown title="Viramelia" id="basic-nav-dropdown">
          <NavDropdown.Item href="/petshop/profil">Profil</NavDropdown.Item>
          <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
        </Navbar>
        <Switch>
          <Route exact path="/petshop">
            <BerandaC/>
          </Route>
          <Route path="/petshop/products">
            <ProdukLainnya/>
          </Route>
          <Route path="/petshop/services">
            <LayananLainnya/>
          </Route>
          <Route path="/petshop/offline-layanan">
            <TransaksioffL/>
          </Route>
          <Route path="/petshop/offline-produk">
            <TransaksioffP/>
          </Route>
          <Route path="/petshop/profil">
            <ProfilP/>
          </Route>
          <Route path="/petshop/transaksi">
            <TransaksiP/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/petshop/daftarpesanan">
            <DaftarPesanan/>
          </Route>
          <Route path="/petshop/pesanan-layanan">
            <MyChartLayanan/>
          </Route>
          <Route path="/petshop/antrian-layanan">
            <AntrianL/>
          </Route>
          <Route path="/petshop/detail-produk">
            <ProdukDetail/>
          </Route>
          <Route path="/petshop/detail-layanan">
            <LayananDetail/>
          </Route>
          <Route path="/petshop/upload-produk">
            <Produk/>
          </Route>
          <Route path="/petshop/upload-layanan">
            <Layanan/>
          </Route>
          <Route path="/petshop/edit-profil">
            <EditProfil/>
          </Route>
          <Route path="/petshop/transaksi-layanan">
            <TransaksiL/>
          </Route>
          <Route path="/petshop/detail-petshop">
            <DetailPetshop/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default MainP


