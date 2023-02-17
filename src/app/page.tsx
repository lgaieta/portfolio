export default function Home() {
    return (
        <main className='flex flex-col justify-center bg-slate-200 text-slate-900 items-center h-[100dvh] h-screen px-6'>
            <h1 className='text-left w-full text-7xl font-bold'>Luciano Aieta</h1>
            <p className='text-left w-full text-slate-600 text-xl mt-[2px] sm:ml-[8px]'>
                Frontend Developer
            </p>
            <a
                href='/#'
                className='p-4 w-full bg-slate-900 text-slate-200 rounded-xl text-center font-bold mt-6'
            >
                View projects
            </a>
            <a
                href='/#'
                className='p-4 w-full bg-slate-300 rounded-xl text-center font-bold mt-4'
            >
                Download resume
            </a>
        </main>
    );
}
