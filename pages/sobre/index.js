import React from "react"
import Layout from '../../Components/Layout'
import Title from '../../Components/Title'
import { DiNodejs, DiReact } from 'react-icons/di'
import { useUser } from '@auth0/nextjs-auth0'

const Sobre = () => {
  const { user, error, isLoading } = useUser()
  if (user) return (
    <Layout>
      <Title>Sobre</Title>
      <span className='text-gray-400 text-sm'>v0.2</span>
      <div className='w-3/4 text-justify relative'>
        Este é um sistema desenvolvido por <a href='https://github.com/philippeberto' className='text-blueTheme-light' target="_blank">Philippe Berto </a>
        com o objetivo de criar um sistema completo para a gestão de uma academia de Jiu-Jitsu. Podes encontrar
        no GitHub os repositórios públicos <a href='https://github.com/philippeberto/MAmanager' className='text-blueTheme-light' target="_blank">Front-end</a> e
        <a href='https://github.com/philippeberto/MAmanager-API' className='text-blueTheme-light' target="_blank"> Back-end</a> deste projeto.
        <div lassName=''>
          <div className='inline-flex absolute left-1/3'>
            <DiNodejs className='text-9xl text-green-700' /><DiReact className='text-8xl text-blueTheme-xl' />
          </div>
        </div>
      </div>
    </Layout>
  )
  return (
    <div className='w-1/2 ml-1 md:ml-4 lg:ml-96 lg:mt-12'>
      <Title>Sobre</Title>
      <span className='text-gray-400 text-sm'>v0.2</span>
      <div className='w-3/4 text-justify relative'>
        Este é um sistema desenvolvido por <a href='https://github.com/philippeberto' className='text-blueTheme-light' target="_blank">Philippe Berto </a>
        com o objetivo de criar um sistema completo para a gestão de uma academia de Jiu-Jitsu. Podes encontrar
        no GitHub os repositórios públicos <a href='https://github.com/philippeberto/MAmanager' className='text-blueTheme-light' target="_blank">Front-end</a> e
        <a href='https://github.com/philippeberto/MAmanager-API' className='text-blueTheme-light' target="_blank"> Back-end</a> deste projeto.
        <div lassName=''>
          <div className='inline-flex absolute left-1/3'>
            <DiNodejs className='text-9xl text-green-700' /><DiReact className='text-8xl text-blueTheme-xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre