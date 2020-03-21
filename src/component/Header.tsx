import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  return <header>{children}</header>;
};

export default Header;
