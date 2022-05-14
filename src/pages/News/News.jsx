import React from "react";
import animalData from "../../assets/fake-data/animalData";
import NewsData from "../../assets/fake-data/NewsData";
import AnimalCard from "../../components/AnimalCard";
import Grid from "../../components/Grid";
import Helmet from "../../components/Helmet";
import Section, { SectionTitle, SectionBody } from "../../components/Section";

const News = () => {
  return (
    <Helmet title="News">
      {/* endangered animals */}
      <Section>
        <SectionTitle>Danh Sách các loài động vật</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {NewsData.map((item, index) => (
              <AnimalCard
                key={index}
                image={item.image}
                image2={item.image}
                title={item.name}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* endangered animals */}
    </Helmet>
  );
};

export default News;
