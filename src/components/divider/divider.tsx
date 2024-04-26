import React from 'react';

import './divider.scss';

type Props = {
  vartical?: boolean;
} & React.HTMLProps<HTMLHRElement>;

export const Divider: React.FC<Props> = ({ ...props }) => {
  const className = props.className
    ? `${props.className} component-divider`
    : 'component-divider';

  return <hr
    {...props}
    className={className} />;
}
