import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function People({ data }) {
  return (
    <>
      <h1>People</h1>
      <Grid column={3}>
        {data.map((people, index) => {
          return (
            <Grid.Column key={index}>
              <Card>
                <Card.Content>
                  <Card.Header>{people.name}</Card.Header>
                  <Card.Description>
                    <strong>Height</strong>
                    <p>{people.height}</p>
                    <strong>Mass</strong>
                    <p>{people.mass}</p>
                    <strong>Hair Color</strong>
                    <p>{people.hair_color}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
