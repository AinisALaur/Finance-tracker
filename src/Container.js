import './Container.css'

function Container({ children }){
    return(
        <div className = "my-container">
            {children}
        </div> 
    )
}

export default Container;