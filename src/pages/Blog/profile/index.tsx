import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "./../../../assets/avatar.svg";
import {
  ProfileBatchesContainer,
  ProfileAvatar,
  ProfileContainer,
  ProfileLink,
  ProfileTitle,
  ProfileTitleContainer,
} from "./style.ts";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileAvatar src={Avatar} alt="Avatar" />
      <ProfileTitleContainer>
        <ProfileTitle>
          <p>Cameron Williamson</p>
          <ProfileLink>
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ProfileLink>
        </ProfileTitle>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ProfileBatchesContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </ProfileBatchesContainer>
      </ProfileTitleContainer>
    </ProfileContainer>
  );
}
