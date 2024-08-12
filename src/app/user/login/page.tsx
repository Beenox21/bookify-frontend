'use client'
import React from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Button from '@/components/button'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import Link from 'next/link'
import { useUser } from '@/AuthContext/authContext'

const formSchema = z.object({
  username: z.string().min(1, "Name field cannot be empty."),
  password: z.string().min(1, 'Required'),
})

function Login() {
  const { login } : any = useUser() 
  const router = useRouter()
  const {toast} = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    }
  })

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/user/login', data)
      toast({
        variant: 'success',
        title: 'Login successfull.',
        description: 'Redirecting to home page.'
      })
      console.log(response.data.user)
      login(response.data.user)
      setTimeout(() => {
        router.push('/home')
      }, 3000)
    } catch (error: any) {
      console.log(error?.response?.data?.message)
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error?.response?.data?.message || 'Login error. Please try again later.'
      })
    }
  }


  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center  bg-[url('https://images.unsplash.com/photo-1506056820413-f8fa4de15de6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ">
      <div className='flex overflow-hidden shadow-2xl rounded-lg h-[72vh] w-[60vw] z-10 '>
        <div className='w-1/2 h-full '>
          <img src='https://res.cloudinary.com/dgdybttbc/image/upload/v1723130624/bookify/Untitled_design_1_zyelqb.jpg' className=''></img>
        </div>


        <div className='w-1/2 bg-white'>

          <div className='flex justify-center items-center h-28'>
            <img src="https://res.cloudinary.com/dgdybttbc/image/upload/v1723060465/bookify/Screenshot_2024-08-08_011532_y4pe2e.png" alt="" className='h-7 w-auto' />
            <h1 className='text-2xl font-bold'>Bookify</h1>
          </div>

          <h1 className='text-center text-lg font-semibold text-slate-500 mb-5'>Welcome to bookify</h1>

          <div className='mx-10'>
            <Form {...form}>
              <form className='space-y-4' onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                  control={form.control}
                  name='username'
                  render={({ field }) => {
                    return <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} type='text' placeholder='enter username' />
                      </FormControl>
                    </FormItem>
                  }}
                />

                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => {
                    return <FormItem>
                      <FormLabel >Password</FormLabel>
                      <FormControl>
                        <Input {...field} type='text' placeholder='enter username' />
                      </FormControl>
                    </FormItem>
                  }}
                />
                
                <h1 className='text-slate-500 cursor-pointer hover:text-blue-500 text-right text-sm mt-1'>Forgot password?</h1>
                <Button name='Log in' bgColor='bg-blue-500' textColor='text-white' otherStyles='text-center w-full py-2 mt-10' hover='hover:bg-blue-400'></Button>

              </form>
            </Form>
                <h1 className='text-slate-500 cursor-pointer hover:text-blue-500 text-center text-sm mt-1'>New to bookify?</h1>
                <Link href='/user/signup'>
                  <Button name='Sign Up' bgColor='bg-slate-200' textColor='text-black' otherStyles='text-center py-2 mt-4 w-full' hover='hover:bg-slate-300'></Button>
                </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login