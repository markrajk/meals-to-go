import styled, { css } from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg.primary};
  `}
`;

export const RestaurantCardCover = styled(Card.Cover)`
  ${({ theme }) => css`
    padding: ${theme.space[3]};
    background-color: ${theme.colors.bg.primary};
  `}
`;

export const Address = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.body}
    font-size: ${theme.fontSizes.caption};
  `}
`;

export const Info = styled.View`
  ${({ theme }) => css`
    padding: ${theme.space[3]};
  `}
`;

export const Rating = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    padding-top: ${theme.space[2]};
    padding-bottom: ${theme.space[2]};
  `}
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
