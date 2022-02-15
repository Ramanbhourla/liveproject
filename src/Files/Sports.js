import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Images from "./Images";

const Sports = () => {
  const [img, setImg] = useState(Images);
  const history = useHistory();
  const { sports } = useParams();

  const getDetail = () => {
    return (
      <div>
        <h3>
          Sport is commonly defined as an athletic activity that involves a
          degree of competition, such as netball or basketball. Some games and
          many kinds of racing are called sports. A professional at a sport is
          called an athlete. Many people play sports with their friends.
        </h3>
      </div>
    );
  };

  return (
    <div>
      <h1>Let's learn about {sports}...</h1>
      <h4>
        {sports} (or {sports}) is all forms of usually competitive physical activity
        which, through casual or organised participation, aim to use, maintain
        or improve physical ability and skills while providing entertainment to
        participants, and in some cases, spectators.
      </h4>
      <p>
        Hundreds of sports exist, from those requiring only two participants,
        through to those with hundreds of simultaneous participants, either in
        teams or competing as individuals. Sport is generally recognised as
        activities which are based in physical athleticism or physical
        dexterity, with the largest major competitions such as the Olympic Games
        admitting only sports meeting this definition, and other organisations
        such as the Council of Europe using definitions precluding activities
        without a physical element from classification as sports. However, a
        number of competitive, but non-physical, activities claim recognition as
        mind sports. The International Olympic Committee (through ARISF)
        recognises both chess and bridge as bona fide sports, and SportAccord,
        the international sports federation association, recognises five
        non-physical sports, although limits the amount of mind games which can
        be admitted as sports. Sports are usually governed by a set of rules or
        customs, which serve to ensure fair competition, and allow consistent
        adjudication of the winner. Winning can be determined by physical events
        such as scoring goals or crossing a line first, or by the determination
        of judges who are scoring elements of the sporting performance,
        including objective or subjective measures such as technical performance
        or artistic impression. In organised sport, records of performance are
        often kept, and for popular sports, this information may be widely
        announced or reported in sport news. In addition, sport is a major
        source of entertainment for non-participants, with spectator sports
        drawing large crowds to venues, and reaching wider audiences through
        sports broadcasting. According to A.T. Kearney, a consultancy, the
        global sporting industry is worth up to $620 billion as of 2013.
      </p>
      <button className="button" onClick={history.goBack}>
        Go Back
      </button>
      
      
    </div>
  );
};

export default Sports;
