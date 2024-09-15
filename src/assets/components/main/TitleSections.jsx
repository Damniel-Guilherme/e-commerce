import React from 'react';
import styled from 'styled-components';


const TitleSectionsh3 = styled.h3`
  font-size: 16px;
  text-align: center;
  margin: 20px;
`

const TitleSections = (props) => {
    return (
        <>
            <TitleSections>{props.title}</TitleSections>  
        </>
    )
};

export default TitleSections;