export default function Parallax({image, children} : {image: string; children: React.ReactNode}) {
    return (
        <div id="experience" className="relative overflow-visible rounded-3xl border border-white/5"
                style={{ backgroundImage: `url('${image}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {children}
        </div>
    )
}