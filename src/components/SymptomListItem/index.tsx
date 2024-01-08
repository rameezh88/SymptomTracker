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
  const { severity, date } = symptom;
  const dateTime = useMemo(() => {
    // Return a human readable date/time string
    if (date) {
      if (differenceInDays(new Date(), new Date(date)) < 1) {
        return format(date, "HH:mm");
      } else {
        return formatDistance(new Date(date), new Date());
      }
    }
  }, [date]);

  return (
    <Container>
      <LeftContainer>
        {/* Display symptom name */}
        <Name>{symptom.name}</Name>
        <Description ellipsizeMode="tail" numberOfLines={2}>
          {/* Display description, but just "..." if it's empty */}
          {symptom.description || "..."}
        </Description>
      </LeftContainer>
      <RightContainer>
        {/* Display date/time */}
        <DateTime>{dateTime}</DateTime>
        {/* Display severity emoji */}
        {severity && <SeverityIndicator severity={severity} />}
      </RightContainer>
    </Container>
  );
};

export default SymptomListItem;
