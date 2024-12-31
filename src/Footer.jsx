export function Footer(){
    const cont={
        background:"linear-gradient(#e7eaf6,#d59bf6,#a2a8d3)"
    }
    return(<section className="flex justify-evenly items-center w-full h-[100px] fixed top-[570px]" style={cont}>
        <h1 className='font-serif text-purple-900 text-[8px] sm:text-xl'> Stay organized. One task at a time.</h1>
        <h2 className='font-serif text-purple-900 text-[8px] sm:text-xl'>
        <a href="mailto:mohammedhussain2727@gmail.com">mohammedhussain2727@gmail.com</a>
        </h2>
    </section>)
}