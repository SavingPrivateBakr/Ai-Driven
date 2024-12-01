import styles from "./Background.module.css"

function Background({children})
{
    return(
        <div className={`h-screen w-full bg-cover bg-center overflow-hidden ${styles.body}`}>
               {children}
        </div>
    )
}

export default Background;

