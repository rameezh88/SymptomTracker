import { differenceInDays, format, formatDistance } from "date-fns";
import { useMemo } from "react";
import { Symptom } from "../../types";
import SeverityIndicator from "../SeverityIndicator";
import {
  Container,
  DateTime,
  Description,
  LeftContainer,
  Name,
  RightContainer,
} from "./styles";

export type SymptomListItemProps = {
  symptom: Symptom;
};

const SymptomListItem: React.FC<SymptomListItemProps> = ({ symptom }) => {
  const dateTime = useMemo(() => {
    if (differenceInDays(new Date(), new Date(symptom.time)) < 1) {
      return format(symptom.time, "HH:mm");
    } else {
      return formatDistance(new Date(symptom.time), new Date());
    }
  }, [symptom.time]);

  return (
    <Container>
      <LeftContainer>
        <Name>{symptom.name}</Name>
        <Description ellipsizeMode="tail" numberOfLines={2}>
          {symptom.description}
        </Description>
      </LeftContainer>
      <RightContainer>
        <DateTime>{dateTime}</DateTime>
        <SeverityIndicator severity={symptom.severity} />
      </RightContainer>
    </Container>
  );
};

export default SymptomListItem;
