import Flowchart from "../Flowchart_Editor/Flowchart";
import ParticleBackground from "../../ParticleBackground";
import Header from "../../Components/Header/Header";
export default function Home(){
    return(
        <>
            <Header/>
            <Flowchart/>
            <ParticleBackground/>
        </>
    )
}