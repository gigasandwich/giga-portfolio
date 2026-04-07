export default function Parallax({image, children} : {image: string; children: React.ReactNode}) {
    const imageExists = image != null && image.trim() != "";
    const additionalClasses = imageExists ? "rounded-3xl border border-white/5" : "";

    return (
        <div id="experience" 
            className={`relative overflow-visible ${additionalClasses}`}
                style={{ backgroundImage: `url('${image}')`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {children}
        </div>
    )
}