import router from 'next/router'
import {
    FaGithub,
    FaLinkedinIn,
    FaTwitch,
    FaTwitter,
    FaBook,
} from 'react-icons/fa'

export const SocialCard: React.FC = ({}) => {
    return (
        <>
            <div className="bg-background w-1/3 mb-[90px] justify-center gap-3 flex text-white m-auto mt-[80px]">
                <a
                    className="hover:cursor-pointer hover:text-gray"
                    href={'https://www.twitch.tv/anddreluis2'}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="redirect to twitch"
                >
                    <FaTwitch size={28} />
                </a>

                <a
                    className="hover:cursor-pointer hover:text-gray"
                    href={'https://github.com/anddreluis2'}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="redirect to github"
                >
                    <FaGithub size={28} />
                </a>

                <a
                    className="hover:cursor-pointer hover:text-gray"
                    href={
                        'https://www.linkedin.com/in/andreluisdeoliveiraandrade/'
                    }
                    target="_blank"
                    rel="noreferrer"
                    aria-label="redirect to linkedin"
                >
                    <FaLinkedinIn size={28} />
                </a>

                <a
                    className="hover:cursor-pointer hover:text-gray"
                    href={'https://twitter.com/anddreluis_'}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="redirect to twitter"
                >
                    <FaTwitter size={28} />
                </a>

                <a
                    className="hover:cursor-pointer hover:text-gray"
                    href="https://medium.com/@anddreluis"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="redirect to twitter"
                >
                    <FaBook size={28} />
                </a>
            </div>
        </>
    )
}

export default SocialCard
