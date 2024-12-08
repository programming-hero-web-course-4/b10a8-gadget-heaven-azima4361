

const Footer = () => {
    return (
      <div className="container mx-auto   text-center  py-10 " >
        <div className="space-y-3 w-1/2 mx-auto mb-7">
          <h3 className="text-3xl font-bold">Gadget Heaven</h3>
          <p className="">Leading the way in cutting-edge technology and innovation.</p>
        </div>
 <footer className="footer  p-10 w-4/5 mx-auto flex justify-around  border-t-2 ">
  <nav>
    <h6 className="footer-title text-black">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">
Order Tracking
</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav>
    <h6 className="footer-title text-black">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
    
  </nav>
  <nav>
    <h6 className="footer-title text-black">Legal</h6>
    <a className="link link-hover">Terms of service</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
      </div>
       
    );
};

export default Footer;