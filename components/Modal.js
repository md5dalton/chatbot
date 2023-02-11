export default ({ children, isOpen }) => (
    <div 
        className={`fixed top-0 left-0 z-20
        w-full h-full bg-black/50 transition-all duration-200 ease-in-out
        ${isOpen ? "" : "translate-x-[-100vw]"}
        md:translate-x-0 md:w-auto`}>
        {children}
    </div>
)