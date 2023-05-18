import myCV from 'assets/my-cv.pdf'
import man from 'assets/img/about/man.jpg'
const About = () => {
  return (
    <div className='arlo_tm_section relative' id='about'>
      <div className='arlo_tm_about_wrapper_all'>
        <div className='container'>
          <div className='arlo_tm_title_holder'>
            <h3>About Me</h3>
            <span>Main informations about me</span>
          </div>
          <div className='arlo_tm_about_wrap'>
            <div className='author_wrap'>
              <div className='leftbox'>
                <div
                  className='about_image_wrap parallax'
                  data-relative-input='true'
                >
                  <div className='image layer' data-depth='0.1'>
                    <img src='img/about/550x640.jpg' alt='550x640' />
                    <div className='inner' data-img-url={man}></div>
                  </div>
                  <div className='border layer' data-depth='0.2'>
                    <img src='img/about/550x640.jpg' alt='550x640' />
                    <div className='inner'></div>
                  </div>
                </div>
              </div>
              <div className='rightbox'>
                <div className='arlo_tm_mini_title_holder'>
                  <h4>
                    Tôi tên là Võ Văn Quốc Anh{' '}
                    <span className='arlo_tm_animation_text_word'></span>
                  </h4>
                </div>
                <div className='definition'>
                  <p>
                    Xin Chào! Tôi tên là <strong>Võ Văn Quốc Anh</strong>. Hiện
                    tại tôi đang học để trở thành một Web Developer. Tôi đã có kỹ năng
                    và kiến thức cần thiết để làm một số dự án về Reactjs. Tôi
                    thích thiết kế các sản phẩm wed. Và mong muốn có một trường
                    để được cái thiện bản thân và tôi đã tìm thấy quý công ty hi
                    vòng chúng ta có thế hợp tác để mang lại thật nhiều lợi ích
                    cho công ty.
                  </p>
                </div>
                <div className='about_short_contact_wrap'>
                  <ul>
                    <li>
                      <span>
                        <label>Birthday:</label> 23.06.1993
                      </span>
                    </li>

                    <li>
                      <span>
                        <label>City:</label> Thừa Thiên Huế
                      </span>
                    </li>

                    <li>
                      <span>
                        <label>Study:</label> Nong Lam University
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>My Github:</label>{' '}
                        <a href='#'>www.github.com/Anhqvv</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Mail:</label>{' '}
                        <a href='mailto:example@gmail.com'>
                          anhqvv2022&#64;gmail.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='buttons_wrap'>
                  <ul>
                    <li>
                      <a href={myCV} download>
                        <span>Download CV</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
