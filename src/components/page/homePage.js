import Heading from "../section/headingPages/heading";
import Specials from "../section/headingPages/specials";
import Testimonials from "../section/headingPages/testimonials";
import About from "../section/headingPages/about";
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