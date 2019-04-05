import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Sidenav = () => {

    return (
        <div>
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fas fa-trophy" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Torneo
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Crear
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Modificar
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Eliminar
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fas fa-users" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Equipo
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Crear
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Modificar
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Eliminar
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fas fa-male" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Jugador
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Crear
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Modificar
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Eliminar
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fas fa-futbol" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Partido
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Crear
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Modificar
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Eliminar
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </div>
    );

};

export default Sidenav;