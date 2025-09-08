import instance from './axiosInstance.ts'
import type {AxiosResponse} from "axios";
import {notifyError} from '../util/noticePopup.ts'

interface Data<T> {
    code: number,
    data: T
    message: string
}

async function calling<T>(promise: Promise<AxiosResponse<T>>): Promise<T | null> {
    try {
        const res = await promise
        return res.data
    } catch (err) {
        notifyError(err as string)
        return null
    }
}

export function check() {
    return calling<Data<{
        status: string
    }>>(
        instance.post('/api/status', {
            key: 'check',
            exp: '20250907'
        })
    )
}


