import { useState } from 'react'
import Success      from './Success'

const Contanct = () => {

  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'StaticForms - Contact Form',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    replyTo: '@', // this will set replyTo of email to email address entered in the form
    accessKey: 'e8c69430-f982-45a7-b8ec-cfb259097c70' // get your access key from https://www.staticforms.xyz
  })

  const [submit, setSubmit] = useState(false)

  const [response, setResponse] = useState({
    type: '',
    message: ''
  })

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      })

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.'
        })
        {setSubmit(true)}
        {console.log(submit)}
      } else {
        setResponse({
          type: 'error',
          message: json.message
        })
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form'
      })
    }
  }
  {return(!submit ?  (
    <div>
      <div className='section'>
        <div className='container'>
          <div className='form-contact columns'>
            <div className='column' />
            <div className='column  is-two-thirds'>
              <div
                className={
                  response.type === 'success'
                    ? 'tile box notification is-primary'
                    : 'is-hidden'
                }
              >
                <p>{response.message}</p>
              </div>
              <div
                className={
                  response.type === 'error'
                    ? 'tile box notification is-danger'
                    : 'is-hidden'
                }
              >
              </div>
              <div
                className={response.message !== '' ? 'is-hidden' : 'columns'}
              >
                <div className='column rounded-lg border-grey-700 border p-5 shadow-lg content'>
                  <h2 className="text-center">Get in Contact</h2>
                  <form
                    className="form-group"
                    action='https://api.staticforms.xyz/submit'
                    method='post'
                    onSubmit={handleSubmit}
                  >
                    <div className='field'>
                      <label className='label'>Your Name</label>
                      <div className='control'>
                        <input
                          className='input form-control form-control-md'
                          type='text'
                          placeholder='Name'
                          name='name'
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Your Email</label>
                      <div className='control'>
                        <input
                          className='input form-control form-control-md'
                          type='email'
                          placeholder='Email'
                          name='email'
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className='field' style={{ display: 'none' }}>
                      <label className='label'>Title</label>
                      <div className='control'>
                        <input
                          type='text'
                          name='honeypot'
                          style={{ display: 'none' }}
                          onChange={handleChange}
                        />
                        <input
                          type='hidden'
                          name='subject'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Message</label>
                      <div className='control'>
                        <textarea
                          className='textarea form-control form-control-md'
                          placeholder='Your Message'
                          name='message'
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className='field is-grouped'>
                      <div className='control'>
                        <br/>
                        <div className="text-center">
                          <button className=' btn btn-primary is-primary' type='submit'>
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='column' />
          </div>
        </div>
      </div>
      <style jsx global>{`
      .form-contact {
        max-width: 100%;
        // padding: 15px;
        margin: 0 auto;
      }
   `}</style>
    </div>     
  ) : <Success/> )}
}



export default Contanct