import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Layout example (about)</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        itaque mollitia, voluptatibus ipsam culpa minima eum molestiae totam
        fugit quos?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti minus
        neque deleniti, rem quam quod corporis eaque repellendus consequuntur
        praesentium recusandae quis molestias suscipit laudantium necessitatibus
        repudiandae tempore quaerat et eligendi fugiat omnis vero dolorum
        incidunt ratione? Rerum nisi in corporis, culpa doloribus asperiores,
        recusandae doloremque dolorum quas, distinctio eius!
      </p>
      <h3>Test Layout Example</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, labore
        repellendus id porro, obcaecati quas tempora perferendis nam dignissimos
        pariatur iste facilis impedit cum, vero laborum. Laudantium sapiente
        totam, quaerat ex saepe rerum aliquid et pariatur perferendis libero
        sint accusantium odit quisquam nostrum doloribus tempora fugiat dolor
        exercitationem error placeat. Ducimus quasi tempore sunt temporibus.
        Quod, atque id? Perferendis id cupiditate fuga a, voluptates laudantium
        vitae aut laborum ullam veniam maxime quaerat suscipit sapiente placeat
        aperiam fugiat nesciunt neque maiores accusantium soluta labore. Iusto
        consectetur numquam vero repellat ab perspiciatis adipisci fugit autem
        nulla harum, natus facere. Tempore, adipisci voluptatibus!
      </p>
    </section>
  );
};
export default About;
About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
