import React from "react";

// Styles
import * as S from "./Photo.styles";
const Photo = ({ photoDetails }) => {
  return <S.PhotoContainer>{photoDetails.data}</S.PhotoContainer>;
};

export default Photo;
