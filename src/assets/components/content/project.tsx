import { Button, Modal } from 'antd'
import { useState } from 'react'
import { IoLogoReact } from 'react-icons/io5'
import { BsArrowRight } from 'react-icons/bs'
import { FaNodeJs } from 'react-icons/fa'
import './project.scss'

interface IProject {
  image: JSX.Element
  title: string
  shortDescription: string
  detail: {
    description: string
    frontEnd: string
    backEnd: string
    member: number
    role: string
    demo: string
    github: string
  }
}
const dataProject: IProject[] = [
  {
    image: <IoLogoReact size={50} color='#2bebfd' />,
    title: 'ReactJS',
    shortDescription: 'Web design is a similar process of creation',
    detail: {
      description: 'Something more reactjs ',
      frontEnd: 'ReactJS',
      backEnd: 'MySQL',
      member: 1,
      role: 'dev',
      demo: '',
      github: ''
    }
  },
  {
    image: <FaNodeJs size={50} color='#2bebfd' />,
    title: 'Nodejs/ExpressJs',
    shortDescription: 'Webside is designed by ExpressJs',
    detail: {
      description: 'Something more reactjs',
      frontEnd: 'ReactJS',
      backEnd: 'ExpressJS',
      member: 1,
      role: 'dev',
      demo: '',
      github: ''
    }
  },
  {
    image: <IoLogoReact size={50} color='#2bebfd' />,
    title: 'Typescript',
    shortDescription: 'Wedside use Typescript and you have good performence',
    detail: {
      description: 'Something more reactjs',
      frontEnd: 'ReactJS + Typescript',
      backEnd: 'MySQL, MogoDB',
      member: 1,
      role: 'dev',
      demo: '',
      github: 'https://github.com/Anhqvv/react-typescipt-cv/commits/prod'
    }
  }
]

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dataModal, setDataModal] = useState<IProject | null>(null)


  const handleCloseModal = () => {
    setIsModalOpen(false)
    setDataModal(null)
  }

  return (
    <div className='arlo_tm_section' id='projects' style={{paddingTop:50}}>
      <Modal
        title={dataModal && dataModal.title ? `Prpject-${dataModal.title}` : ''}
        open={isModalOpen}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        footer={null}
        maskClosable={true}
      >
        {dataModal && (
          <ul>
                      <li>Description: {dataModal.detail.description }</li>
                      <li>Front-end: {dataModal.detail.frontEnd }</li>
                      <li>Back-end: {dataModal.detail.backEnd }</li>
                      <li>{dataModal.detail.member }</li>
                      <li>{dataModal.detail.role }</li>
                      <li>{dataModal.detail.demo }</li>
                      <li>{dataModal.detail.github }</li>

          </ul>
        )}
      </Modal>
      <div className='arlo_tm_services_wrap'>
        <div className='container'>
          <div className='arlo_tm_title_holder'>
            <h3>Projects</h3>
            <span>My project</span>
          </div>
          <div className='list_wrap'>
            <ul>
              {dataProject.map((item, index) => {
                return (
                  <li key={index}>
                    <div className='inner'>
                      <div className='icon'>{item.image}</div>
                      <div className='title_service'>
                        <h3>{item.title}</h3>
                      </div>
                      <div className='text'>
                        <p>{item.shortDescription}</p>
                      </div>
                      <div className='view-detail'>
                        <BsArrowRight />
                        &nbsp;
                        <span
                          onClick={() => {
                            setDataModal(item)
                            setIsModalOpen(true)
                          }}
                        >
                          Xem chi tiết
                        </span>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
