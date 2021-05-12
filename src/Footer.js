import './Footer.css';

function Footer (){
  let name = 'Peter';
  return (
    <div className="Site-footer"><p>React App is Great and {name} have that grade --{'>'} { name === 'Peter' ? 2**2 : 'Nooo'}.</p>
    <strong>HoHoHo</strong>
    </div>
  );
};

export default Footer