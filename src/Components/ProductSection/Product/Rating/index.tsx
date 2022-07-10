import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledRating } from "./styles";

interface IProps {
  stars: number;
}

export default function (props: IProps) {
  return (
    <StyledRating>
      {Array(5)
        .fill(false)
        .map((item, index) => {
          return (
            <span key={index} className={props.stars > index ? "checked" : ""}>
              <FontAwesomeIcon icon={faStar} />
            </span>
          );
        })}
    </StyledRating>
  );
}
