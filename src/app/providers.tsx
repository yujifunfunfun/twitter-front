'use client'

import { customAxios } from '@/lib/customAxios'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import { SWRConfig } from 'swr'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <RecoilRoot>
                <ChakraProvider>
                    <SWRConfig
                    value={{
                    refreshInterval: 300000,
                    fetcher: (url: string) => customAxios.get(url).then(res => res.data)
                    }}
                    >
                        {children}
                    </SWRConfig>
                </ChakraProvider>
            </RecoilRoot>
        </CacheProvider>
    )
}
