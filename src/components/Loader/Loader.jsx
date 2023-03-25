import { MdOutlineCameraswitch } from 'react-icons/md';
import css from './Loader.module.css';

export const Loader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className={css.wrapper}>
        <MdOutlineCameraswitch
          className={css.loader}
          visible={true}
        />
      </div>
    );
  }
};

export default Loader;