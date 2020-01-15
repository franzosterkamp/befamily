import styled from '@emotion/styled';
import { fadeIn } from '../General/Animation';

export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  display: ${props => (props.rateClicked ? 'none' : 'flex')};
`;

export const FilterButtonWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  justify-content: space-evenly;
`;

export const AdressWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5px;
  width: 90%;
  border-bottom: 1px black solid;
  border-top: 1px black solid;
  padding: 10px 0px 10px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  padding: 10px 0px 10px 0;
`;

export const RateWrapper = styled(Wrapper)`
  margin-top: 20px;
  border-bottom: 1px solid black;
`;

export const AdressBox = styled.div`
  display: flex;
  flex-flow: column;
`;

export const AgeLabelWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 80%;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.special};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export const CategoryLabelWrapper = styled(AgeLabelWrapper)`
  background-color: ${props => props.theme.colors.extra};
`;

export const QuarterLabelWrapper = styled(AgeLabelWrapper)`
  background-color: ${props => props.theme.colors.rate};
`;

export const ImgWrapper = styled(ImageWrapper)`
  margin: 20px auto 0px auto;
  width: 200px;
  height: 130px;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-in;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: fit-content;
  padding: 5px;
`;

export const FooterWrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  margin-left: 15%;
  background-color: ${props =>
    props.active ? props.theme.colors.text : props.theme.colors.primary};
  color: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
  fill: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
  border-top: 3px solid ${props => props.theme.colors.primary};
`;

export const MenuWrapper = styled(FooterWrapper)`
  background-color: ${props =>
    props.menuClick ? props => props.theme.colors.text : props => props.theme.colors.primary};
  color: ${props =>
    props.menuClick ? props => props.theme.colors.primary : props => props.theme.colors.text};
  fill: ${props =>
    props.menuClick ? props => props.theme.colors.primary : props => props.theme.colors.text};
  border-top: 3px solid ${props => props.theme.colors.primary};
`;

export const MarkerSuccessWrapper = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  padding: 2px;
  border-radius: 8px;
  margin: 0 auto 0 auto 0;
  line-height: 30px;
  animation: ${fadeIn} 1s ease-in;
  height: fit-content;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  width: 95%;
  margin: 0 auto 2% auto;
  padding: 2% 0px 2% 0px;
  flex-wrap: wrap;
  height: 50px;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  border-top: 1px solid ${props => props.theme.colors.primary};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-content: space-around;
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  height: 45%;
  margin-right: 10px;
  overflow: hidden;
`;
