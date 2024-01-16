import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <section className="mt-5 flex flex-col-reverse md:flex-row h-auto max-w-full p-5 sm:px-[10vh] lg:px-[25vh] mb-24 sm:mb-48">
          <div className="font-bold mt-5 basis-1/2 flex justify-center align-middle items-center text-center md:text-left lg:text-4xl md:text-3xl sm:text-2xl">
            Basic Yoga and Meditation <br /> for Beginners
          </div>
          <div className='basis-1/2 flex justify-center' >
            <Image
              src="/static/Group.png"
              alt="group"
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: '70%', height: 'auto' }}
            />
          </div>
          
      </section>
        
      <section className="flex flex-col md:flex-row h-auto max-w-full p-5 lg:px-[25vh]">
        <div className='basis-1/2 flex justify-center mb-28' style={{
          backgroundImage:`url(/static/Group20bg.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom'
        }}>
          <Image
            src="/static/group20.png"
            alt="group"
            width={0}
            height={0}
            sizes="70vw"
            style={{ width: '70%', height: 'auto' }}
          />
        </div>
        
        <div className='basis-1/2 flex flex-col items-center'>
          <div className='mt-5  p-2 sm:p-10 max-w-[350px]' style={{
            backgroundImage:`url(/static/Group3.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top right'
          }}>
            <div className="bg-[#EFEAFF] p-8 rounded-tl-[99px] rounded-br-[99px]">
              <div className='font-bold text-xl'>
                <h1>Healthiest Change in <br /> Your Life by Yoga</h1>
              </div>
              <p >Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it
                  to make a type specimen book.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row h-auto max-w-full p-5 lg:px-[25vh]">
        <div className='basis-1/2 flex  flex-col justify-center items-center'>
          <div className='mt-5  p-2 sm:p-10 max-w-[350px]' style={{
            backgroundImage:`url(/static/Group3.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top right'
          }}>
            <div className="bg-[#EFEAFF] p-8 rounded-tl-[99px] rounded-br-[99px]">
              <div className='font-bold text-xl'>
                <h1>Healthiest Change in <br /> Your Life by Yoga</h1>
              </div>
              <p>Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it
                  to make a type specimen book.</p>
            </div>
          </div>
        </div>

        <div className='basis-1/2 flex justify-center mb-28' style={{
          backgroundImage:`url(/static/Group20bg.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom'
        }}>
          <Image
            src="/static/Group5.png"
            alt="group"
            width={0}
            height={0}
            sizes="70vw"
            style={{ width: '70%', height: 'auto' }}
          />
        </div>
      </section>

      <section className='mt-10'>
        <div className='text-3xl text-center'>Discover Your Inner Peace with Yoga!</div>
        <div className="flex flex-col 2xl:flex-row h-auto max-w-full  lg:px-[25vh] items-center">
          <div className='basis-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 content-center'>
            <div className='mt-5  p-2 sm:p-10 max-w-[350px]'>
              <div className="bg-[#EFEAFF] p-8 rounded-tl-[99px] rounded-br-[99px]">
                <div className='font-bold text-xl'>
                  <h1>Healthiest Change in <br /> Your Life by Yoga</h1>
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it
                    to make a type specimen book.</p>
              </div>
            </div>
            <div className='mt-5  p-2 sm:p-10 max-w-[350px]'>
              <div className="bg-[#EFEAFF] p-8 rounded-tl-[99px] rounded-br-[99px]">
                <div className='font-bold text-xl'>
                  <h1>Healthiest Change in <br /> Your Life by Yoga</h1>
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it
                    to make a type specimen book.</p>
              </div>
            </div>
            <div className='mt-5  p-2 sm:p-10 max-w-[350px]'>
              <div className="bg-[#EFEAFF] p-8 rounded-tl-[99px] rounded-br-[99px]">
                <div className='font-bold text-xl'>
                  <h1>Healthiest Change in <br /> Your Life by Yoga</h1>
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it
                    to make a type specimen book.</p>
              </div>
            </div>
            <div className='mt-5  p-2 sm:p-10 max-w-[350px]'>
              <div className="bg-[#EFEAFF] p-8 rounded-tl-[99px] rounded-br-[99px]">
                <div className='font-bold text-xl'>
                  <h1>Healthiest Change in <br /> Your Life by Yoga</h1>
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it
                    to make a type specimen book.</p>
              </div>
            </div>
          </div>

          <div className='basis-1/2 flex justify-center mb-28 '>
            <Image
              src="/static/Group 11.png"
              alt="group"
              width={0}
              height={0}
              className='min-w-[380px]'
              sizes="70vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
