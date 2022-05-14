import React from "react";
import { Link } from "react-router-dom";
// component
import Helmet from "../../components/Helmet";
import AnimalSlider from "../../components/AnimalSlider";
import Section, { SectionTitle, SectionBody } from "../../components/Section";
import Grid from "../../components/Grid";
import AnimalCard from "../../components/AnimalCard";
// fake data
import animalsliderData from "../../assets/fake-data/animal-slider";
import animalData from "../../assets/fake-data/animalData";
// img
import banner from "../../assets/images/Banner.png";

const Home = () => {
  return (
    <Helmet title="home">
        {/* hero slider */}
        <AnimalSlider
          data={animalsliderData}
          control={true}
          auto={false}
          timeOut={5000}
        />
        {/* end hero slider */}

        {/* endangered animals */}
        <Section>
          <SectionTitle>CÁC LOÀI ĐỘNG VẬT NGUY CƠ TUYỆT CHỦNG</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {animalData.getAnimal(4).map((item, index) => (
                <AnimalCard
                  key={index}
                  image={item.image}
                  image2={item.image2}
                  name={item.Name}
                  class={item.class}
                  slug={item.slug}
                  title="show"
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        {/* endangered animals */}

        {/* banner */}
        <Section>
          <SectionBody>
            <Link to="/catalog">
              <img src={banner} alt="" />
            </Link>
          </SectionBody>
        </Section>
        {/* end banner */}

        {/* endangered animals */}
        <Section>
          <SectionTitle>PHÂN LOẠI CÁC LOÀI ĐỘNG VẬT</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {animalData.getAllAnimalCategory().map((item, index) => (
                <AnimalCard
                  key={index}
                  image={item.image}
                  image2={item.image2}
                  name={item.Name}
                  class={item.class}
                  slug={item.slug}
                  title="show"
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        {/* endangered animals */}
    </Helmet>
  );
};

export default Home;
