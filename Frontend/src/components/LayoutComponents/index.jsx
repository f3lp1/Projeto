import './styles.css'

export const LayoutComponents = (props) => {
    return (
        <div className="container">
            <div className="inputContainer">
                <div className="footer">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
