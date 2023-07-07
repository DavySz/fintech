import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ISelectTransaction } from "./select-transaction.types";
import { Checkbox } from "../checkbox/checkbox";
import { icons } from "./icons";
import { Text } from "../text/text";
import { Row } from "./select-transaction.styles";
import { useState } from "react";
import { Button } from "../button/button";

export const SelectTransaction: React.FC<ISelectTransaction> = ({
    isVisible,
    onClose,
}) => {
    const [indexSelected, setIndexSelected] = useState(-1);

    function renderOptions() {
        return icons.map(({ label }, index) => {
            return (
                <Row>
                    <Checkbox
                        isChecked={index === indexSelected}
                        onClick={() => setIndexSelected(index)}
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
