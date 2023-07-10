import Heading from "../sections/headingPages/heading";
import Specials from "../sections/headingPages/specials";
import Testimonials from "../sections/headingPages/testimonials";
import About from "../sections/headingPages/about";
export default function Homepage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}