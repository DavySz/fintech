import { ConciliationCard } from "../../components/conciliation-card/conciliation-card";
import { Container } from "./dashboard.styles";

export const Dashboard: React.FC = () => {
    return (
        <Container>
            <ConciliationCard variant="outcome" title="Entrada" value={2500} />
        </Container>
    );
};
