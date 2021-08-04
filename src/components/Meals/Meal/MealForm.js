import Input from '../../Shared/Input';

import styles from './MealForm.module.css';


const MealForm = ({ id }) => {
    return (
        <form className={styles.form}>
            <Input
                id={id}
                label="Amount"
                type="number"
                min="1"
                max="5"
                step="1"
                defaultValue="1"
            />

            <button>+ Add</button>
        </form>
    );
};

export default MealForm;
