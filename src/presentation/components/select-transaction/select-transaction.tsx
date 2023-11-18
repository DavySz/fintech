import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { IIcons, ISelectTransaction } from "./select-transaction.types";
import { Checkbox } from "../checkbox/checkbox";
import { icons } from "./icons";
import { Text } from "../text/text";
import { Row } from "./select-transaction.styles";
import { useState } from "react";
import { Button } from "../button/button";
import { CardType } from "../transaction-card/transaction-card.types";

export const SelectTransaction: React.FC<ISelectTransaction> = ({
    isVisible,
    onChange,
    onClose,
}) => {
    const [indexSelected, setIndexSelected] = useState(-1);

    const handleSelectCategory = (category: CardType, index: number) => {
        setIndexSelected(index);
        onChange(category);
    };

    function renderOptions() {
        return icons.map(({ label, category }, index) => {
            return (
                <Row key={category}>
                    <Checkbox
                        isChecked={index === indexSelected}
                        onClick={() => handleSelectCategory(category, index)}
                    />
                    <Text size="18" weight="500">
                        {label}
                    </Text>
                </Row>
            );
        });
    }

    return (
        <Modal
            open={isVisible}
            onClose={onClose}
            styles={{
                modal: {
                    minWidth: 500,
                },
            }}
        >
            {renderOptions()}
            <Button onClick={onClose}>Selecionar</Button>
        </Modal>
    );
};
