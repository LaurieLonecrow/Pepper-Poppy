
const Footer = () => {

    function handleMapsClick() {
        if /* if we're on iOS, open in Apple Maps */
          ((navigator.platform.indexOf("iPhone") != -1) || 
           (navigator.platform.indexOf("iPad") != -1) || 
           (navigator.platform.indexOf("iPod") != -1))
           {
             console.log('maps')
          window.open(`maps://maps.google.com/maps?daddr=37.5460688,-77.4375751&amp;ll=`);
      } else {/* else use Google */
          window.open(`https://maps.google.com/maps?daddr=37.5460688,-77.4375751&amp;ll=`);
      }
      };

    return (
        <section className={'footer'}>
            <h3 className={'address-link'} onClick={() => handleMapsClick()}>212 E. Clay St. Richmond VA 23220</h3>
            <div>Our entrance is on 3rd St.</div>
        </section>
    );
};
export default Footer;