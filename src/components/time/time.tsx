import React from 'react';

type Props = {
  time?: string;
} & React.HTMLProps<HTMLHRElement>;

export const Time: React.FC<Props> = ({ ...props }) => {
  const dateNow = new Date().toISOString().split('T')[0];

  const renderTime = (date = 'now') => {
    if (date == 'now') return <time dateTime={dateNow}>Present</time>;

    const [year, month] = date.split('-');

    return <time dateTime='2019-01'>{`${month}/${year}`}</time>
  }

  return renderTime(props.time);
}
