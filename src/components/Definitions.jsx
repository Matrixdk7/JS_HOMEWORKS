import React, {Fragment} from 'react';

const Definitions = ({data}) => {

    const items = data.map( item =>
        <Fragment key={item.id}>
            <dt>{item.dt}</dt>
            <dd>{item.dd}</dd>
        </Fragment>
    )

    return (
            <dl>
                {items}
            </dl>
    );
};

export default Definitions;