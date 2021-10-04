import { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { RingContext } from '../../App';
import useServices from '../../Hooks/useServices';
import './MoreDetails.css'
const MoreDetails = () => {
    const { id } = useParams()
   const discount= useContext(RingContext)
 const history = useHistory()
    const clickHandle = ()=>{
        history.push("/services")
    }
    return (
        <div>
                    <div className="details">
                        <h1>Id Number:- { id }</h1>
                        <p>Your students will get plenty of inferencing practice with these 24 Inference Task Cards and Google Slides plus an optional self-checking version is included. Each card/slide features a shortThe Aztecs also had a well-developed theory about education, which has an equivalent word in Nahuatl called tlacahuapahualiztli. It means "the art of raising or educating a person",[6] or "the art of strengthening or bringing up men".[7] This was a broad conceptualization of education, which prescribed that it begins at home, supported by formal schooling, and reinforced by community living. Historians cite that formal education was mandatory for everyone regardless of social class and gender.[8] There was also the word neixtlamachiliztli, which is "the act of giving wisdom to the face."[7] These concepts underscore a complex set of educational practices, which was oriented towards communicating to the next generation the experience and intellectual heritage of the past for the purpose of individual development and his integration into the community.After the Fall of Rome, the Catholic Church became the sole preserver of literate scholarship in Western Europe.[9] The church established cathedral schools in the Early Middle Ages as centres of advanced education. Some of these establishments ultimately evolved into medieval universities and forebears of many of Europe's modern universities.[4] During the High Middle Ages, Chartres Cathedral operated the famous and influential Chartres Cathedral School. The medieval universities of Western Christendom were well-integrated across all of Western Europe, encouraged freedom of inquiry, and produced a great variety of fine scholars and natural philosophers, including Thomas Aquinas of the University of Naples, Robert Grosseteste of the University of Oxford, an early expositor of a systematic method of scientific experimentation,[10] and Saint Albert the Great, a pioneer of biological field research.[11] Founded in 1088, the University of Bologne is considered</p>
                <p>Discout:- <b>{ discount}</b></p>
                <div className="btn">
                              
                                    <button onClick={clickHandle}>Previous</button>
                            
                        </div>
               </div>
           </div>
    );
};

export default MoreDetails;