import React, { useEffect } from 'react';

import { useAuth } from '../../hooks/auth';
import { Container, MapContainer } from './styles';

import Map from '../../components/Map';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  // useEffect(() => {}, []);

  return (
    <Container>
      <MapContainer>
        <h1>People near you:</h1>
        <Map />
      </MapContainer>
    </Container>
  );
};

export default Dashboard;
