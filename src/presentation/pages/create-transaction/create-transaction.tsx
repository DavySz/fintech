import { useState } from "react";
import { ButtonTransaction } from "../../components/button-transaction/button-transaction";
import { Input } from "../../components/input/input";
import { Container, ButtonWrapper, Row } from "./create-transaction.styles";
import { InputArea } from "../../components/input-area/input-area";
import { Button } from "../../components/button/button";
import { SelectTransaction } from "../../components/select-transaction/select-transaction";

export const CreateTransaction: React.FC = () => {
    const [currency, setCurrency] = useState("");
    const [selectTransactionType, setSelectTransactionType] = useState(false);

    return (
        <Container>
            <Input type="text" placeholder="Titulo" />
            <Row>
                <Input
                    value={currency}
                    placeholder="Value"
                    onChange={(e) => setCurrency(e.target.value)}
                />
                <ButtonTransaction onClick={() => {}} type="income" />
                <ButtonTransaction onClick={() => {}} type="outcome" />
            </Row>
            <InputArea placeholder="Descrição" />
            <ButtonWrapper>
                <Button
                    variant="secondary"
                    onClick={() => setSelectTransactionType(true)}
                >
                    Selecionar categoria
                </Button>
            </ButtonWrapper>
            <Button>Criar</Button>
            <SelectTransaction
                isVisible={selectTransactionType}
                onClose={() => setSelectTransactionType(false)}
            />
        </Container>
    );
};
