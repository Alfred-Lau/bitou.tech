import {
  FacebookOutlined,
  XOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  RedditOutlined,
  DribbbleOutlined,
  MediumOutlined,
  DiscordOutlined,
} from "@ant-design/icons";

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
              <a href="">docs</a>
              <a href="">blog</a>
              <a href="">contact</a>
            </div>
            <div className="flex flex-col">
              <h3>Product</h3>
              <a href="">bitou extension</a>
              <a href="">bitou vscode extension</a>
              <a href="">bitou studio</a>
              <a href="">others</a>
            </div>
            <div className="flex flex-row gap-4 ">
              {[
                { href: "", icon: <FacebookOutlined /> },
                { href: "", icon: <XOutlined /> },
                { href: "", icon: <LinkedinOutlined /> },
                { href: "", icon: <InstagramOutlined /> },
                { href: "", icon: <RedditOutlined /> },
                { href: "", icon: <DribbbleOutlined /> },
                { href: "", icon: <MediumOutlined /> },
                { href: "", icon: <DiscordOutlined /> },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-2xl hover:cursor-pointer hover:text-blue-500 hover:underline"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div>
        <div className="w-full h-[1px] bg-[#eee]"></div>
      </div>
      <div className=" bg-white text-black">
        <div className="flex justify-center items-center py-4">
          <div>
            <p>© 2024 Bitou Tech</p>
          </div>
          <span className="mx-2">|</span>
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
