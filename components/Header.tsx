import Link from 'next/link'
import { DiGit } from 'react-icons/di'

export const Header: React.FC = () => (
    <div className="bg-header sticky top-0 z-50 flex p-6">
        <button name="redirect to top" className="w-12 flex">
            <Link className="text-white hover:text-gray" href="">
                <DiGit aria-label="return to top" size={40} />
            </Link>
        </button>
    </div>
)

export default Header
