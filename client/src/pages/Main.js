import React from "react";

// Antd
import { Spin } from "antd";

// Components
import Photo from "../components/photo/Photo";
import SubmitButton from "../components/button/SubmitButton";

// Hooks
import useGetPhoto from "../hooks/UseGetPhoto";

// Styles
import * as S from "./Main.styles";

const Main = () => {
  const { photoDetails, isLoading, isError } = useGetPhoto();

  if (isLoading || isError)
    return (
      <S.SpinnerDiv>
        <Spin />
      </S.SpinnerDiv>
    );

  return (
    <S.MainContainer>
      <Photo photoDetails={photoDetails} />
      <SubmitButton />
    </S.MainContainer>
  );
};

export default Main;
