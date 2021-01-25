import { withRouter } from 'react-router-dom';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';

function CollectionPreview(props) {
  const { title, items, routeName, history, match } = props;
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.url}/${routeName}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={`item-${item.id}`} item={item} />
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}

export default withRouter(CollectionPreview);
