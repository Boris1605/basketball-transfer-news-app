import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ErrorMessage(props: Props) {
  return <div className="color-red">{props.children}</div>;
}
