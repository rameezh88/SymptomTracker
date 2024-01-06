import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import { SymptomSeverity } from "../../types";

export type SeverityIndicatorProps = {
  severity: SymptomSeverity;
};

const SeverityIndicator: React.FC<SeverityIndicatorProps> = ({ severity }) => {
  switch (severity) {
    case SymptomSeverity.VeryLow:
      return (
        <FontAwesome5 name="meh" size={25} color={colors.severity.veryLow} />
      );
    case SymptomSeverity.Low:
      return (
        <FontAwesome5
          name="meh-rolling-eyes"
          size={25}
          color={colors.severity.low}
        />
      );
    case SymptomSeverity.Medium:
      return (
        <MaterialCommunityIcons
          name="emoticon-sad-outline"
          size={28}
          color={colors.severity.medium}
        />
      );
    case SymptomSeverity.High:
      return (
        <FontAwesome5 name="sad-tear" size={25} color={colors.severity.high} />
      );
    case SymptomSeverity.VeryHigh:
      return (
        <FontAwesome5
          name="sad-cry"
          size={25}
          color={colors.severity.veryHigh}
        />
      );
    default:
      return null;
  }
};

export default SeverityIndicator;
