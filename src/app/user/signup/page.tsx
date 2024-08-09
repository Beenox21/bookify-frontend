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



const formSchema = z.object({
  username: z.string().min(1, "Username field cannot be empty."),
  password: z.string().min(1, 'Password field cannot be empty.'),
  confirmPassword: z.string().min(1, 'Password field cannot be empty.'),
  email: z.string().email('Invalid email address')
})

function SignUp() {
  const { toast } = useToast()
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      email: ''
    }
  })

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      if (data.password != data.confirmPassword) {
        toast({
          variant: 'destructive',
          title: 'Passwords do not match',
          description: 'Password and confirm password must be same.'
        })
        return
      }
      const response = await axios.post('http://localhost:5000/api/v1/user/createUser', data)
      toast({
        variant: 'success',
        title: 'Account created successfully.',
        description: 'Redirecting to home page.'
      })
      console.log(response.data)
      setTimeout(() => {
        router.push('/home')
      }, 3000)
    } catch (error: any) {
      console.log(error?.response?.data?.message)
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.response.data.message
      })
    }
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center  bg-[url('https://images.unsplash.com/photo-1518578551060-1300f2c8085d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-top">
      <div className='flex overflow-hidden shadow-2xl rounded-lg h-[92vh] w-[60vw] z-10 '>
        <div className='w-1/2 h-full '>
          <img src='https://images.pexels.com/photos/5965925/pexels-photo-5965925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='h-full w-full object-cover'></img>
        </div>


        <div className='w-1/2  bg-white'>

          <div className='flex justify-center items-center h-20 space-x-1'>
            <img src="https://res.cloudinary.com/dgdybttbc/image/upload/v1723060465/bookify/Screenshot_2024-08-08_011532_y4pe2e.png" alt="" className='h-7 w-auto' />
            <h1 className='text-2xl font-bold'>Bookify</h1>
          </div>

          <h1 className='text-center text-lg font-semibold  mb-5'>Create your account</h1>

          <div className='mx-10'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4'>
                <FormField
                  control={form.control}
                  name='username'
                  render={({ field }) => {
                    return <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} type='text' placeholder='' />
                      </FormControl>

                    </FormItem>
                  }}
                />

                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => {
                    return <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type='text' placeholder='' />
                      </FormControl>
                      <FormMessage></FormMessage>
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
                        <Input {...field} type='text' placeholder='' />
                      </FormControl>

                    </FormItem>
                  }}
                />

                <FormField
                  control={form.control}
                  name='confirmPassword'
                  render={({ field }) => {
                    return <FormItem>
                      <FormLabel >Confirm Password</FormLabel>
                      <FormControl>
                        <Input {...field} type='text' placeholder='' />
                      </FormControl>

                    </FormItem>
                  }}
                />

                <Button name='Sign Up' bgColor='bg-slate-200' textColor='text-black' otherStyles='text-center py-2 mt-10 w-full' hover='hover:bg-slate-300'></Button>


              </form>
            </Form>
            <div>

            <h1 className='text-slate-500 cursor-pointer hover:text-blue-500 text-center text-sm mt-10'>Already a member?</h1>
            <Link href='/user/login'>
              <Button name='Log in' bgColor='bg-blue-500' textColor='text-white' otherStyles='text-center py-2 mt-3 w-full' hover='hover:bg-blue-400'></Button>
            </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp