import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { fetchDisneyCharcId } from '../api';

const DetailPageWrapper = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 30px;
  font-size: 24px;
  color: #1e90ff;
  transition: color 0.3s ease;

  &:hover {
    color: #4169e1;
  }
`;

const CharacterPortrait = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const CharacterName = styled.h2`
  font-size: 48px;
  color: #1e90ff;
  margin-bottom: 30px;
  text-align: center;
`;

const FilmList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

const FilmTag = styled.li`
  font-size: 18px;
  background-color: #f0f8ff;
  color: #1e90ff;
  padding: 10px 20px;
  border-radius: 30px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1e90ff;
    color: #fff;
  }
`;

function CharacterDetailPage() {
  const { id } = useParams();
  const { isLoading, data: characterDetails } = useQuery([id], () =>
    fetchDisneyCharcId(id)
  );

  return (
    <DetailPageWrapper>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <BackButton to={'/'}> &larr; Back to List</BackButton>
          <CharacterPortrait
            src={characterDetails.imageUrl ?? DefaultImgUrl}
            alt={characterDetails.name}
          />
          <CharacterName>{characterDetails.name}</CharacterName>
          <FilmList>
            {characterDetails?.films.map((film, index) => (
              <FilmTag key={index}>{film}</FilmTag>
            ))}
          </FilmList>
        </>
      )}
    </DetailPageWrapper>
  );
}

export default CharacterDetailPage;
