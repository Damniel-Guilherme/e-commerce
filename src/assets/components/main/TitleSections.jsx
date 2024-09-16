import React from 'react';
import styled from 'styled-components';


const TitleSectionsh = styled.h3`
  font-size: 16px;
  text-align: center;
  margin: 20px;
`

const TitleSections = (props) => {
    return (
        <>
            <TitleSectionsh>{props.title}</TitleSectionsh>  
        </>
    )
};

export default TitleSections;