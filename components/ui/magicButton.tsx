interface IProps{
    title:string
    icon?:React.ReactNode
    position?:React.ReactNode
    handleClick?:()=>void
    otherClasses?:string
}
const MagicButton = ( {title,otherClasses,icon,position,handleClick}:IProps) => {
    return ( 
        <button 
            className="max-auto  justify-center max-w-xs relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none "
            onClick={handleClick}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`${otherClasses}  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-7 text-md font-medium text-white backdrop-blur-3xl gap-2`}>
                {position === 'left' && icon} 
                {title}
                {position === 'right' && icon} 
            </span>
        </button>
     );
}

export  default MagicButton;