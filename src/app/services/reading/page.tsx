'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

function Reading() {
    const [pdf, setPdf] = useState()

    const handleSubmit = () => {
        console.log('Your file is :', pdf)
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