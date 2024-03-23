// import Image from "next/image";

export const metadata = {
  title: 'Home page',
  description: 'Hero section home page',
};

export default function HomePage() {
  return (
    <div>
      <div className="hero bg-base-100 mt-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello Baller</h1>
            <p className="py-6">
              Welcome to Your Go-To website for Basketball News and Transfers!
              Stay up-to-date with all things basketball, from the latest news
              to player transfers. Whether you're a hardcore fan or just
              curious, we've got you covered. From the NBA to EuroLeague (coming
              soon) , we've got everything you need to stay in the game. Dive in
              and explore the world of basketball news and transfers!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
