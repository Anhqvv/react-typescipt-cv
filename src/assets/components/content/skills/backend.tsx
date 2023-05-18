import ProgressBar from '@ramonak/react-progress-bar'
const BackEnd = () => {
  return (
    <div className='arlo_tm_skills_wrap'>
      <div className='container'>
        <div className='inner_wrap'>
          <div className='leftbox'>
            <div className='arlo_tm_mini_title_holder'>
              <h4>Back-end</h4>
            </div>
                      <ul>
                          <li>NodeJs/ExpressJs</li>
                          <li>Library/Framework: NestJs</li>
                          <li>Database: MySQL</li>
        </ul>

           
          </div>
          <div className='rightbox'>
            <div className='progress_bar_wrap_total'>
              <div
                className='arlo_tm_progress_wrap'
                data-size='small'
                data-round='c'
                data-strip='off'
              >
                <div
                  className='arlo_tm_progress'
                  data-value='95'
                  data-color='#000'
                >
                  <span>
                    <span className='label'>NodeJs</span>
                  </span>
                  <ProgressBar
                    completed={60}
                    bgColor='#333'
                    height='10px'
                    isLabelVisible={false}
                  />
                </div>
                <div
                  className='arlo_tm_progress'
                  data-value='85'
                  data-color='#000'
                >
                  <span>
                    <span className='label'>NestJs</span>
                    <span className='number'>85%</span>
                  </span>
                  <ProgressBar
                    completed={60}
                    bgColor='#333'
                    height='10px'
                    isLabelVisible={false}
                  />
                </div>
                <div
                  className='arlo_tm_progress'
                  data-value='75'
                  data-color='#000'
                ></div>
                <div
                  className='arlo_tm_progress'
                  data-value='90'
                  data-color='#000'
                >
                  <span>
                    <span className='label'>MySQL </span>
                    <span className='number'>90%</span>
                  </span>
                  <ProgressBar
                    completed={60}
                    bgColor='#333'
                    height='10px'
                    isLabelVisible={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackEnd
