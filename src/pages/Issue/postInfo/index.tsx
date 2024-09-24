import {
  LinkPostContainer,
  LinkPostLeft,
  LinkPostRight,
  PostBatchesContainer,
  PostContainer,
} from "./style.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function PostInfo() {
  return (
    <PostContainer>
      <LinkPostContainer>
        <LinkPostRight>
          <FontAwesomeIcon icon={faChevronLeft} />
          <Link to="/">VOLTAR</Link>
        </LinkPostRight>
        <LinkPostLeft>
          <a href="">VER NO GITHUB</a>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </LinkPostLeft>
      </LinkPostContainer>
      <p>JavaScript data types and data structures</p>
      <PostBatchesContainer>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>cameronwll</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>Há 1 dia</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </div>
      </PostBatchesContainer>
    </PostContainer>
  );
}
