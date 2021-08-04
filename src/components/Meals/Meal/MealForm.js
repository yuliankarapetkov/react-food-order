import Input from '../../Shared/Input';
import styles from './MealForm.module.css';
import { useRef, useState } from 'react';


const MealForm = ({ id, onAdd }) => {
    const amountRef = useRef();
    const [amountValid, setAmountValid] = useState(true);

    const onSubmit = event => {
        event.preventDefault();

        const amount = +amountRef.current.value.trim();

        const valid = amount >= 1 && amount <=5;
        setAmountValid(valid);

        if (valid) onAdd(amount);
    };

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <Input
                ref={amountRef}
                id={id}
                label="Amount"
                type="number"
                min="1"
                max="5"
                step="1"
                defaultValue="1"
            />

            <button>+ Add</button>

            {!amountValid && (
                <p>
                    Please entere a valid number (1-5).
                </p>
            )}
        </form>
    );
};

export default MealForm;
