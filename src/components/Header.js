import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContainHeader = styled.header`
  background-color: #26C6DA;
  padding: .75rem;
  font-weight: bold;
  color: #FFFFFF;
`;

const TextHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`;

const Header = ({ tittle }) => {
  return (
    <ContainHeader>
      <TextHeader>{ tittle }</TextHeader>
    </ContainHeader>
  )
}

Header.propTypes = {
  tittle: PropTypes.string.isRequired
}

export default Header
