import React from 'react'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

const Message = styled.p`
  background-color: rgba(127, 224, 237, .5);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  font-size: 1.3rem;
`;

const TextQuotation = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  font-size: 1.3rem;
`;

const QuotationResult = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #26c6da;
  background-color: rgba(127, 224, 237, .5);
  margin-top: 1rem;
  position: relative;
`;

const Result = ({ quotation }) => {

  return (
    (quotation === 0) ?
      <Message>Elige marca, año y tipo de seguro</Message>
    :
      (
        <QuotationResult>
          <TransitionGroup
            component="span"
            className="resultado"
          >
            <CSSTransition
              classNames="resultado"
              key={quotation}
              timeout={{ enter: 500, exit: 500 }}
            >
              <TextQuotation>El total es: $ <span>{quotation}</span></TextQuotation>
            </CSSTransition>
          </TransitionGroup>
        </QuotationResult>
      )
  )
}

Result.propTypes = {
  quotation: PropTypes.number.isRequired
}

export default Result
