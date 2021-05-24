const Card = () => {
  return (
    <div className="cardAluno">
      <div className='cardTittle'>{aluno.aluno}</div>
      <Link href={`/alunos/${aluno.id}/updateAluno`}>
        <a className='editIcon'>
          <Image
            src="/img/icon-edit.png"
            width='20'
            height='20'
            alt="edit icon"
          />
        </a>
      </Link><br />
                  ({aluno.id})
      <br />
      <div className='cardDescription'>
        Idade: {dayjs().diff(dayjs(aluno.birthDate), 'year')} anos
                    <br />
                    Vencimento: dia {aluno.dueDate}
        <br />
                    Faixa: {aluno.degree}
        <br />
      </div>
    </div>
  )
}

export default Card