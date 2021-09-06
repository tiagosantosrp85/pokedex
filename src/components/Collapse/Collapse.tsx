import React, { useState } from 'react';
import { Btn, Content } from './styles';

// import { Container } from './styles';
interface CollapseProps {
  skills: string[];
}

const Collapse: React.FC<CollapseProps> = ({ skills }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <Btn
        isOpen={isCollapsed}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        Pokemons <span>{isCollapsed ? '-' : '+'}</span>
      </Btn>

      {isCollapsed && (
        <Content isOpen={isCollapsed}>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </Content>
      )}
    </>
  );
};

export default Collapse;
