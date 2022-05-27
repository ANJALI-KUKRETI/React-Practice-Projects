import styles from './store-ui-shared.module.scss';

/* eslint-disable-next-line */
export interface StoreUiSharedProps {}

export function StoreUiShared(props: StoreUiSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StoreUiShared!</h1>
    </div>
  );
}

export default StoreUiShared;
