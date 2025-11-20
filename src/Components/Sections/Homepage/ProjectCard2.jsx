import { useState, useRef, useEffect } from 'react'
import nextjs from '../../../assets/images/skills/nextjs.png'
import python from '../../../assets/images/skills/python.png'
import aipowered from '../../../assets/images/skills/chatgpt.png'
import { FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import PropTypes from 'prop-types'


const ProjectCard2 = ({
    iconPack = [
        {
            image: nextjs,
            alt: 'NextJS',
            url: 'nextjs.org'
        },
        {
            image: python,
            alt: 'Python',
            url: 'python.org'
        },
        {
            image: aipowered,
            alt: 'ChatGPT',
            url: 'chat.openai.com'
        }
    ],
    projectTitle = "Awesome Project",
    descritpion = "This is a brief description of the awesome project that showcases its features and technologies used. It is designed to be engaging and informative, providing users with a clear understanding of what the project entails and its benefits.",
    liveURL = 'https://firststepschoo.xyz',
    imageURL = 'https://www.prioritymanagement.com.au/wp-content/uploads/2023/04/what-is-it-project-manager.jpg',
    idx = 0

}) => {
    const gradients = [
        'bg-gradient-to-r from-[#fa7000] to-[#fab972]', // orange
        'bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]', // bluish-cyan
        'bg-gradient-to-r from-[#ec4899] to-[#ef4444]', // pink-reddish
        'bg-gradient-to-r from-[#f472b6] to-[#60a5fa]' // pinkish-bluish
    ]
    const selectedGradient = gradients[idx % gradients.length]
    const [expanded, setExpanded] = useState(false)
    const contentRef = useRef(null)
    const [maxHeight, setMaxHeight] = useState('0px')
    const [collapsedPx, setCollapsedPx] = useState(null)
    // show toggle for shorter descriptions now (threshold lowered)
    const needsToggle = descritpion && descritpion.length > 100

    // compute collapsed height (3.2rem) in px and set initial maxHeight
    useEffect(() => {
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
        const collapsed = rootFontSize * 3.2 // 3.2rem
        setCollapsedPx(collapsed)
        setMaxHeight(`${collapsed}px`)
    }, [descritpion])

    const handleExpand = () => {
        if (!contentRef.current) return
        const scroll = contentRef.current.scrollHeight
        // set to exact scrollHeight for snappy animation
        setMaxHeight(`${scroll}px`)
        setExpanded(true)
    }

    const handleCollapse = () => {
        setMaxHeight(collapsedPx ? `${collapsedPx}px` : '64px')
        setExpanded(false)
    }

    return (
        <div className='w-[25rem] p-2 rounded-lg group'>
            <div className={`w-full relative aspect-video overflow-hidden rounded-md shadow-lg mb-4 ${selectedGradient}`}>
                <div className='w-full -rotate-[15deg] border-white shadow-lg border-2 rounded-lg overflow-hidden absolute left-[25%] top-[25%] transition-all group-hover:left-0 group-hover:top-0 group-hover:rotate-0 group-hover:border-none duration-300'>
                    <img className='w-full h-full' src={imageURL} alt="project image" />
                </div>
            </div>

            <h3 className='text-2xl mb-2'>{projectTitle}</h3>

            {/* Description + fade overlay + transition */}
            <div className='relative w-full'>
                <div
                    ref={contentRef}
                    className='overflow-hidden transition-[max-height] duration-200 ease-out relative pr-7'
                    style={{ maxHeight }}
                    aria-expanded={expanded}
                >
                    <p className='text-sm text-gray-700 dark:text-gray-200 m-0 leading-snug'>
                        {descritpion}
                    </p>

                    {/* fade overlay when collapsed */}
                    {!expanded && needsToggle && (
                        <div className='pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/90 via-white/60 to-transparent dark:from-black/70 dark:via-black/40' />
                    )}
                </div>

                {needsToggle && (
                    <>
                        {/* Collapsed: absolute mini button at bottom-right of description */}
                        {!expanded && (
                            <div className='w-full flex justify-end mt-3'>
                                <button
                                    onClick={handleExpand}
                                    className='bg-gray-50 text-xs dark:bg-gray-800 text-gray-700 rounded-md px-3 py-1 inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 shadow-sm'
                                    aria-label='Show more'
                                >
                                    <FiChevronDown size={14} />
                                    Show more
                                </button>
                            </div>
                        )}

                        {/* Expanded: Show less aligned to the right below the description */}
                        {expanded && (
                            <div className='w-full flex justify-end mt-3'>
                                <button
                                    onClick={handleCollapse}
                                    className='bg-gray-50 text-xs dark:bg-gray-800 text-gray-700 rounded-md px-3 py-1 inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 shadow-sm'
                                    aria-label='Show less'
                                >
                                    <FiChevronUp size={14} />
                                    Show less
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>

            <div className='w-full flex justify-start items-center flex-wrap mt-2 mb-1'>
                {
                    iconPack?.map((curr, index) => (
                        <div key={index} className='p-1 h-8 w-8 relative group/inner-group flex items-center justify-center'>
                            {/* tooltip: positioned above the icon, centered, with small arrow */}
                            <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover/inner-group:block'>
                                <div className='bg-[#212121] text-white text-xs rounded-md px-3 py-2 relative whitespace-nowrap'>
                                    {curr.alt}
                                    <svg
                                        className='absolute left-1/2 transform -translate-x-1/2 top-full'
                                        width='12'
                                        height='6'
                                        viewBox='0 0 12 6'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M0 0L6 6L12 0H0Z' fill='#161616' />
                                    </svg>
                                </div>
                            </div>
                            <img className='w-6 h-6 object-contain' src={curr.image} alt={curr.alt} />
                        </div>
                    ))
                }
            </div>

            <a
                href={liveURL}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-accent font-semibold mt-3'
                aria-label='Open live project in new tab'
            >
                <FiExternalLink size={16} />
                <span>Live Project</span>
            </a>
        </div>
    )
}

ProjectCard2.propTypes = {
    iconPack: PropTypes.array,
    projectTitle: PropTypes.string,
    descritpion: PropTypes.string,
    liveURL: PropTypes.string,
    imageURL: PropTypes.string,
    idx: PropTypes.number
}

export default ProjectCard2