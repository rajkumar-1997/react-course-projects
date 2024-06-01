import PropTypes from 'prop-types';
const Crd = ({ name }) => {
  return (
    <>
      <img
        src='https://images.pexels.com/photos/1433191/pexels-photo-1433191.jpeg?auto=compress&cs=tinysrgb&w=600'
        alt=''
      />
      <h1 className='bg-green-400 text-lg p-1 rounded-lg'>
        A card for photo {name}
      </h1>
    </>
  );
};
Crd.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Crd;
