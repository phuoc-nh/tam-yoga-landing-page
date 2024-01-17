import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-[#e5e4ea] p-5' >
        <div className='flex flex-col sm:flex-row'>
          <div className='basis-1/3 items-center justify-center flex'>
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse mr-5">
              <img src="/static/tam-logo.png" className="h-16" alt="Tam Yoga Logo" />
            </Link>
          </div>

          <div className='basis-2/3'>
            <div className='font-bold'>Contact us</div>
            <div className='flex'>
              <div className='font-bold'>
                Cơ sở 1: &nbsp;
              </div>
              <a className='underline' href="https://www.google.com/maps/place/T%C3%A2m+Yoga/@11.123166,106.3257231,15z/data=!4m2!3m1!1s0x0:0x96b3ca41ca3a3ec4?sa=X&ved=2ahUKEwjA3L2FjeSDAxWKgVYBHS0gBRIQ_BJ6BAg7EAA" target='_blank'>Khách sạn Khánh Gia</a>
            </div>
            <div className='flex'>
              <div className='font-bold '>
                Cơ sở 2: &nbsp;
              </div>
                <a className='underline' href="https://www.google.com/maps/place/T%C3%A2m+Yoga+%26+Dance+c%C6%A1+s%E1%BB%9F+2/@11.153417,106.308094,15z/data=!4m2!3m1!1s0x0:0xc572dec0509f718a?sa=X&ved=2ahUKEwiSq_nujOSDAxVfrlYBHUaODpQQ_BJ6BAg7EAA" target='_blank'>501 ĐT782, Bầu Đồn, Gò Dầu, Tây Ninh, Vietnam</a>
              </div>
            <div className='flex'>
              <div className='font-bold'>SĐT:&nbsp;</div> 0973446184
            </div>
          </div>
        </div>
    </footer>
  )
}
