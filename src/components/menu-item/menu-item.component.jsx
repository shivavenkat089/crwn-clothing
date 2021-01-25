import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

function MenuItem(props) {
  const { title, imageUrl, history, linkUrl, match } = props;
  return (
    <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageContainer
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></BackgroundImageContainer>
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
}

export default withRouter(MenuItem);
