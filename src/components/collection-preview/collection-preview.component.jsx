import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

export default function CollectionPreview(props) {
  const { title, items } = props;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={`item-${item.id}`} item={item} />
        ))}
      </div>
    </div>
  );
}
