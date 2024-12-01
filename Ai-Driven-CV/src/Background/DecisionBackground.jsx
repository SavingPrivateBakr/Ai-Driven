import styles from "./DecisionBackground.module.css"
import Stars from "../Stars/Stars";
function DecisionBackground({children})
{
    return(
        <div className={`${styles.body} h-screen w-full bg-cover bg-center overflow-hidden`}>
            <Stars />
               {children}
        </div>
    )
}

export default DecisionBackground;

