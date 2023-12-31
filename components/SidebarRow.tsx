import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'
import { JsxElement } from 'typescript'


interface Props {
    Icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {
         title?: string | undefined; 
         titleId?: string | undefined; 
        } & RefAttributes<SVGSVGElement>>; 
    title: string;
    // Icon: (props:SVGProps<SVGSVGElement>) =>JSX.Element
    // title: string
}

function SidebarRow({Icon, title}:Props) {
  return (
    <div className='flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full transition-all duration-200 hover:bg-gray-100 cursor-pointer group'>
        <Icon className='h-6 w-6'/>
        <p className='group-hover:text-twitter hidden md:inline-flex text-base font-light lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow