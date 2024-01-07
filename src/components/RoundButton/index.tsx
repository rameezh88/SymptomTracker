import { Container } from "./styles";

export type RoundButtonProps = {
  onPress: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
};

const RoundButton: React.FC<RoundButtonProps> = ({
  onPress,
  children,
  disabled = false,
}) => {
  return (
    <Container
      disabled={disabled}
      onPress={() => {
        if (!disabled) {
          onPress();
        }
      }}
    >
      {children}
    </Container>
  );
};

export default RoundButton;
