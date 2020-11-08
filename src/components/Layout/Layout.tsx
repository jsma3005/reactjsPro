import React from 'react';
import cn from 'classnames';
import cls from './Layout.module.scss';

interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = null }) => (
  <div className={cn(cls.root, className)}>{children}</div>
);

export default Layout;