export default ({ className, children, text, ...props }) => (
    <button className={`chat-row${className ? " " + className : ""}`} {...props}>
        {children}
        <p>{text}</p>
    </button>
)
