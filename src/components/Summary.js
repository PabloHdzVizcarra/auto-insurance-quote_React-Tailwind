import React from 'react'
import styled from '@emotion/styled'
import { firstLetterCapitalize } from '../helper'
import PropTypes from 'prop-types'

// -------------- style components ------------------------

const SummaryContain = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: rgba(0, 0, 0, .10);
  color: black;
  margin-top: 1rem;
  border-radius: 8px;
`;


// -------------- finish style components -----------------

const Summary = ({ data }) => {
  // Extraer de data
  const { brand, year, plan } = data;

  if (brand === '' || year === '' || plan === '') return null;

  return (
    <SummaryContain>
    <h2>Resumen de cotizacion</h2>
    <ul>
      <li>Marca: { firstLetterCapitalize(brand) }</li>
      <li>Plan: {firstLetterCapitalize(plan)}</li>
      <li>Año del auto: {year}</li>
    </ul>
    </SummaryContain>
  )
}

Summary.propTypes = {
  data: PropTypes.object.isRequired
}

export default Summary
