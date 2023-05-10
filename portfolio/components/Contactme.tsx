import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  message: string
  subject: string
}

type Props = {}

const myEmail = 'chalice.chu@gmail.com'

const Contactme = (props: Props) => {
  const {register, handleSubmit} = useForm<Inputs>()
  const svgClassName = 'w-5 h-5 md:w-7 md:h-7 text-primary animate-pulse'
  const pClassName = 'text-lg md:text-2xl'

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${myEmail}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  }

  return (
    <div className='component-basic'>
      <h3 className='basic'>
        contact me
      </h3>

      <div className='text-primary h-[80%] flex flex-col gap-10 w-full z-10'>
        <h4 className='text-2xl md:text-4xl font-semibold text-center'>
          I have got just what you need. 
          <span className='decoration-primary/50 underline'>Let's Talk.</span>
        </h4>

        <div>
          {/* phone */}
          <div className='flex items-center space-x-5 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={svgClassName}>
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>

            <p className={pClassName}>(+1) 207-286-7026</p>
          </div> 

          {/* location */}
          <div className='flex items-center space-x-5 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={svgClassName}>
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>

            <p className={pClassName}>Madison, Wisconsin, US</p>
          </div> 

          {/* email */}
          <div className='flex items-center space-x-5 justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={svgClassName}>
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>

            <p className={pClassName}>chalice.chu@gmail.com</p>
          </div> 

        </div>
      
        <form
          className='flex flex-col gap-2 max-w-full mx-auto'
          onSubmit={handleSubmit(onSubmit)}>

          <div className='flex items-center justify-center gap-2 max-w-full'>
            <input {...register('name')} type="text" placeholder='Name' className='contactInput max-w-[50%]'/>
            <input {...register('email')} type="email" placeholder='Email' className='contactInput max-w-[50%]'/>
          </div>

          <input {...register('subject')} type="text" placeholder='Subject' className='contactInput' />

          <textarea {...register('message')} placeholder='Message' className='contactInput' />
          <button
            type='submit'
            className='bg-primary py-5 px-10 rounded-md text-black font-bold text-lg'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contactme