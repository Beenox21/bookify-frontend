'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import axios from 'axios'

function Reading() {
    const [pdf, setPdf] = useState()

    const handleSubmit = async() => {
        try {
            console.log('Your file is :', pdf)
            const res = await axios.post('http://localhost:5000/api/v1/text/createText')
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='px-20 space-y-5 mt-10'>
            <h1>Add pdf</h1>
            <Input type='file' onChange={(e: any) => setPdf(e?.target?.files[0])}></Input>
            <Button onClick={handleSubmit}>Submit</Button>
            <div>
            </div>
        </div>
    )
}

export default Reading