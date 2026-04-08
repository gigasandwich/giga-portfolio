type BorderedIconProps = {
    icon: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function BorderedIcon({ icon, ...props } : BorderedIconProps) {
    return (
        <div className="p-4 bg-tertiary rounded-2xl text-white" {...props}>
            <i className={`fas ${icon} text-3xl`}></i>
        </div>
    )
}