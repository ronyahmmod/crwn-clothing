import React from "react";
import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items}) => {
    return(
        <div className="collection-preview">
            <h1 className="collection-preview__title">{title}</h1>
            <div className="collection-preview__preview">
                {
                    items.filter((item, idx) => idx < 4).map(({id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;