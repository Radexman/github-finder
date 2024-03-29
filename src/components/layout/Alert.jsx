import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    <div className='flex'>
      {alert !== null && (
        <p className='mb-4 flex items-start space-x-2'>
          {alert.type === 'error' && (
            <svg
              className='mt-0.5 h-6 w-6 flex-none'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle cx='12' cy='12' r='12' fill='#fecdd3'></circle>
              <path
                d='M8 8l8 8M16 8l-8 8'
                stroke='#b91c1c'
                strokeWidth='2'
              ></path>
            </svg>
          )}
          <p className='flex-1 text-base font-semibold leading-7 text-white'>
            <strong>{alert.msg}</strong>
          </p>
        </p>
      )}
    </div>
  );
};

export default Alert;
