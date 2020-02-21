import React from "react";
import styled from "styled-components";


const Header = styled.header`
font-size: 2rem;
color: #fff;
display: flex;
background: #2C8CD0;
border: 2px solid #413539;
align-items: center;
justify-content: space-between;
`;

const NavPagination = styled.ul`
display: flex;
`;

const PageItem = styled.li`
display: flex;
border: 2px solid #413539;
padding: 10px;
border-radius: 10px;
background: #fff;
&:hover{
    background: #A9A1A6;
}
`;

const PageLink = styled.a`
font-size: .8rem;
color: #2C8CD0;
text-decoration: none;
&:hover{
    color: #fff;
}
`;

export default function Pagination(){
    return(
    <div>

        <nav aria-label="Page navigation example">
            <Header>React Wars
                <NavPagination>
                    <PageItem><PageLink href="#">Previous</PageLink></PageItem>
                    <PageItem><PageLink href="https://swapi.co/api/people/?page=2">1</PageLink></PageItem>
                    <PageItem><PageLink href="https://swapi.co/api/people/?page=">2</PageLink></PageItem>
                    <PageItem><PageLink href="https://swapi.co/api/people/?page=4">3</PageLink></PageItem>
                    <PageItem><PageLink href="#">Next</PageLink></PageItem>
                </NavPagination>
            </Header>
        </nav>
    </div>
    )
}