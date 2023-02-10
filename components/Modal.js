export default ({ children, isOpen }) => isOpen && (
    <div className="fixed top-0 left-0 z-20 w-full bg-black/50">
        {children}
    </div>
)