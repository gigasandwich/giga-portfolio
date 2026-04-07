export default function BorderedIcon({ icon } : { icon: string }) {
    return (
        <div className="p-4 bg-tertiary rounded-2xl text-white">
            <i className={`fas ${icon} text-3xl`}></i>
        </div>
    )
}