import { BadgeCheck, FileText, } from 'lucide-react';
import NavLink from "./nav-link";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import PlanBadge from './plan-badge';
import Image from 'next/image';

export default function Header() {

    return (
        <nav className="container flex items-center justify-between
        py-4 lg: px - 8 px - 2 mx - auto">
            < div className="flex lg:flex-1" >
                <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
                    <Image src={"/SumaristaAI-logo.webp"} alt="SumaristaAI Logo" width={40} height={40} className='shadow-lg rounded-lg' />
                    {/* <div className='relative'>
                        <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 
                transition-transform duration-300 ease-in-out" />
                    </div>
                    <span className="font-extrabold lg:text-xl text-gray-900">Sumaristaai</span> */}
                </NavLink>
            </div >
            <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
                <NavLink href="/#pricing">Preços</NavLink>
                <SignedIn>
                    <NavLink href="/dashboard">Seus sumários</NavLink>
                </SignedIn>
            </div>
            <div className="flex lg:flex-1 lg:justify-end">
                <SignedIn>
                    <div className="flex gap-2 items-center">
                        <NavLink href="/upload">Enviar PDF</NavLink>
                        <PlanBadge />
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </SignedIn>

                <SignedOut>
                    <NavLink href="/sign-in">Entrar</NavLink>
                </SignedOut>
            </div>
        </nav >
    );
}