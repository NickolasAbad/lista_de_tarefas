import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  MainContainer,
  Titulo,
  Campo,
  BotaoSalvar,
  Botao
} from '../../styles/index'
import { Form, Opcoes, Opcao } from './styles'

import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo style={{ textAlign: 'center' }}>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa} onReset={() => navigate('/')}>
        <Campo
          type="text"
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          placeholder="Titulo"
          required
        />
        <Campo
          as="textarea"
          placeholder="Descricao da tarefa"
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          required
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <>
              <Opcao key={prioridade}>
                <input
                  value={prioridade}
                  type="radio"
                  name="prioridade"
                  id={prioridade}
                  defaultChecked={prioridade === enums.Prioridade.NORMAL}
                  onChange={({ target }) =>
                    setPrioridade(target.value as enums.Prioridade)
                  }
                  required
                />{' '}
                <label htmlFor={prioridade}>{prioridade}</label>
              </Opcao>
            </>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        <Botao type="reset">Voltar</Botao>
      </Form>
    </MainContainer>
  )
}

export default Formulario
