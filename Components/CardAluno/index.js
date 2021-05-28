import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegUser } from 'react-icons/fa'
import { MdDelete, MdEdit } from 'react-icons/md'

const CardAluno = ({
  user,
  id,
  name,
  birthDate,
  belt,
  degree,
  remove,
  url = null
}) => {
  let degrees = []
  let space = 0
  for (let i = 0; i <= degree; i++) {
    if (i > 0)
      degrees.push(`absolute inset-y-24 left bg-white w-2 h-1 mt-${12 - space}`)
    space += 2
  }
  console.log(degrees)
  return (
    <div className='inline-block w-80 mr-2' >
      <div className='relative flex content-start w-full h-40 bg-white rounded-r shadow-lg my-4' key={id}>
        {url && <div className='relative inline-block w-16 ml-8 mt-4 h-20 rounded-md border-red-900'>
          <Image
            src={url}
            alt='Imagem do aluno.'
            width={64}
            height={82}
            className='absolute object-cover rounded-md'
          />
        </div>}
        {!url &&
          <div className=' relative inline-block w-14 h-16 ml-8 mt-6 rounded-md border-gray-900 border-4 opacity-50'>
            <FaRegUser className='inline-block w-12 h-12 mt-1 float-center text-gray-900' />
          </div>}
        <div className='w-full inline-block ml-8 mt-4'>
          <p className='inline-block font-bold'>
            <span>{name.split(' ')[0]} </span>
            {name.split(' ').length > 1 &&
              <span>{name.split(' ')[name.split(' ').length - 1]}</span>
            }
          </p>
          <Link href={``}>
            <a className='inline-block float-right text-red-500 mr-4' onClick={remove(user, id)}>
              <MdDelete />
            </a>
          </Link>
          <Link href={`/alunos/${id}/updateAluno`}>
            <a className='inline-block float-right text-blue-500 mr-2'>
              <MdEdit />
            </a>
          </Link>

          <div className='text-sm'>
            <div>
              <span className='text-gray-600'>Meses </span>
              <span className=''>92</span>
            </div>
            <div>
              <span className='text-gray-600'>Idade </span>
              <span>{dayjs().diff(dayjs(birthDate), 'year')}</span>
            </div>
            <div>
              <span className='text-gray-600'>Status </span>
              <span className='text-green-600 font-bold'>Ativo </span>
            </div>
          </div>
        </div>
        {belt === 0 &&
          <>
            <div className='absolute inset-y-0 left border-black border w-2 h-full'></div>
            <div className='absolute inset-y-24 left bg-black w-2 h-12'></div>
            {degrees.map(degree => {
              return (<div className={degree}></div>)
            })
            }
          </>
        }
        {belt === 1 &&
          <>
            <div className='absolute inset-y-0 left bg-blue-500 w-2 h-full'></div>
            <div className='absolute inset-y-24 left bg-black w-2 h-12'></div>
            {degrees.map(degree => {
              return (<div className={degree}></div>)
            })
            }
          </>
        }
        {belt === 2 &&
          <>
            <div className='absolute inset-y-0 left bg-purple w-2 h-full'></div>
            <div className='absolute inset-y-24 left bg-black w-2 h-12'></div>
            {degrees && degrees.forEach(degree => {
              <div className={degree}></div>
            })
            }
          </>
        }
        {belt === 3 &&
          <>
            <div className='absolute inset-y-0 left bg-brown w-2 h-full'></div>
            <div className='absolute inset-y-24 left bg-black w-2 h-12'></div>
            {degrees.map(degree => {
              return (<div className={degree}></div>)
            })
            }
          </>
        }
        {belt === 4 &&
          <>
            <div className='absolute inset-y-0 left bg-black w-2 h-full'></div>
            <div className='absolute inset-y-24 left bg-red-500  w-2 h-12'></div>
            {degrees.map(degree => {
              return (<div className={degree}></div>)
            })
            }
          </>
        }
      </div>
    </div >
  )
}

export default CardAluno