import React, { useState } from 'react'
import styled from '@emotion/styled'
import { getDifferencePerYear, calculateBrand, getPlan } from '../helper';
import PropTypes from 'prop-types'


const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 6.25rem;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00839F;
  font-size: 1rem;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: #26C6DA;
  }
`;

const Error = styled.div`
  background-color: #ff1a1a;
  color: white;
  padding: 1rem;
  width: 93.5%;
  text-align: center;
  margin: 0 auto 2rem auto;
`;

const Form = ({ setSummary, setLoading }) => {

  const [data, setData] = useState({
    brand: '',
    year: '',
    plan: ''
  })

  const [error, setError] = useState(false);

  // Extraer los valores del state
  const { brand, year, plan } = data;

  // Leer datos del formulario y colocarlos en el State
  const getInfo = event => {
    const { target } = event;

    setData({
      ...data,
      [target.name] : target.value
    })
  }

  // Cuando el usuario presiona submit

  const handleSubmit = event => {
    event.preventDefault();

    // const { target } = event;

    if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true);
      return;
    }

    setError(false);

    // Tenemos una base de 2000 para los años
    let result = 2000;

    //-Obtener la diferencia de años
    //-Por cada año hay que restar el 3%

    const difference = getDifferencePerYear(year);
    result -= ((difference * 3) * result) / 100;

    //-Americano 15%
    //-Asiatico 5%
    //-Europeo 30%

    result = calculateBrand(brand) * result;

    //-Basico aumenta 20%
    //-Completo aumenta 50%

    const planIncrease = getPlan(plan);
    result = parseFloat( planIncrease * result ).toFixed(2);

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      setSummary({
        quotation: Number(result),
        data
      })
    }, 3000);

  }

  return (
    <form
      onSubmit={ handleSubmit }
    >
      { error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Field>
        <Label>Marca</Label>
        <Select
          name='brand'
          value={brand}
          onChange={getInfo}
        >
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Field>
      <Field>
        <Label>Año</Label>
        <Select
          name='year'
          value={year}
          onChange={getInfo}
        >
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === 'basico'}
          onChange={getInfo}
        />Basico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === 'completo'}
          onChange={getInfo}
        />Completo
      </Field>

      <Button type="submit">Cotizar</Button>
    </form>
  )
}

Form.propTypes = {
  setSummary: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
}

export default Form
