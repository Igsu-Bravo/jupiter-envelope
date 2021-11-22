import React from 'react';

type EButtonTypes = 'submit' | 'reset';

interface IProps {
  disabled: boolean;
  type: EButtonTypes;
  children: React.ReactNode;
}

const Button = (props: IProps): React.ReactElement => {
  const { disabled, type, children } = props;

  const getButtonStyles = (): string =>
    disabled
      ? 'bg-gray rounded px-5 py-1 text-white cursor-not-allowed'
      : 'bg-accentMain rounded px-5 py-1 text-white';

  return (
    <button disabled={disabled} className={getButtonStyles()} type={type}>
      {children}
    </button>
  );
};

export default Button;
