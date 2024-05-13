export default function Footer() {
  return (
    <footer className="bg-white text-black">
      {/* footer nav */}
      <div>
        <div className="container-v2">
          <div className="flex justify-between items-center py-4 ">
            <div className="flex flex-col">
              <h3>Product</h3>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Contact</a>
            </div>
            <div className="flex flex-col">
              <h3>Product</h3>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Contact</a>
            </div>
            <div className="flex flex-col">
              <a href="">Facebook</a>
              <a href="">Twitter</a>
              <a href="">LinkedIn</a>
              <a href="">Instagram</a>
            </div>
            <div className="flex flex-col">
              <h3>Product</h3>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
      </div>
      {/* coprtight */}
      <div>
        <div className="w-full h-[1px] bg-[#ccc]"></div>
      </div>
      <div className="container-v2 bg-white text-black">
        <div className="flex justify-center items-center py-4">
          <div>
            <p>© 2024 Bitou Tech</p>
          </div>
          <div>
            <a href="" className="text-black">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="" className="text-black">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
