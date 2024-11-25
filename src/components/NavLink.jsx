import Link from 'next/link'
const NavLink = ({href, title}) => {
    return (
        <Link href={href} 
            className='py-2 pr-4 pl-4 text-cyan-900 rounded-full border border-transparent hover:border-cyan-800 flex items-center justify-center' >
            {title} 
        </Link>  
    )     
}
 export default NavLink