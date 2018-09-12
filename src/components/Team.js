import React from 'react';
import styled from 'react-emotion';
import Scrollbars from 'react-custom-scrollbars';
import { isEmpty } from 'lodash';
import Heading from './elements/Heading';
import Section from './elements/Section';
import TeamMember from './TeamMember';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #d62929;
  }
`;

const StyledDiv = styled('div')`
  display: block;
  max-width: 1200px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SubSection = styled('div')`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Cont = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        overflowX: 'scroll'
      }}
    >
      {children}
    </div>
  );
};

class Team extends React.Component {
  render() {
    const { djs, sales, producers } = this.props;
    return (
      <StyledDiv>
        <Section id="team">
          <Heading h="h1" style={{ padding: '0' }}>
            {' '}
            Team{' '}
          </Heading>
          <SubSection>
            <Heading h="h2"> DJs </Heading>
            <Scrollbars autoHide renderView={Cont}>
              {!isEmpty(djs.items) &&
                djs.items.map(dj => (
                  <TeamMember
                    name={dj.fields.name}
                    photo={dj.fields.photo.fields.file.url}
                    key={dj.sys.createdAt}
                  />
                ))}
            </Scrollbars>
          </SubSection>
          <SubSection>
            <Heading h="h2"> SALES </Heading>
            <Scrollbars autoHide renderView={Cont}>
              {!isEmpty(sales.items) &&
                sales.items.map(sale => (
                  <TeamMember
                    name={sale.fields.name}
                    photo={sale.fields.photo.fields.file.url}
                    key={sale.sys.createdAt}
                  />
                ))}
            </Scrollbars>
          </SubSection>
          <SubSection>
            <Heading h="h2" style={{ margin: 0 }}>
              {' '}
              Producers{' '}
            </Heading>
            <Scrollbars autoHide renderView={Cont}>
              {!isEmpty(producers.items) &&
                producers.items.map(producer => (
                  <TeamMember
                    name={producer.fields.name}
                    photo={producer.fields.photo.fields.file.url}
                    key={producer.sys.createdAt}
                  />
                ))}
            </Scrollbars>
          </SubSection>
        </Section>
      </StyledDiv>
    );
  }
}

export default Team;
