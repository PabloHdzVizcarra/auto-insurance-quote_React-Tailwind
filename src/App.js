import React, { useState } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary'
import Result from './components/Result'
import Spinner from './components/Spinner'
import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 37.5rem;
  margin: 0 auto;
`;

const ContainForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {

  const [summary, setSummary] = useState({
    quotation: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const [loading, setLoading] = useState(false);

  // Extraer datos
  const { data, quotation } = summary;

  return (
    <Container>
      <Header
      tittle="Cotizador de seguros"
      />

      <ContainForm>
        <Form
          setSummary={setSummary}
          setLoading={setLoading}
        />

        { loading ? <Spinner /> : null }

        <Summary
          data={data}
        />

        { !loading ?
          <Result
            quotation={quotation}
          />
        :
          null
        }
      </ContainForm>
    </Container>
  );
}

export default App;
