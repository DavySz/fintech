import { useState } from "react";
import { ButtonTransaction } from "../../components/button-transaction/button-transaction";
import { Input } from "../../components/input/input";
import { Container, ButtonWrapper, Row } from "./create-transaction.styles";
import { InputArea } from "../../components/input-area/input-area";
import { Button } from "../../components/button/button";
import { SelectTransaction } from "../../components/select-transaction/select-transaction";
import { ICreateTransaction } from "./create-transaction.types";
import { CreateTransactionSpace } from "../../../domain/usecases";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms/user.atom";
import { CardType } from "../../components/transaction-card/transaction-card.types";

export const CreateTransaction: React.FC<ICreateTransaction> = ({
    handleCreateTransaction,
}) => {
    const [user, _] = useRecoilState(userState);

    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [transactionType, setTransactionType] = useState("");
    const [openCategoryModel, setOpenCategoryModal] = useState(false);
    const [category, setCategory] = useState<CardType>("" as CardType);

    const createTransaction = () => {
        const transaction: CreateTransactionSpace.Params = {
            user_id: user.user_id,
            category_id: category,
            type: transactionType,
            description,
            title,
            value,
        };

        console.log(JSON.stringify(transaction));

        handleCreateTransaction(transaction);
    };

    return (
        <Container>
            <Input
                type="text"
                placeholder="Titulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Row>
                <Input
                    value={value}
                    placeholder="Value"
                    onChange={(e) => setValue(e.target.value)}
                />
                <ButtonTransaction
                    onClick={() => setTransactionType("income")}
                    type="income"
                />
                <ButtonTransaction
                    onClick={() => setTransactionType("outcome")}
                    type="outcome"
                />
            </Row>
            <InputArea
                value={description}
                placeholder="Descrição"
                onChange={(e) => setDescription(e.target.value)}
            />
            <ButtonWrapper>
                <Button
                    variant="secondary"
                    onClick={() => setOpenCategoryModal(true)}
                >
                    Selecionar categoria
                </Button>
            </ButtonWrapper>
            <Button onClick={createTransaction}>Criar</Button>
            <SelectTransaction
                onChange={(category) => setCategory(category)}
                onClose={() => setOpenCategoryModal(false)}
                isVisible={openCategoryModel}
            />
        </Container>
    );
};
