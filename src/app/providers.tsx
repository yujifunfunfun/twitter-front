'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { RecoilRoot } from 'recoil'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <RecoilRoot>
                {children}
            </RecoilRoot>
        </CacheProvider>
    )
}
