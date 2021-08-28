import { useState } from 'react';
import registerService from 'services/register';
import { useForm, ErrorMessage } from 'react-hook-form';


export default function RegisterService() {
    const { handleSubmit, register, errors } = useForm()
    const [registered, setRegistered] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = values => {
        setIsSubmitting(true)
        registerService(values)
            .then(() => {
                setRegistered(true)
                setIsSubmitting(false)
            })
    }


    if (registered) {
        return <h4>
            Congratulations ✅! You've been successfully registerServiceed!
        </h4>
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                className={errors.username ?
                    'error' : ''}
                name="username"
                placeholder="Put here the username"
                ref={register({ required: 'This is required' })}
            />
            <ErrorMessage errors={errors}
            name='username' as="small" />
            <input
                className={errors.password ?
                    'error' : ''}
                name="password"
                placeholder="Put here the password"
                type='password'
                ref={register({ required: 'This is required' })}
            />
           <ErrorMessage errors={errors}
            name='password' as="small"/>
            <button className='btn' disabled={isSubmitting}>
                Registrarse
            </button>
        </form>
    </>
}