import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { fetchDisneyCharc } from '../api';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const PageHeader = styled.header`
  margin-bottom: 50px;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 60px;
  color: #1e90ff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
`;

const CharacterGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

const CharacterCard = styled.li`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  a {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CharacterName = styled.span`
  display: block;
  font-size: 24px;
  padding: 15px;
  text-align: center;
  background-color: #f0f8ff;
  color: #1e90ff;
`;

function CharacterListPage() {
  const { isLoading, data: characters } = useQuery(
    ['allDisneyCharacters'],
    fetchDisneyCharc
  );
  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle>Disney Characters</PageTitle>
      </PageHeader>
      {isLoading ? (
        'Loading...'
      ) : (
        <CharacterGrid>
          {characters?.slice(0, 100).map((character) => (
            <CharacterCard key={character.id}>
              <Link to={`/detail/${character.id}`}>
                <CharacterImage src={character.imageUrl} alt={character.name} />
                <CharacterName>{character.name}</CharacterName>
              </Link>
            </CharacterCard>
          ))}
        </CharacterGrid>
      )}
    </PageWrapper>
  );
}

export default CharacterListPage;
