import React from 'react';

// import { Container } from './styles';

interface PokemonProps {
  collapsed?: string;
}

const Collapse: React.FC<PokemonProps> = ({
  collapsed,
  children,
}) => {
  const [isCollapsed, setIsCollapsed] =
    React.useState(collapsed);

  return (
    <>
      <button
        className="collapse-button"
        onClick={() => setIsCollapsed(isCollapsed)}
      >
        {isCollapsed ? 'Show' : 'Hide'} oioioioioi
      </button>
      <div
        className={`collapse-content ${
          isCollapsed ? 'collapsed' : 'expanded'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Collapse;
